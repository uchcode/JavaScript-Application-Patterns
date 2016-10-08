//
//  AppDelegate.js
//  __projectname___
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
            let str = 'http://book.mynavi.jp/wd/widget/300x250.html'
            let url = $.NSURL.alloc.initWithString(str)
            let req = $.NSURLRequest.alloc.initWithURL(url)
            let size = this.theWindow.contentView.frame.size
            let conf = $.WKWebViewConfiguration.new
            
            let webView = $.WKWebView.alloc.initWithFrameConfiguration($.NSZeroRect, conf)
            //webView.autoresizingMask = $.NSViewWidthSizable | $.NSViewHeightSizable
            webView.frame = $.NSMakeRect(0, 64, size.width, size.height - 64)
            webView.loadRequest(req)
            
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
            return $.NSTerminateNow
        },
        
    },
})
