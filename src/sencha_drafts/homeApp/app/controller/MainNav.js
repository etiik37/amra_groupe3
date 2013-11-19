/*
 * File: app/controller/MainNav.js
 *
 * This file was generated by Sencha Architect version 3.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.MainNav', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'MenuStore'
        ],
        views: [
            'MainNav',
            'MenuList',
            'ProjectSolvingNav'
        ],

        refs: {
            menulist: '#menulist'
        }
    },

    launch: function() {
        var view = Ext.create('MyApp.view.MenuList');
        var overlay = Ext.Viewport.add(view);

        Ext.Viewport.on({
            delegate: '#menuButton',
            tap: function(button) {
                // When you tap on a button, we want to show the overlay by the button we just tapped.
                overlay.showBy(button);
            }
        });
    }

});