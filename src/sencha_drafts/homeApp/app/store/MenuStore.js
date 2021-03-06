/*
 * File: app/store/MenuStore.js
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

Ext.define('MyApp.store.MenuStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.Field',
        'Ext.util.Grouper'
    ],

    config: {
        autoLoad: true,
        storeId: 'menustore',
        proxy: {
            type: 'ajax',
            url: 'items_menu.json',
            reader: {
                type: 'json'
            }
        },
        fields: [
            {
                name: 'label'
            },
            {
                name: 'id_view'
            },
            {
                name: 'group'
            }
        ],
        grouper: {
            groupFn: function(item) {
                return item.get('group');
            }
        }
    }
});