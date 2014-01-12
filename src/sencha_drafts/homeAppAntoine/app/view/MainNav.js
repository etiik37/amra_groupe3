/*
 * File: app/view/MainNav.js
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

Ext.define('MyApp.view.MainNav', {
    extend: 'Ext.navigation.View',
    alias: 'widget.mainnav',

    requires: [
        'MyApp.view.HomeView',
        'Ext.navigation.Bar',
        'Ext.Button',
        'Ext.Panel'
    ],

    config: {
        itemId: 'mainnav',
        autoDestroy: false,
        layout: {
            type: 'card',
            animation: false
        },
        navigationBar: {
            centered: false,
            docked: 'top',
            itemId: 'navigationbar',
            autoDestroy: false,
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [
                {
                    xtype: 'button',
                    docked: 'left',
                    id: 'menubutton',
                    itemId: 'mybutton1',
                    ui: 'plain',
                    iconCls: 'list'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    docked: 'right',
                    id: 'notificationsbutton',
                    ui: 'plain',
                    iconAlign: 'right',
                    iconCls: 'info'
                }
            ]
        },
        items: [
            {
                xtype: 'homeview',
                title: 'SCC Portal'
            }
        ]
    }

});