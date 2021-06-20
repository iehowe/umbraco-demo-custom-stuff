(function () {

    angular.module('umbraco')
        .controller('lwd.ordersContentApp', LWDCustomDashboardController)

    function LWDCustomDashboardController() {
        this.title = "Custom Dashboard"

        this.items = [
            {
                "icon": "icon-tag",
                "name": "Watch 1",
                "amount": "RM 100",
                "customer": "Faridah",
                "date": "June 21, 2021"
            },
            {
                "icon": "icon-tag",
                "name": "Watch 1",
                "amount": "RM 100",
                "customer": "Lim",
                "date": "June 21, 2021"
            }
        ];

        this.options = {
            includeProperties: [
                { alias: "amount", header: "Amount" },
                { alias: "customer", header: "Customer" },
                { alias: "date", header: "Date" },
            ]
        };
    }

})();