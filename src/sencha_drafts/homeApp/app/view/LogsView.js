Ext.define('mvc.view.LogsView', {
    extend: 'Ext.grid.Grid', 
    alias: 'widget.logs',
    
    //TODO : use a model instead of just a store
    
    // Note : the navigation bar *should* disappear if this view is included
    // in the default Container/Viewport
    config: {           
        navigationBar: false,
        store: 'logsStore',
        columns: [
            { text: 'App',  dataIndex: 'app', width: 120},            
            { text: 'ID', dataIndex: 'id', width: 120},
            { text: 'Message', dataIndex: 'message', width: 200},
            { text: 'Level', dataIndex: 'level', width: 120},
            { text: 'Date', dataIndex: 'date', width: 200}
        ]
    }

});


