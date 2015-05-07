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

JXValue * javaScriptFunction1;
JXValue * javaScriptFunction2;

void registerJavaScriptFunction1(JXValue *params, int argc)
{
    assert(JX_IsFunction(params));
    
    javaScriptFunction1 = params;
    JX_MakePersistent(javaScriptFunction1);
    
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    NSLog(@"registerJavaScriptFunction1 called.");
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
}

void registerJavaScriptFunction2(JXValue *params, int argc)
{
    assert(JX_IsFunction(params));
    
    javaScriptFunction2 = params;
    JX_MakePersistent(javaScriptFunction2);

    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    NSLog(@"registerJavaScriptFunction2 called.");
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
}

void nativeFunction1(JXResult * results, int argc)
{
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    NSLog(@"nativeFunction1 called. Arg count is %i", argc);
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    
    JXValue ret_val;
    JX_CallFunction(javaScriptFunction1, NULL, 0, &ret_val);
}

void nativeFunction2(JXResult * results, int argc)
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
    NSLog(@"NativeFunction2 called. Arg is '%@'", argString);
    NSLog(@"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
    
    JXValue params[1];
    JX_New(&params[0]);
    JX_SetString(&params[0], "Native calling", 15);
    
    JXValue ret_val;
    JX_CallFunction(javaScriptFunction2, params, 1, &ret_val);
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
    
    // Define native methods extensions.
    JX_DefineExtension("registerJavaScriptFunction1", registerJavaScriptFunction1);
    JX_DefineExtension("registerJavaScriptFunction2", registerJavaScriptFunction2);
    JX_DefineExtension("nativeFunction1", nativeFunction1);
    JX_DefineExtension("nativeFunction2", nativeFunction2);
}

@end

// ThaliCore (Internal) implementation.
@implementation ThaliCore (Internal)
@end
