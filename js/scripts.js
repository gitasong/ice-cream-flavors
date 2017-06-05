$(document).ready(function() {
  var flavors = ["vanilla", "coffee", "butter pecan"];

  flavors.forEach(function(flavor) {
    $("#" + flavors.indexOf(flavor)).text(flavor);
  });
});
