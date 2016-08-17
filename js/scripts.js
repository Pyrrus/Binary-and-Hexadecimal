$(document).ready(function() {
  $("button").click(function() {
    var num = parseInt($("#main").val());
    var b = num.toString(2);
    var d = num.toString(16);
    $("#binaryOutput").append("<br />" + b + "<br />");
    $("#hexOutput").append("<br />" + d + "<br />");
    $("#numberOutput").append("<br />" + num + "<br />")
  });
});
