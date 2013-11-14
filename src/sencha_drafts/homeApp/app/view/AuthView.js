/*
 * File: app/view/AuthView.js
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

Ext.define('MyApp.view.AuthView', {
    extend: 'Ext.Panel',

    config: {
        id: 'authview',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Home'
            },
            {
                xtype: 'fieldset',
                title: 'Log in',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'loginField',
                        label: 'Login'
                    },
                    {
                        xtype: 'passwordfield',
                        id: 'password',
                        label: 'Password'
                    },
                    {
                        xtype: 'button',
                        id: 'homeButton',
                        ui: 'confirm',
                        text: 'Go !'
                    }
                ]
            }
        ]
    }

});