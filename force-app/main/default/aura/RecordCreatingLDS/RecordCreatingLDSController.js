({
    handleError : function(cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "title": "Something has gone wrong!",
            "message": event.getParams()['detail'],
            "variant": "error"
        });
    }
})