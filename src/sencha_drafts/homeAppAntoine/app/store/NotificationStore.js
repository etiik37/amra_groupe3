/*
 * File: app/store/NotificationStore.js
 *
 * This file was generated by Sencha Architect version 3.0.1.
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

Ext.define('MyApp.store.NotificationStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field',
        'Ext.data.proxy.Ajax',
        'Ext.util.Sorter'
    ],

    config: {
        autoLoad: true,
        autoSync: true,
        storeId: 'notificationsstore',
        fields: [
            {
                dateFormat: 'd/m/Y H:i',
                name: 'date',
                type: 'date'
            },
            {
                name: 'criticity',
                type: 'string'
            },
            {
                name: 'label',
                type: 'string'
            },
            {
                name: 'description',
                type: 'string'
            }
        ],
        proxy: {
            type: 'ajax',
            simpleSortMode: true,
            url: 'notifications.json'
        },
        sorters: {
            sorterFn: function(first, second) {
                if (first >= second){
                    return 1;
                }
                else {
                    return 0;
                }
            }
        }
    }
});