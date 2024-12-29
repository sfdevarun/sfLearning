({
    fireComponentEvent: function (component, event, helper) {
        const compEvent = component.getEvent("onComponentEvent");
        compEvent.setParams({ source: "Child2", message: "Hello from Child2!" });
        compEvent.fire();
    },

    fireApplicationEvent: function (component, event, helper) {
        const appEvent = $A.get("e.c:ApplicationEvent");
        appEvent.setParams({ message: "Hello from Child2!" });
        appEvent.fire();
    },

    childMethodHandler: function (component, event, helper) {
        const message = event.getParam("message");
        alert("Child 2 received: " + message);
    }
})