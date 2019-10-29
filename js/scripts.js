$(function() {
 var inputArray = [];

  $("#submitButton").click(function() {
    var userInput = $("input.form-control").val();
    inputArray.push(userInput.toUpperCase());


    var i;
    var html = "";
    for (i = 0; i < inputArray.length; i++) {
      html = html + "<li>" + inputArray[i] + "</li>";
      inputArray.sort();
    };

    // inputArray.sort();

    $("ul").html(html);

  });


});
