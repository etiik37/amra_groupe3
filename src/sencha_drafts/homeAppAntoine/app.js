/*
 * File: app.js
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

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    stores: [
        'MenuStore',
        'ProblemSolvingStore',
        'TimeZoneStore',
        'NotificationStore',
        'LanguageStore',
        'ItemsGonogo',
        'ListActionsGonogo'
    ],
    views: [
        'HomeView',
        'MainNav',
        'NotificationsList',
        'GonogoView',
        'PreferencesView',
        'ProjectSolvingNav',
        'MenuList',
        'AuthView',
        'GonogoList',
        'GonogoItem'
    ],
    controllers: [
        'GonogoView',
        'AuthView',
        'MainNav',
        'PreferencesView'
    ],
    name: 'MyApp',

    launch: function() {
        //Pour la mise à jour des notifications
        var timerCheckForNotifications;

        //Récupération du store
        var sto = Ext.getStore('itemsgonogo');
        //On affiche par défaut uniquement les GONOGO en cours
        sto.filter('finished', 'false');


        Ext.create('MyApp.view.AuthView', {fullscreen: true});
    }

});
