F.Control.Editor = new (function () {
  const editorContainer = "#editorContainer",
    sendToValue = "#sendTo",
    subjectValue = "#subject",
    sendMailTo = "#sendMail";

  var _change, _quill;

  var start = function () {
    _initEditor();
    _initControls();
  };

  var _initEditor = function () {
    Delta = Quill.import("delta");

    _quill = new Quill(editorContainer, {
      theme: "snow",
    });
  };

  var _initControls = function () {
    $(sendMailTo).on("click", validateMailAndSend);
    
  };

  function validateMailAndSend() {
    const data = {
      sentTo: $(sendToValue).val().trim(),
      subject: $(subjectValue).val().trim(),
      htmlTemplate: $("#editorContainer").html(),
    };
    _sendMail(data);
  }

  var _showNotification = function (message) {
    UIkit.notification({
      message: message || "Try again later.",
      status: "success",
      timeout: "3000",
      pos: "top-center",
    });
  };

  var _sendMail = function (data) {
    return $.ajax({
      url: F.apiUrls + "/sendToMailer",
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      datatype: "json",
      success: function (data, textStatus, xhr) {
        _showNotification("Mail Sent Successfully.");
      },
      failure: _showNotification,
    });
  };

  return {
    Start: start,
  };
})();

window.onload = function () {
  var url = window.location.toString();
  F.Control.Editor.Start();
};
