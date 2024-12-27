({
	doInit : function(cmp, event, helper) {
        var counter = 0;
        var intervalId = window.setInterval($A.getCallback(function() {
            counter++;
            if (counter < 2501) {
                console.log(counter);
                var action = cmp.get("c.getData");
                action.setParams({sleep : 5000});
                action.setCallback(this, function(response) {
                    if(response.getState() === 'SUCCESS') {
                        cmp.set("v.bool", true);
                        cmp.set("v.res", 'https://picsum.photos/200');
                    }
                })
                $A.enqueueAction(action);
            } else {
                window.clearInterval(intervalId);
                console.log('do nothing');
                return;
            }
        }), 0);
	},
    onClicking : function(cmp, event, helper) {
        var arr = [];
        for (var i = 1; i <= 5; i++) {
            arr.push({key : i, value : 'Test ' + i});
        }
        cmp.set('v.myMap', arr);
    }
})