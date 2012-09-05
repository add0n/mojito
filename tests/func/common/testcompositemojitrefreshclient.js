/*
 * This is a basic func test for a Common application.
 */
YUI({
    useConsoleOutput: true,
    useBrowserConsole: true,
    logInclude: { TestRunner: true }
}).use('node', 'node-event-simulate', 'test', 'console', function (Y) {
   
    var suite = new Y.Test.Suite("Common");

    suite.add(new Y.Test.Case({

	    "test compositemojitrefreshclient": function() {
            var that = this;
            Y.one('#composite_mojit_button').simulate('click');
            that.wait(function(){
	            Y.Assert.areEqual('Refresh this module', Y.one('#footertitle').get('innerHTML').match(/Refresh this module/gi));
	            Y.Assert.areEqual('This module has been refreshed ', Y.one('#footercomment').get('innerHTML').match(/This module has been refreshed /gi));
	            Y.Assert.areEqual('0', Y.one('#footercomment').get('innerHTML').match(/0/gi));
	            Y.Assert.areEqual('times', Y.one('#footercomment').get('innerHTML').match(/times/gi));
	            Y.one('#footerfresh').simulate('click');
	            that.wait(function(){
		            Y.Assert.areEqual('This module has been refreshed ', Y.one('#footercomment').get('innerHTML').match(/This module has been refreshed /gi));
		            Y.Assert.areEqual('1', Y.one('#footercomment').get('innerHTML').match(/1/gi));
		            Y.Assert.areEqual('times', Y.one('#footercomment').get('innerHTML').match(/times/gi));
	            }, 2000);
            }, 3000);
        }

   }));

   Y.Test.Runner.add(suite);

});