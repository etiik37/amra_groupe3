/*
 * File: app/controller/AuthView.js
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

Ext.define('MyApp.controller.AuthView', {
    extend: 'Ext.app.Controller',

    config: {
        stores: [
            'NotificationStore'
        ],
        views: [
            'MainNav'
        ],

        refs: {
            mainnav: 'mainnav',
            authview: 'authview',
            loginButton: '#loginButton',
            loginField: '#loginField',
            passwordField: '#passwordField',
            errorAuthText: '#errorAuthText',
            notificationsbutton: '#notificationsbutton',
            notificationslist: 'notificationslist'
        },

        control: {
            "#loginButton": {
                tap: 'onLoginTapButton'
            }
        }
    },

    onLoginTapButton: function(button, e, eOpts) {
        var loginField = Ext.getCmp('loginField');
        var passwordField = Ext.getCmp('passwordField');
        var label = Ext.getCmp('errorAuthText');

        label.hide();

        var login = loginField.getValue();
        var password = passwordField.getValue();

        if (login != 'admin' || password != 'adminadmin') {
            label.show();
            localStorage.setItem("authOK", "false");
        }
        else {
            //Redirection vers la page d'accueil
            var mainView = Ext.create('MyApp.view.MainNav');
            Ext.Viewport.setActiveItem(mainView);

            //On enregistre que l'utilisateur est authentifié
            localStorage.setItem("authOK", "true");

            //On enregistre le nombre de notifications
            var notificationsStore = Ext.getStore('notificationsstore');
            localStorage.setItem("previousNotifNb", 0);

            //Démarrage du timer pour la mise à jour du store des notifications
            timerCheckForNotifications = setInterval(function checkForNotifications() {
                notificationsStore.load();
                localStorage.setItem("newNotifNb", notificationsStore.getAllCount());
                var newNotifNbToPrint = localStorage.getItem('newNotifNb') - localStorage.getItem('previousNotifNb');
                if (newNotifNbToPrint !== 0) {
                    Ext.getCmp('notificationsbutton').setBadgeText(newNotifNbToPrint);
                }
            },5000);
        }

        loginField.setValue('');
        passwordField.setValue('');
    },

    init: function(application) {
        //Récupération de la variable de session
        var foo = localStorage.getItem("authOK");

        //Si l'utilisateur est déjà authentifié, on redirige vers la page d'accueil
        if (foo !== null && foo == "true") {
            var mainView = Ext.create('MyApp.view.MainNav');
            Ext.Viewport.setActiveItem(mainView);
        }
    }

});