/*
 * File: app/view/AuthView.js
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

Ext.define('MyApp.view.AuthView', {
    extend: 'Ext.Panel',
    alias: 'widget.authview',

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
                centered: false,
                id: 'loginform',
                layout: {
                    type: 'fit'
                },
                title: 'Log in',
                items: [
                    {
                        xtype: 'textfield',
                        id: 'loginfield',
                        label: 'Login',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        id: 'passwordfield',
                        label: 'Password',
                        required: true
                    },
                    {
                        xtype: 'button',
                        centered: false,
                        id: 'loginbutton',
                        top: '',
                        ui: 'confirm',
                        iconAlign: 'center',
                        text: 'OK'
                    },
                    {
                        xtype: 'container',
                        centered: false,
                        docked: 'bottom',
                        height: 50,
                        hidden: true,
                        html: '<p style="color:red;"><b>Wrong login/password combination<br />Login : admin<br :>Password : adminadmin</b></p>',
                        id: 'errorauthtext',
                        styleHtmlContent: true,
                        width: '100%',
                        layout: {
                            type: 'fit'
                        }
                    }
                ]
            }
        ]
    }

});