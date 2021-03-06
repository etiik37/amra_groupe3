/*
 * File: app/view/PreferencesView.js
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

Ext.define('MyApp.view.PreferencesView', {
    extend: 'Ext.Panel',
    alias: 'widget.preferencesview',

    config: {
        centered: false,
        autoDestroy: false,
        items: [
            {
                xtype: 'container',
                centered: false,
                docked: 'top',
                hidden: false,
                width: '100%',
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'numberfield',
                        centered: false,
                        component: {
                            type: 'number'
                        },
                        label: 'Notifications Refresh Time (ms)',
                        labelWrap: true,
                        name: 'notifRefreshTimeField',
                        value: 5000,
                        maxValue: 30000,
                        minValue: 0
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Time Zone',
                        labelWrap: true,
                        name: 'timeZoneField',
                        displayField: 'name',
                        store: 'timezonestore'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Language',
                        labelWrap: true,
                        name: 'languageField',
                        displayField: 'label',
                        store: 'languageStore'
                    }
                ]
            }
        ]
    }

});