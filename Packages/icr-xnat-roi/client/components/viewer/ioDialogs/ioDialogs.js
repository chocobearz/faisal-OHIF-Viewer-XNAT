import "./ioDialogs.html";
import MessageDialog from "./ReactComponents/MessageDialog.js";

Template.ioDialogs.onCreated(() => {
  const instance = Template.instance();

  // Emulate props for now.
  instance.data.messageDialogTitle = new ReactiveVar("Title");
  instance.data.messageDialogBody = new ReactiveVar("Body");
});

Template.ioDialogs.onRendered(() => {
  const instance = Template.instance();
  const dialogIds = [
    "ioProgress",
    "ioMessage",
    "ioConfirmationDialog",
    "ioOverwriteConfirmationDialog"
  ];

  dialogIds.forEach(id => {
    const dialog = instance.$("#" + id);
    dialogPolyfill.registerDialog(dialog.get(0));
  });
});

Template.ioDialogs.helpers({
  MessageDialog() {
    return MessageDialog;
  },
  messageDialogTitle() {
    const instance = Template.instance();

    console.log(instance.data.messageDialogTitle.get());

    return instance.data.messageDialogTitle.get();
  },
  messageDialogBody() {
    const instance = Template.instance();

    console.log(instance.data.messageDialogBody.get());

    return instance.data.messageDialogBody.get();
  }
});
