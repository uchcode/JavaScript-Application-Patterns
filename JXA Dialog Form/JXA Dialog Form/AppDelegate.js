//
//  AppDelegate.js
//  JXA Dialog Form
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
        
        'window' : 'NSWindow',
        
    },
    
    methods: {
        
        // IBActions
        
        'ok:': {
            types: ['void', ['id']],
            
            implementation: function(sender) {
                $.NSApp.terminate(this)
            },
        },
        
        // Delegate methods
        
        'applicationWillFinishLaunching:': function(notification) {
            // Insert code here to initialize your application before any files are opened
        },
        
        'applicationDidFinishLaunching:': function(notification) {
            // Insert code here to initialize your application
            $.NSApp.activateIgnoringOtherApps(true)
            $.NSApp.runModalForWindow(this.window)
        },
        
        'applicationWillTerminate:': function(notification) {
            // Insert code here to tear down your application
        },
        
        'applicationShouldTerminate:': function(sender) {
            // Insert code here to do any housekeeping before your application quits
            return $.NSTerminateNow
        },
        
        'applicationShouldTerminateAfterLastWindowClosed:': function(sender) {
            // If the return value is true, the application is quit when user close the last window
            return false
        },
        
        'applicationShouldHandleReopen:hasVisibleWindows:': function(sender, flag) {
            // Insert code here to reopen your application
            if (flag) {
                return false
            }
            return true
        },
        
    },
})
