//
//  AppDelegate.js
//  Basic JXA Dialog WebView
//
//  Created by uchcode.
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
                App.quit()
            },
        },
        
        // Delegate methods
        
        'applicationWillFinishLaunching:': function(notification) {
            
            let address = 'http://book.mynavi.jp/wd/widget/300x250.html'
            
            let z = $.NSZeroRect
            let c = $.WKWebViewConfiguration.new
            let webView = $.WKWebView.alloc.initWithFrameConfiguration(z, c)
            
            let s = this.theWindow.contentView.frame.size
            let w = s.width
            let h = s.height
            webView.frame = $.NSMakeRect(0, 64, w, h - 64)
            
            let u = $.NSURL.alloc.initWithString(address)
            let r = $.NSURLRequest.alloc.initWithURL(u)
            webView.loadRequest(r)
            
            this.theWindow.contentView.addSubview(webView)
            
            this.theWindow.level = $.NSFloatingWindowLevel
            this.theWindow.center
            App.activate()
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
