({
    fireComponentEvent: function (component, event, helper) {
        const compEvent = component.getEvent("onComponentEvent");
        compEvent.setParams({ source: "Child1", message: "Hello from Child1!" });
        compEvent.fire();
    },

    fireApplicationEvent: function (component, event, helper) {
        const appEvent = $A.get("e.c:ApplicationEvent");
        appEvent.setParams({ message: "Hello from Child1!" });
        appEvent.fire();
    },

    childMethodHandler: function (component, event, helper) {
        const message = event.getParam("message");
        alert("Child 1 received: " + message);
    }
})