this.formOnLoad = function (executionContext) {
  var formContext = executionContext.getFormContext();
  formContext.ui.setFormNotification(
    "This is a Demo version 2 of FormContextDemo",
    "INFO",
    "UniqueID22112022"
  );
  if (formContext.getAttribute("fax").getValue() == null) {
    formContext.getAttribute("fax").setValue("22-21-202");
    formContext.getControl("fax").addNotification({
      messages: ["=Fax Value has been Set to Default."],
      notificationLevel: "RECOMMENDATION",
      uniqueID: "UniqueID22112022-1",
    });
    // formContext.getControl("fax").clearNotification("UniqueID22112022-1");
  }
};
