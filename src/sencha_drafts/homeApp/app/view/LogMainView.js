/*
 * File: app/view/LogMainView.js
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

Ext.define('MyApp.view.LogMainView', {
    extend: 'Ext.Container',

    requires: [
        'Ext.field.Search',
        'Ext.field.Select',
        'Ext.field.DatePicker',
        'Ext.grid.Grid'
    ],

    config: {
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'searchfield'
            },
            {
                xtype: 'container',
                layout: {
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'selectfield',
                        width: 204,
                        name: 'appFilter',
                        options: '{text: \'All apps\',  value: \'all_apps\'},\n{text: \'Go/No-Go\', value: \'go_no_go\'},\n{text: \'TM Viewer\',  value: \'tm_viewer\'}'
                    },
                    {
                        xtype: 'selectfield',
                        width: 196,
                        name: 'levelFilter',
                        options: '{text: \'All levels\',  value: \'all_levels\'},\n{text: \'High\', value: \'high\'},\n{text: \'(At least ?)Medium\',  value: \'medium\'},\n{text: \'(At least ?)Low\',  value: \'low\'}'
                    },
                    {
                        xtype: 'datepickerfield',
                        width: 167,
                        name: 'startDate',
                        placeHolder: 'mm/dd/yyyy'
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'endDate',
                        placeHolder: 'mm/dd/yyyy'
                    }
                ]
            },
            {
                xtype: 'grid',
                flex: 10,
                store: 'LogsStore',
                title: 'Remove title bar',
                columns: [
                    {
                        xtype: 'column',
                        width: 110,
                        dataIndex: 'app',
                        text: 'App'
                    },
                    {
                        xtype: 'column',
                        width: 110,
                        dataIndex: 'id',
                        text: 'ID'
                    },
                    {
                        xtype: 'column',
                        width: 110,
                        dataIndex: 'message',
                        text: 'Message'
                    },
                    {
                        xtype: 'column',
                        width: 110,
                        dataIndex: 'level',
                        text: 'Level'
                    },
                    {
                        xtype: 'column',
                        width: 110,
                        dataIndex: 'date',
                        text: 'Date'
                    }
                ]
            }
        ]
    }

});