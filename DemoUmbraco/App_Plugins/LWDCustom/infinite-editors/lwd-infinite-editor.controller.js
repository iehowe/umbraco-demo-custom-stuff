(function () {

    angular
        .module('umbraco')
        .controller('lwd.infiniteEditor', LWDInfiniteEditorController);

    function LWDInfiniteEditorController(editorService) {

        this.navItems = [
            { active: true, icon: 'icon-info', name: 'Info' }
        ]

        this.activeNav = this.navItems[0];

        this.editorState = 'init';

        this.handleNavItemClick = function (item) {
            this.navItems.forEach(item => item.active = false)
            item.active = true;
        }

        this.closeEditorWithoutSaving = function () {
            editorService.close()
        }
    }

})();