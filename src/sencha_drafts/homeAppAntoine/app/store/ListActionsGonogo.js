/*
 * File: app/store/ListActionsGonogo.js
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

Ext.define('MyApp.store.ListActionsGonogo', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        autoLoad: true,
        storeId: 'listactionsgonogo',
        proxy: {
            type: 'ajax',
            url: 'list_actions_gonogo.json',
            reader: {
                type: 'json'
            }
        },
        fields: [
            {
                name: 'label',
                type: 'string'
            },
            {
                name: 'service',
                type: 'string'
            },
            {
                name: 'done',
                type: 'boolean'
            }
        ]
    }
});