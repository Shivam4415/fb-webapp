F.Page.Home = (function () {
  var Ed = {
    Addbtn: "#btnRegister",
    Registermodel: "#register_",
    btnAddU: "#btnAddUp",
    // list:"#SupplierList"
  };
  var init = function () {
    $(Ed.Addbtn).on("click", supplermodal);
  };
  var supplermodal = () => {
    UIkit.modal(Ed.Registermodel).show();
    $(Ed.btnAddU).on("click", registerMailer);
  };

  var registerMailer = function () {
    const data = {};
    data.name = $("#usupplier").val();
    data.email = $("#remail").val();
    data.phone = $("#rphone").val();
    _register(data);
  };

  var _showNotification = function (message) {
    UIkit.notification({
      message: message || "Try again later.",
      status: "success",
      timeout: "3000",
      pos: "top-center",
    });
  };

  var _register = function (data) {
    return $.ajax({
      url: F.apiUrls + "/registerMailer",
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      datatype: "json",
      success: function (data, textStatus, xhr) {
        _showNotification("You are registered successfully.");
      },
      failure: _showNotification,
    });
  };

  return {
    init: init,
  };
})();

window.onload = function () {
  F.Page.Home.init();
};
