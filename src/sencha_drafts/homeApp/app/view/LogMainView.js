Ext.define('mvc.view.LogMainView', {
    extend: 'Ext.Container',
    
    requires: [
        'Ext.field.Search'
    ],
    
    config: {   
        layout: 'vbox',
        items: 
        [        
        {    
            xtype: 'searchfield',
            //label: 'Search',
            value: 'Search',
            name: 'logSearch'
        },
        {
            xtype:'logFilter'
        },
        {
            xtype: 'logs',
            flex: 4
        },        
    ]
            
        
    }

});
