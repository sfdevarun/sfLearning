({
    handleComponentEvent: function (component, event, helper) {
        const source = event.getParam("source");
        const message = event.getParam("message");

        if (source === "Child1") {
            component.set("v.child1Message", message);
        } else if (source === "Child2") {
            component.set("v.child2Message", message);
        }
    },

    handleApplicationEvent: function (component, event, helper) {
        const message = event.getParam("message");
        alert("Parent received application event: " + message);
        component.set("v.applicationEventMessage", message);
    },

    callChild1Method: function (component, event, helper) {
        const child1Cmp = component.find("child1Cmp");
        child1Cmp.childMethod("Called from Parent!");
    },

    callChild2Method: function (component, event, helper) {
        const child2Cmp = component.find("child2Cmp");
        child2Cmp.childMethod("Called from Parent!");
    }
})