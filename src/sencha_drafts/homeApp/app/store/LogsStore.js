Ext.define('mvc.store.LogsStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.Field'//,
        //'Ext.util.Grouper'
    ],

    config: {
        autoLoad: true,
        storeId: 'logsStore',
        proxy: {
            type: 'ajax',
            url: 'logs.json',
            reader: {
                type: 'json'
            }
        },
        fields: ['app', 'id', 'message', 'level', 'date']        
    }
});
