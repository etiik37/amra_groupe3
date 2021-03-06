/*
 * File: app/view/TMView.js
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

Ext.define('MyApp.view.TMView', {
    extend: 'Ext.Panel',

    config: {
        items: [
            {
                xtype: 'container',
                id: 'selectbar',
                items: [
                    {
                        xtype: 'selectfield',
                        id: 'satelliteselecte',
                        label: ''
                    },
                    {
                        xtype: 'selectfield',
                        id: 'tmselect',
                        label: ''
                    },
                    {
                        xtype: 'datepickerfield',
                        id: 'startdate',
                        label: '',
                        placeHolder: 'mm/dd/yyyy'
                    },
                    {
                        xtype: 'datepickerfield',
                        id: 'enddate',
                        label: '',
                        placeHolder: 'mm/dd/yyyy'
                    },
                    {
                        xtype: 'button',
                        id: 'okTM',
                        ui: 'action-round',
                        text: 'OK'
                    }
                ]
            },
            {
                xtype: 'container',
                id: 'optionsbar',
                items: [
                    {
                        xtype: 'button',
                        id: 'addgraphic',
                        ui: 'action-round',
                        iconCls: 'add',
                        text: ''
                    },
                    {
                        xtype: 'button',
                        id: 'export',
                        ui: 'action-round',
                        iconCls: 'download',
                        text: ''
                    },
                    {
                        xtype: 'button',
                        id: 'custom',
                        ui: 'action-round',
                        iconCls: 'more',
                        text: ''
                    }
                ]
            }
        ]
    }

});