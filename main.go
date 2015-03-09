package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"net/http/httputil"
	"os"
	"time"

	"github.com/justinas/alice"
)

const (
	authPassword = "Test123!"
	staticPath   = "static"
)

type authParams struct {
	Password string `json:"password"`
}

// messageParam method - validate elements
func (credentials authParams) Validate() error {
	// Set up return value
	var credentialsError error

	// Validate that a credentials string was passed. String length greater than one.
	if credentials.Password == authPassword {
		credentialsError = errors.New("Password is incorrect.")
	}

	return credentialsError
}

// getport fetches the port number from an environment variable so we can run on Heroku
func getport() string {
	var port = os.Getenv("PORT")
	// Set a default port if there is nothing in the environment
	if port == "" {
		port = "4567"
		fmt.Println("INFO: No PORT environment variable detected, defaulting to " + port)
	}
	return ":" + port
}

// loggingHandler is middleware that logs inbound request information
func loggingHandler(next http.Handler) http.Handler {
	// Define the logging code
	fn := func(w http.ResponseWriter, r *http.Request) {
		t1 := time.Now()
		next.ServeHTTP(w, r)
		t2 := time.Now()
		log.Printf("[%s] %q %v\n", r.Method, r.URL.String(), t2.Sub(t1))
	}

	// Return a handler function that wraps the logging code and the core handler function
	return http.HandlerFunc(fn)
}

// recoverHandler is middleware that recovers from a panic in the underlying request handler (if it occurs)
func recoverHandler(next http.Handler) http.Handler {
	// Define a function that defers a function to recover from a panic
	fn := func(w http.ResponseWriter, r *http.Request) {
		defer func() {
			if err := recover(); err != nil {
				log.Printf("panic: %+v", err)
				http.Error(w, http.StatusText(500), 500)
			}
		}()

		next.ServeHTTP(w, r)
	}

	return http.HandlerFunc(fn)
}

// Function that handles request to '/'
func indexHandler(w http.ResponseWriter, r *http.Request) {

	switch len(r.URL.String()) {
	// The URL is just the root path (serve the index page)
	case 1:
		log.Println("Dumping out the inbound request...")
		dumpbytes, dumperr := httputil.DumpRequest(r, true)
		if dumperr != nil {
			log.Println("Got an error attempting to dump the request", dumperr)
		}
		log.Println(string(dumpbytes))

		myIndexPagePath := "index.html"
		log.Printf("[%s] %q %s\n", r.Method, r.URL.String(), "Serving the index page.")
		http.ServeFile(w, r, myIndexPagePath)

	// Otherwise, serve the file pointe to by the URL path
	default:
		// Construct a valid local path to the resource
		tmpFilePath := staticPath + r.URL.Path
		// Serve the static content
		http.ServeFile(w, r, tmpFilePath)
	}
}

// Function that serves static Angular application files/resources
func staticAppHandler(w http.ResponseWriter, r *http.Request) {
	// All files are assumed to be in the 'public' folder... prepend "public" to construct the file path
	tmpFilePath := "public" + r.URL.Path

	// Serve the file that is assume to be located at the constructed file path
	http.ServeFile(w, r, tmpFilePath)
}

func authHandler(w http.ResponseWriter, r *http.Request) {
	// Fetch the request value associated with the "password" key
	enteredPwd := r.FormValue("password")

	// Check for a valid password
	if enteredPwd == authPassword {
		// Password is correct serve the angular app index page
		http.ServeFile(w, r, "static/index.html")
	} else {
		// Password is incorect send back and unauthorized page
		log.Println("Login failed, ask user to try again.")
		http.ServeFile(w, r, "failed.html")
	}

}

func main() {
	// Set up a middleware handlers using Alice
	publicHandlers := alice.New(loggingHandler, recoverHandler)

	// Set up route handlers
	http.Handle("/authenticate", publicHandlers.ThenFunc(authHandler))
	http.Handle("/", publicHandlers.ThenFunc(indexHandler))

	// Start the web server listening on the specified port
	defaultPort := getport()
	log.Println("Starting the webserver on port:", defaultPort)
	serveErr := http.ListenAndServe(defaultPort, nil)
	log.Printf("Program terminating with error (if any): %v", serveErr)
}
