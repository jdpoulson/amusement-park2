$(document).ready(function() {
  $("form#height").submit(function(event) {
    event.preventDefault();
    var height = parseInt($("#age").val());

    if (height > 35) {
    $('#rides').show();
    $('#no-rides').hide();
    $('#ferris-wheel').addClass('important');
    $('#zipper').addClass('unimportant');
    $('#topple-tower').addClass('unimportant');
    $('#carousel').addClass('important');
    $('#octopus').addClass('unimportant');
    $('#pirate-ship').addClass('important');
    $('#helter-skelter').addClass('important');
    } else if (height === 35) {
    alert("Now don't go crazy! just go on any rides marked in blue.");
    $('#rides').show();
    $('#no-rides').hide();
    $('#ferris-wheel').addClass('important');
    $('#zipper').addClass('unimportant');
    $('#topple-tower').addClass('unimportant');
    $('#carousel').addClass('important');
    $('#octopus').addClass('unimportant');
    $('#pirate-ship').addClass('important');
    $('#helter-skelter').addClass('important');
    } else if (height < 35) {
    $('#no-rides').show();
    $('#rides').hide();
    }
  });
});
