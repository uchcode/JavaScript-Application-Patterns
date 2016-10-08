//
//  AppDelegate.js
//  Basic JXA MenuBar Menu
//
//  Created by uchcode.
//  Copyright © 2016 uchcode. All rights reserved.
//

ObjC.import('Cocoa')

ObjC.registerSubclass({
    
    name      : 'AppDelegate',
    superclass: 'NSObject',
    protocols : ['NSApplicationDelegate'],
    
    properties: {
        
        // IBOutlets
        
        'theWindow' : 'id',
        'statusMenu': 'id',
        
        // properties of this
        
        'statusItem': 'NSStatusItem',
    },
    
    methods: {
        
        // IBActions
        
        'clickMe:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                App.activate()
                App.displayAlert('Hello (again)')
            },
        },
        
        'greet:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                App.activate()
                App.displayAlert('Hola!')
            },
        },
        
        'preferences:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                App.activate()
                this.theWindow.makeKeyAndOrderFront(sender)
            },
        },
        
        // Delegate methods
        
        'applicationWillFinishLaunching:': function(notification) {
            this.theWindow.center
            this.statusItem = $.NSStatusBar.systemStatusBar.statusItemWithLength($.NSVariableStatusItemLength)
            this.statusItem.menu = this.statusMenu
            this.statusItem.title = '🐱'
        },
        
        'applicationDidFinishLaunching:': function(notification) {
            // Insert code here to initialize your application
        },
        
        'applicationWillTerminate:': function(sender) {
            // Insert code here to tear down your application
        },
        
        'applicationShouldTerminate:': function(sender) {
            // Insert code here to do any housekeeping before your application quits
            return $.NSTerminateNow
        },
        
    },
})
