//
//  ThaliCore.m
//  ThaliMobile
//
//  Created by Brian Lambert on 5/6/15.
//
//

#import "ThaliCore.h"
#import <Cordova/CDV.h>
#include "jx.h"

void thaliMethod1(JXResult * results, int argc)
{
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    NSLog(@"thaliMethod1 called. Arg count is %i", argc);
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
}

void thaliMethod2(JXResult * results, int argc)
{
    if (argc != 1)
    {
        NSLog(@"Error. Wrong number of arguments.");
        return;
    }
    if (!JX_IsString(results + 0))
    {
        NSLog(@"Error. Argument 1 is not a string.");
        return;
    }
    
    char * arg = JX_GetString(results + 0);
    
    NSString * argString = [NSString stringWithFormat:@"%s", arg];
    
    
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    NSLog(@"thaliMethod2 called. Arg is '%@'", argString);
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
}

// ThaliCore (Internal) interface.
@interface ThaliCore (Internal)
@end

// ThaliCore implementation.
@implementation ThaliCore
{
@private
}

- (void)defineExtensions
{
    [super defineExtensions];
    JX_DefineExtension("thaliMethod1", thaliMethod1);
    JX_DefineExtension("thaliMethod2", thaliMethod2);
}

@end

// ThaliCore (Internal) implementation.
@implementation ThaliCore (Internal)
@end
