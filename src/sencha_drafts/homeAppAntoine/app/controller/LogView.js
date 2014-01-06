/*
 * File: app/controller/LogView.js
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

Ext.define('MyApp.controller.LogView', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            logview: 'logview',
            appfilter: 'filterview #filterbar #appfilter',
            logsstore: 'logsstore'
        },

        control: {
            "#appfilter": {
                change: 'onSelectfieldChange'
            },
            "#lvlfilter": {
                change: 'onSelectfieldChange1'
            },
            "#begindatepicker": {
                change: 'onDatepickerfieldChange'
            },
            "#fieldsearch": {
                change: 'onSearchfieldChange'
            }
        }
    },

    onSelectfieldChange: function(selectfield, newValue, oldValue, eOpts) {
         //Récupération du store
                var sto = Ext.getStore('logsstore');

                //On efface tous les filtres existants
                sto.clearFilter();
                if (newValue === 'all_apps') {
                  //sto.clearFilter();
                   localStorage.setItem("appName",'null');
                   if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null && localStorage.getItem("date") !== null){
                       sto.filter('level',localStorage.getItem("lvl"));
                       sto.filter('date',localStorage.getItem("date"));
                   } else if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null) {
                       sto.filter('level',localStorage.getItem("lvl"));
                   }
                }

                if (newValue === 'go_no_go') {
                    sto.filter('app', 'Go/No-go');
                    localStorage.setItem("appName", 'Go/No-go');
                     if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null && localStorage.getItem("date") !== null){
                         sto.filter('level',localStorage.getItem("lvl"));
                         sto.filter('date',localStorage.getItem("date"));
                     } else if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null){
                        sto.filter('level',localStorage.getItem("lvl"));
                     }
                }

                if (newValue === 'tm_viewer') {
                    sto.filter('app', 'TM Viewer');
                    localStorage.setItem("appName", 'TM Viewer');
                     if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null && localStorage.getItem("date") !== null){
                        sto.filter('level',localStorage.getItem("lvl"));
                        sto.filter('date',localStorage.getItem("date"));
                     } else if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null){
                        sto.filter('level',localStorage.getItem("lvl"));
                     }
                }
                 if (newValue === 'fop_viewer') {
                    sto.filter('app', 'FOP Viewer');
                    localStorage.setItem("appName", 'FOP Viewer');
                      if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null && localStorage.getItem("date") !== null){
                         sto.filter('level',localStorage.getItem("lvl"));
                          sto.filter('date',localStorage.getItem("date"));
                      } else if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null){
                        sto.filter('level',localStorage.getItem("lvl"));
                     }

                }



    },

    onSelectfieldChange1: function(selectfield, newValue, oldValue, eOpts) {
         //Récupération du store
                var sto = Ext.getStore('logsstore');
                sto.clearFilter();
                //On efface tous les filtres existants
                if (newValue === 'all_levels') {
                   //sto.clearFilter();
                   localStorage.setItem("lvl", 'null');
                    if (localStorage.getItem("appName") !== 'null' && localStorage.getItem("appName") !== null && localStorage.getItem("date") !== null){
                        sto.filter('app',localStorage.getItem("appName"));
                        sto.filter('date',localStorage.getItem("date"));
                    } else if (localStorage.getItem("app") !== null){
                        sto.filter('app',localStorage.getItem("appName"));
                    }
                }

                if (newValue === 'high') {
                    sto.filter('level', 'High');
                    localStorage.setItem("lvl", 'High');
                    if (localStorage.getItem("appName") !== 'null' && localStorage.getItem("appName") !== null && localStorage.getItem("date") !== null){
                        sto.filter('app',localStorage.getItem("appName"));
                        sto.filter('date',localStorage.getItem("date"));
                    }else if (localStorage.getItem("app") !== null){
                        sto.filter('app',localStorage.getItem("appName"));
                    }
                }

                if (newValue === 'medium') {
                    sto.filter('level', 'Medium');
                    localStorage.setItem("lvl", 'Medium');
                    if (localStorage.getItem("appName") !== 'null' && localStorage.getItem("appName") !== null && localStorage.getItem("date") !== null){
                    sto.filter('app',localStorage.getItem("appName"));
                        sto.filter('date',localStorage.getItem("date"));
                    } else if (localStorage.getItem("app") !== null){
                        sto.filter('app',localStorage.getItem("appName"));
                    }
                }

                if (newValue === 'low') {
                    sto.filter('level', 'Low');
                    localStorage.setItem("lvl", 'Low');
                    if (localStorage.getItem("appName") !== 'null' && localStorage.getItem("appName") !== null && localStorage.getItem("date") !== null){
                    sto.filter('app',localStorage.getItem("appName"));
                        sto.filter('date',localStorage.getItem("date"));
                    } else if (localStorage.getItem("app") !== null){
                        sto.filter('app',localStorage.getItem("appName"));
                    }
                }

    },

    onDatepickerfieldChange: function(datepickerfield, newDate, oldDate, eOpts) {
        var sto = Ext.getStore('logsstore');

        sto.filter('date',newDate);
        localStorage.setItem("date", newDate);
    },

    onSearchfieldChange: function(textfield, newValue, oldValue, eOpts) {
        var sto = Ext.getStore('logsstore');
        if (newValue === ""){
            sto.clearFilter();
            if (localStorage.getItem("appName") !== 'null' && localStorage.getItem("appName") !== null){
                sto.filter('app',localStorage.getItem("appName"));
            }
            if (localStorage.getItem("lvl") !== 'null' && localStorage.getItem("lvl") !== null){
                sto.filter('level',localStorage.getItem("lvl"));
            }
            if (localStorage.getItem("date") !== null){
                sto.filter('date',localStorage.getItem("date"));
            }
        } else {
            sto.filter('message',newValue,true,false);
        }
    }

});