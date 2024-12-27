({
	handleClick : function(component, event, helper) {	
        component.set("v.Yoo", component.get("v.userInput"));
	},
    yourAction : function(component, event, helper) {
		console.log(event.getSource().get("v.value"));
	},
    loadValues : function(cmp, event, helper) {
		cmp.set("v.Yoo", 'Honey');
    }
})