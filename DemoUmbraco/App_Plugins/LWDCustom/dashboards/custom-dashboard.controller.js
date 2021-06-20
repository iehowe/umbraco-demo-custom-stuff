(function () {

    angular.module('umbraco')
        .controller('lwd.customDashboardController', LWDCustomDashboardController)

    function LWDCustomDashboardController () {
        this.title = "Custom Dashboard"

        this.items = [
            {
                "icon": "icon-document",
                "name": "My node 1",
                "published": true,
                "description": "A short description of my node",
                "author": "Author 1"
            },
            {
                "icon": "icon-document",
                "name": "My node 2",
                "published": true,
                "description": "A short description of my node",
                "author": "Author 2"
            }
        ];

        this.options = {
            includeProperties: [
                { alias: "description", header: "Description" },
                { alias: "author", header: "Author" }
            ]
        };
    }

})();