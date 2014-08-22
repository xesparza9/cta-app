//Pull.js file
$.getJSON('http://data.cityofchicago.org/resource/8pix-ypme.json', function(lstops){
  $('#lstoplist').empty();

  $.each(lstops, function(i, lstop) {
    $('#lstoplist').append(generateLStopLink(lstop));
  });
    $('lstoplist').refresh();
} ) 


$.getJSON('http://data.cityofchicago.org/resource/mq3i-nnqe.json'), function(busstops){
  $('#busstoplist').empty();
  
  $.each(busstops, function(i, busstop){
    $('#busstoplist').append(generateBusStopLink(bustop));
   });
     $('busstoplist').refresh();
  
}





