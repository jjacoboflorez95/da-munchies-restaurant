"use strict";

const emailRegEx = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
const phoneRegEx = /^\d{3}-\d{3}-\d{4}$/;
$(() => {
  $("#num-people").selectmenu();
  $("#datepicker").datepicker({
    minDate: new Date(),
  });
  $("input.timepicker").timepicker({});
  $("#res-form").submit(reserveTable);
});

const clearErrMsgs = () => {
  $("#name").next().text("");
  $("#email").next().text("");
  $("#phone").next().text("");
  $("#datepicker").next().text("");
  $("#time").next().text("");
};

const reserveTable = (evt) => {
  clearErrMsgs();
  let hasErrors = false;

  const name = $("#name").val().trim();
  $("#name").val(name);
  const nameError = $("#name").next();
  $("#name").next().val(nameError);

  const email = $("#email").val().trim();
  $("#email").val(email);
  const emailError = $("#email").next();
  $("#email").next().val(emailError);

  const phone = $("#phone").val().trim();
  $("#phone").val(phone);
  const phoneError = $("#phone").next();
  $("#phone").next().val(phoneError);

  let date = $("#datepicker").val();
  const dateError = $("#datepicker").next();
  $("#datepicker").next().val(dateError);

  const time = $("#time").val().trim();
  $("#time").val(time);
  const timeError = $("#time").next();
  $("#time").next().val(timeError);

  if (name == "") {
    nameError.text("name is required");
    hasErrors = true;
  }

  if (email == "") {
    emailError.text("email is required");
    hasErrors = true;
  } else if (!emailRegEx.test(email)) {
    emailError.text("is not valid format");
    hasErrors = true;
  }

  if (phone == "") {
    phoneError.text("phone is required");
    hasErrors = true;
  } else if (!phoneRegEx.test(phone)) {
    phoneError.text("invalid format");
    hasErrors = true;
  }
  if (date == "") {
    dateError.text("date is required");
    hasErrors = true;
  } else {
    date = $("#datepicker").datepicker("getDate");
    $("#datepicker").val(date.toString().substring(0, 15));
  }

  if (time == "") {
    timeError.text("time is required");
    hasErrors = true;
  }

  if (hasErrors) {
    evt.preventDefault();
  }
};
