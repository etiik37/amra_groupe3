/*
 * File: app/view/WikiView.js
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

Ext.define('MyApp.view.WikiView', {
    extend: 'Ext.Panel',
    alias: 'widget.wikiview',

    config: {
        fullscreen: true,
        html: '<div style="-webkit-overflow-scrolling:touch; overflow:auto;width=100%;height=100%;position:fixed;top:0;left:0;float:left;"><iframe style="position:fixed;top:0;left:0;float:left;" width="100%" height="100%" src="http://37.59.48.149:12080/w/index.php/Main_Page"></iframe></div>',
        layout: {
            type: 'fit'
        },
        scrollable: true
    }

});