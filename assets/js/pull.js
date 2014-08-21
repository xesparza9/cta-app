//Pull.js file
$.getJSON('http://data.cityofchicago.org/resource/8pix-ypme.json', function(lstops){
  $('lstoplist').each();

  $.each(lstops, function(i, lstop) {
    $('#lstoplist').append(generateLStopLink(lstop));
  });
    $('lstoplist').refresh();
} )