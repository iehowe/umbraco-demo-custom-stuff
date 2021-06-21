(function () {

    angular.module('umbraco')
        .controller('lwd.ordersContentApp', LWDCustomDashboardController)

    function LWDCustomDashboardController(editorService, overlayService) {
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

        this.showInfiniteEditor = function () {
            const options = {
                title: "Infinite Editor",
                view: "/App_Plugins/LWDCustom/infinite-editors/lwd-infinite-editor.html",
                size: "medium"
            }
            editorService.open(options)
        }

        this.showDialog = function () {
            const dialog = {
                view: 'views/dashboard/content/overlays/delete.html',
                submitButtonLabelKey: 'contentTypeEditor_yesDelete',
                submit: async (model) => {
                    overlayService.close();
                },
                close: () => {
                    overlayService.close();
                }
            };
            overlayService.open(dialog);
        }
    }

})();