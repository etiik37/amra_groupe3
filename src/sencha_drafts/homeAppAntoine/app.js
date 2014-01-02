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


Ext.Loader.setPath('Ext.grid.column.Column','packages/sencha-touch-grid/src/grid/column/Column.js');
Ext.Loader.setPath('Ext.grid.column.Date','packages/sencha-touch-grid/src/grid/column/Date.js');
Ext.Loader.setPath('Ext.grid.Grid','packages/sencha-touch-grid/src/grid/Grid.js');

Ext.application({
    models: [
        'QuestionModel'
    ],
    stores: [
        'MenuStore',
        'ProblemSolvingStore',
        'TimeZoneStore',
        'NotificationStore',
        'LanguageStore',
        'ItemsGonogo',
        'ListActionsGonogo',
        'ListDocumentsStore',
        'QuestionsTreeStore',
        'LogsStore'
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
        'GonogoItem',
        'WikiView',
        'ProjectSolvingList',
        'DownloadDocumentsList',
        'QuestionsNav',
        'QuestionsNestedList',
        'LogMainView',
        'TMView',
        'GraphicTM'
    ],
    requires: [
        'Ext.MessageBox'
    ],
    controllers: [
        'GonogoView',
        'AuthView',
        'MainNav',
        'PreferencesView',
        'ProjectSolvingNav',
        'DownloadDocuments',
        'QuestionNav',
        'TMView'
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
