//
//  main.m
//  JXA MenuBar
//
//  Created by uchcode on 2016/10/12.
//  Copyright © 2016 uchcode. All rights reserved.
//

#import <Cocoa/Cocoa.h>

int runJavaScript(NSString *fileName) {
    NSString *resourcePath = [[NSBundle mainBundle] resourcePath];
    NSString *sourcePath = [NSString stringWithFormat:@"%@/%@", resourcePath, fileName];
    NSURL *url = [NSURL fileURLWithPath:sourcePath];
    NSDictionary *error1;
    NSAppleScript *script = [[NSAppleScript alloc] initWithContentsOfURL:url error:&error1];
    if (error1) {
        NSLog(@"%@", error1);
        return -1;
    }
    NSDictionary *error2;
    [script executeAndReturnError:&error2];
    if (error2) {
        NSLog(@"%@", error2);
        return -2;
    }
    return 0;
}

int main(int argc, const char * argv[]) {
    int ret = runJavaScript(@"main.js");
    if (ret != 0) return ret;
    return NSApplicationMain(argc, argv);
}
