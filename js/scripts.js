//
// var leapyear = function (something){
//   // if (something % 4 === 0){
//   //   alert ("this is a leap")
//   // } else {
//   // return false;
//   // }
// };

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var something = parseInt($("input#year").val());
      if (something % 4 === 0 && something % 100 != 0 || something % 400 === 0){
        alert ("this is a leap");
      } else {
        alert("this is false");
      }

    console.log(something);
  });
});
