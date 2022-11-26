
//Hide addrrss street 2 if address street 1 is null
this.HideAddressStreet2 = function (executionContext) {
  var formContext = executionContext.getFormContext();
  if (formContext.getAttribute("address1_line1").getValue() == null) {
    formContext.getControl("address1_composite_compositionLinkControl_address1_line2").setVisible(false);
  } else {
    formContext.getControl("address1_composite_compositionLinkControl_address1_line2").setVisible(true);
  }
};

