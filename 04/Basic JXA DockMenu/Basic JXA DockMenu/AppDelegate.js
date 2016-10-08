//
//  AppDelegate.js
//  Basic JXA DockMenu
//
//  Created by uchcodeDockMenu.
//  Copyright © 2016 uchcode. All rights reserved.
//

ObjC.import('Cocoa')
ObjC.import('WebKit')

ObjC.registerSubclass({
    
    name      : 'AppDelegate',
    superclass: 'NSObject',
    protocols : ['NSApplicationDelegate'],
    
    properties: {
        
        // IBOutlets
        
        'theWindow' : 'id',
        
    },
    
    methods: {
        
        // IBActions
        
        'ok:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                App.activate()
                App.displayAlert('OK')
            },
        },
        
        'cancel:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                App.activate()
                App.displayAlert('Cancel')
            },
        },
        
        // Delegate methods
        
        'applicationShouldHandleReopen:hasVisibleWindows:': function(sender, flag) {
            App.displayAlert('Reopen')
            return true
        },
        
        'applicationWillFinishLaunching:': function(notification) {
            this.theWindow.center
            this.theWindow.level = $.NSFloatingWindowLevel
            App.activate()
        },
        
        'applicationDidFinishLaunching:': function(notification) {
            // Insert code here to initialize your application
        },
        
        'applicationWillTerminate:': function(notification) {
            // Insert code here to tear down your application
        },
        
        'applicationShouldTerminate:': function(sender) {
            return $.NSTerminateNow
        },
        
    },
})
