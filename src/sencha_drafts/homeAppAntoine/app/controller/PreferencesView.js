/*
 * File: app/controller/PreferencesView.js
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

Ext.define('MyApp.controller.PreferencesView', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            timezonefield: '#timezonefield'
        },

        control: {
            "#timezonefield": {
                change: 'onSelectfieldChange'
            }
        }
    },

    onSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
        localStorage.setItem("timeZone", selectfield.getValue());
    }

});