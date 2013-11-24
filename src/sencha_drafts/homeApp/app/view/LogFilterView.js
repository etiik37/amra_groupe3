Ext.define('mvc.view.LogFilterView', {
    extend: 'Ext.Container',
    alias: 'widget.logFilter',
    
    requires: [
        'Ext.field.Select'
    ],
    
    config: {   
        layout: 'hbox',
        items: 
        [
        {   
            xtype: 'selectfield',           
            options: [
                {text: 'All apps',  value: 'all_apps'},
                {text: 'Go/No-Go', value: 'go_no_go'},
                {text: 'TM Viewer',  value: 'tm_viewer'}
            ]
        },
        {   
            xtype: 'selectfield',                       
            options: [
                {text: 'All levels',  value: 'all_levels'},
                {text: 'High', value: 'high'},
                {text: '(At least ?)Medium',  value: 'medium'},
                {text: '(At least ?)Low',  value: 'low'}
            ]
        },
        {
            xtype: 'datepickerfield',
            label: 'Between',
            name: 'start_date',
            value: new Date()
        },
        {
            xtype: 'datepickerfield',
            label: 'and',
            name: 'end_date',
            value: new Date()
        }         
    ]
            
        
    }

});
