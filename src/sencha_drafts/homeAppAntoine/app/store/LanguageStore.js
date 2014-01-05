/*
 * File: app/store/LanguageStore.js
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

Ext.define('MyApp.store.LanguageStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.Field'
    ],

    config: {
        autoLoad: true,
        storeId: 'languageStore',
        proxy: {
            type: 'ajax',
            url: 'items_language.json',
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
                name: 'value',
                type: 'string'
            }
        ]
    }
});