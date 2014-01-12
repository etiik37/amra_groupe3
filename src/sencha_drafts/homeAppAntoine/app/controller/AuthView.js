/*
 * File: app/controller/AuthView.js
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

Ext.define('MyApp.controller.AuthView', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainnav: 'mainnav',
            authview: 'authview',
            loginbutton: '#loginbutton',
            loginfield: '#loginfield',
            passwordfield: '#passwordfield',
            errorauthtext: '#errorauthtext'
        },

        control: {
            "#loginbutton": {
                tap: 'onLoginTapButton'
            }
        }
    },

    onLoginTapButton: function(button, e, eOpts) {
        var loginField = Ext.getCmp('loginfield');
        var passwordField = Ext.getCmp('passwordfield');
        var label = Ext.getCmp('errorauthtext');

        label.hide();

        var login = loginField.getValue();
        var password = passwordField.getValue();

        if (login != 'admin' || password != 'adminadmin') {
            label.show();
            localStorage.setItem("authOK", "false");
        }
        else {
            //Redirection vers la page d'accueil
            Ext.Viewport.setActiveItem(Ext.create('MyApp.view.MainNav'));

            //On enregistre que l'utilisateur est authentifié
            localStorage.setItem("username", "admin");
            localStorage.setItem("authOK", "true");
            localStorage.setItem("userservice", "Service 1");
        }

        loginField.setValue('');
        passwordField.setValue('');


    },

    init: function(application) {
        //Récupération de la variable de session
        var varAuthOK = localStorage.getItem("authOK");

        var authView = Ext.Viewport.getActiveItem();

        //Si l'utilisateur est déjà authentifié, on redirige vers la page d'accueil
        if (varAuthOK !== null && varAuthOK == 'true') {
            Ext.Viewport.setActiveItem(Ext.create('MyApp.view.MainNav'));
        }
        else {
            Ext.Viewport.setActiveItem(authView);
        }
    }

});