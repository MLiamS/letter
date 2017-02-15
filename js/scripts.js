$(document).ready(function() {
  $("#formOne").submit(function(){
    var person1Input = $("input#person1").val();
    var letter = " you are a wonderful human being and we appreciate your effort to making our lives easier by commiting your daily hours to the homeless. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";
    $("h2.person1").text("Dear " + person1Input + ",");
    $("p.person1").text(letter + "Sincerely yours, " + person1Input);
    event.preventDefault();//So it prevents reloading when submit is clicked
  });
  $("#message").submit(function(){
    var message1Input = $("input#message1").val();
    var convertedMessage = message1Input.toUpperCase();
    $('p.person1').text(convertedMessage);
    event.preventDefault();//So it prevents reloading when submit is clicked

  })
});
