({
    handleClick: function(cmp, event, helper) {
        var payload = {
            recordId: "some string",
            recordData: {
                value: "Some Value from Publisher"
            }
        };
        cmp.find("sampleMessageChannel").publish(payload);
    }
})