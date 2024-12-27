({
	handleClick : function(cmp, event, helper) {
        var comp = cmp.find('Button One');
        console.log(comp.get('v.label'));
		var clicked = event.getSource().getLocalId();
        var clickedNew = event.getSource().get('v.name');
        alert(JSON.stringify(clicked));
        alert(JSON.stringify(clickedNew));
	},
    doInit : function(cmp, event, helper) {
		var date = new Date();
        cmp.set('v.time', date.toLocaleTimeString());
	},
    onRerender : function(cmp, event, helper) {
		console.log('Hi');
        window.setTimeout(
            $A.getCallback(function() {
                var date = new Date();
                cmp.set('v.time', date.toLocaleTimeString());
            }), 1000
		);
	},
    updateColors : function(cmp, event, helper) {
        var action = cmp.get('c.getNewColors');
        action.setCallback(this, function(response) {
            if(response.getState() === 'SUCCESS') {
                cmp.set('v.colors', response.getReturnValue());
            }
        })
        $A.enqueueAction(action);
        var numbers = [];
        for(var i=0; i<20; i++) {
            numbers.push({myKey : i});
        }
        cmp.set('v.numbers', numbers);
        //cmp.set('v.dummy', JSON.stringify(cmp.get('v.meraMap')));
        var ref = cmp.get('v.meraMap');
        ref['b'] = 'two Value';
        //cmp.set('v.dummy', JSON.stringify(cmp.get('v.meraMap')['b']));
        var holder = [];
        for(var key in ref) {
            holder.push(ref[key]);
        }
        for(var value of holder) {
            console.log(value);
        }
    }
})