({
    handleChanged: function(cmp, message, helper) { 
    if (message != null && message.getParam("recordData") != null) {
        cmp.set("v.recordValue", message.getParam("recordData").value);
    }
  }
})