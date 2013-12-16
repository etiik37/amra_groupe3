/*
 * File: app/controller/GonogoView.js
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

Ext.define('MyApp.controller.GonogoView', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainnav: 'mainnav'
        },

        control: {
            "tabpanel": {
                activeitemchange: 'onTabpanelActiveItemChange'
            }
        }
    },

    onTabpanelActiveItemChange: function(container, value, oldValue, eOpts) {
        //Récupération du store
        var sto = Ext.getStore('itemsgonogo');

        //On efface tous les filtres existants
        sto.clearFilter();

        if (value.config.title !== 'History') {
            sto.filter('finished', 'false');
        }
    }

});