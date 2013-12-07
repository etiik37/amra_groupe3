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
        'TimeZoneStore'
    ],
    views: [
        'AuthView',
        'MenuList',
        'ProjectSolvingNav',
        'MainNav',
        'HomeView',
        'PreferencesView'
    ],
    controllers: [
        'AuthView',
        'MainNav',
        'PreferencesView'
    ],
    name: 'MyApp',

    launch: function() {

        Ext.create('MyApp.view.AuthView', {fullscreen: true});
    }

});
