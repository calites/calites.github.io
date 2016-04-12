/**
 * Angular Application to control bio site;
 */
(function() {
    var app = angular.module("bio", []);
    // Bio Section Controller;
    app.controller("BioController", function() {
        this.details = details;
    });

    var details = {
        twitter: "https://twitter.com/CaliTes",
        linkedin: "https://www.linkedin.com/in/calites",
        email:   "cali.testerman@gmail.com"
    };

})();
