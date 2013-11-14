/*
 * File: app/view/MainNav.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
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
    extend: 'Ext.Panel',

    config: {
        id: 'mainnav',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'toolbarUp',
                title: 'SCC Portal',
                items: [
                    {
                        xtype: 'button',
                        docked: 'left',
                        id: 'menuButton',
                        ui: 'plain',
                        iconCls: 'list'
                    },
                    {
                        xtype: 'button',
                        docked: 'right',
                        id: 'notificationsButton',
                        ui: 'plain',
                        iconAlign: 'right',
                        iconCls: 'info'
                    }
                ]
            }
        ]
    }

});