function ClickButton(primaryControl)
{
var formContext = primaryControl;
Xrm.Navigation.openAlertDialog({
text: "CLick Here!",
confirmButtonLabel: "Confirm",
title: "Dialog box for ".concat(formContext.getAttribute("name").getValue())
}).then
(function (success)
{
Xrm.Navigation.openConfirmDialog({
text: "The Button CLick is successful."
})
}
);
formContext.getControl("name").setLabel("name");
}
