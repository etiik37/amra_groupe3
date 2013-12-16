/*
 * File: app/view/GonogoView.js
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

Ext.define('MyApp.view.GonogoView', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.gonogoview',

    config: {
        autoDestroy: false,
        layout: {
            animation: false,
            type: 'card'
        },
        tabBar: {
            docked: 'top',
            hidden: false,
            autoDestroy: false,
            activeTab: 0,
            layout: {
                align: 'center',
                pack: 'center',
                type: 'hbox'
            }
        },
        items: [
            {
                xtype: 'container',
                title: 'In progress',
                centered: false,
                height: '100%',
                autoDestroy: false,
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'dataview',
                        disableSelection: false,
                        defaultType: 'gonogoitem',
                        store: 'itemsgonogo',
                        useComponents: true
                    }
                ]
            },
            {
                xtype: 'container',
                title: 'History',
                height: '100%',
                autoDestroy: false,
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'dataview',
                        disableSelection: false,
                        defaultType: 'gonogoitem',
                        store: 'itemsgonogo',
                        useComponents: true
                    }
                ]
            }
        ]
    }

});