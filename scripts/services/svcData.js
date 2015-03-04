// svcDataPopulation is a service that populates model variables
appServices.factory("svcDataPopulation", [

  function() {
    var myInsuranceType = 'General Liability';

    return {
      companyName: function() {
        return 'Acme Plumbing';
      },
      companyLegalName: function() {
        return 'Acme Plumbing Corporation LLC';
      },
      companyZip: function() {
        return '60179';
      },
      companyAddress1: function() {
        return '230 S. Wacker Drove';
      },
      companyCity: function() {
        return 'Chicago';
      },
      companyState: function() {
        return 'IL - Illinois';
      },
      companyPhone: function() {
        return '(312) 555-1212';
      },
      companyFullName: function() {
        return 'Chris Plummer';
      },
      companyFullNameFirst: function() {
        return 'Chris';
      },
      companyFullNameLast: function() {
        return 'Plummer';
      },
      companyEmail: function() {
        return 'cplummer@acmeplummingnw.com';
      },
      companyUsername: function() {
        return 'acmeplumbingchris';
      },
      companyPassword1: function() {
        return 'Test123!';
      },
      companyPassword2: function() {
        return 'Test123!';
      },
      companyMobilePhone: function() {
        return '(312) 555-1213';
      },
      companyInquiryMethod: function() {
        return 'Mobile Phone';
      },
      companyMiddleName: function() {
        return 'James';
      },
      companyJobTitle: function() {
        return 'Owner & General Manager';
      },
      companyOwnerPrincipal: function() {
        return true;
      },
      companyBusinessStart: function() {
        return '2005-05-01';
      },
      companyBusinessStructure: function() {
        return 'Sole Proprietor';
      },
      companyNumberEmployees: function() {
        return '2 -10 Employees';
      },
      primaryIndustry: function() {
        return 'Home Electronics';
      },
      insPolicy: function() {
        return 'DFHAEFUQ970';
      },
      insAmount: function() {
        return '$1,000,0000';
      },
      insIssueDate: function() {
        return '2015-01-01';
      },
      insExpirationDate: function() {
        return '2015-12-31';
      },
      insCarrier: function() {
        return 'State Farm';
      },
      insAgency: function() {
        return 'Nortwest Suburban Business Insurance';
      },
      insAgencyCounty: function() {
        return 'Cook';
      },
      insAgencyState: function() {
        return 'IL - Illinois';
      },
      insTypeSet: function(inType) {
        myInsuranceType = 'General Liability';
      },
      insTypeGet: function(inType) {
        return myInsuranceType;
      },
      uploadStatusNotStarted: function(inType) {
        var tmpHTML = '<span class="label label-default">NOT STARTED</span>';
        return {
          sequence: 1,
          markup: tmpHTML
        };
      },
      uploadStatusStarted: function(inType) {
        var tmpHTML = '<span class="label label-info">UPLOADING</span>';
        return {
          sequence: 2,
          markup: tmpHTML
        };
      },
      uploadStatusCompleted: function(inType) {
        var tmpHTML = '<span class="label label-success">COMPLETED</span>';
        return {
          sequence: 3,
          markup: tmpHTML
        };
      },
      techLegalNameFirst: function() {
        return 'Terry';
      },
      techLegalNameLast: function() {
        return 'Techout';
      },
      techServiceProviderRole: function() {
        return true;
      },
      techServiceRange: function() {
        return '50 miles or less';
      },
      techPermissionViewOrderPricing: function() {
        return true;
      },
      techBusinessPhone: function() {
        return '708-555-1212';
      },
      techMobilePhone: function() {
        return '773-555-1213';
      },
      techPrimaryEmailConfirm1: function() {
        return 'ttechout@geemail.com';
      },
      techPrimaryEmailConfirm2: function() {
        return 'ttechout@geemail.com';
      },
      techAlternateEmailConfirm1: function() {
        return 'ttechout@yeahoo.com';
      },
      techAlternateEmailConfirm2: function() {
        return 'ttechout@yeahoo.com';
      },
      techSMSAddressConfirm1: function() {
        return '7736891245@messaging.sprintpcs.com';
      },
      techSMSAddressConfirm2: function() {
        return '7736891245@messaging.sprintpcs.com';
      },
      techSecondaryContactMethod: function() {
        return 'Alternate Email Address';
      },
      techSSN: function() {
        return '***-**-1234';
      }
    };
  }
]);

// svcDataHTML is a service that populates HTML into various views
appServices.factory("svcDataHTML", [

  function() {
    var navCompanyIcon = '<span></span>';
    var navCompanyName = '<span></span>';
    var navAdminIcon = '<span></span>';
    var navAdminName = '<span></span>';

    return {
      htmlCompanyIcon: '<i class="fa fa-building-o"></i>',
      htmlCompanyName: '<span data-i18n="Acme Plumbing Corporation LLC (#86175)">Acme Plumbing Corporation LLC (#86175)</span>',
      htmlAdminIcon: '<i class="fa fa-user"></i>',
      htmlAdminName: '<span data-i18n="Chris Plummer (#47639)">Chris Plummer (#47639)</span>',
      htmlCompanyIconNull: '<span></span>',
      htmlCompanyNameNull: '<span></span>',
      htmlAdminIconNull: '<span></span>',
      htmlAdminNameNull: '<span></span>',
      setCompanyIcon: function(inHTML) {
        navCompanyIcon = inHTML;
      },
      setCompanyName: function(inHTML) {
        navCompanyName = inHTML;
      },
      setAdminIcon: function(inHTML) {
        navAdminIcon = inHTML;
      },
      setAdminName: function(inHTML) {
        navAdminName = inHTML;
      },
      getCompanyIcon: function() {
        return navCompanyIcon;
      },
      getCompanyName: function() {
        return navCompanyName;
      },
      getAdminIcon: function() {
        return navAdminIcon;
      },
      getAdminName: function() {
        return navAdminName;
      }
    };
  }
]);

// svcTeamProgressBar is a service that populates a "progress bar" UI widget on the Team pages
appServices.factory("svcTeamProgressBar", [

  function() {
    var progBarValue = '7';
    var progBarStep = '0';

    return {
      setProgBarValue: function(inValue) {
        progBarValue = inValue;
      },
      setProgBarStep: function(inValue) {
        progBarStep = inValue;
      },
      getProgBarValue: function() {
        return progBarValue;
      },
      getProgBarStep: function() {
        return progBarStep;
      }
    };
  }
]);
