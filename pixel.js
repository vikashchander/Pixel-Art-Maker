$(function () {
  let inHeight = $('form #inputHeight');
  let inWidth = $('form #inputWeight');
  let submitButton = $('#submit');
    
  let grid = $('#pixelCanvas tbody');

    submitButton.click(function() {
        event.preventDefault();
       
        
       grid = $('#pixelCanvas tbody');
       var height = inHeight.val();
       var weight = inWidth.val();
        $('p').html(height+','+weight);
       grid.empty();
       for (var i = 0; i < height; i++) {
           var tr = $('<tr>');
           for (var j = 0; j < weight; j++) {
               tr.append($('<td>'));
           }
           grid.append(tr);
        }
        $('td').css('background-color', '#7B68EE');

        $('td').click(function(){
          $(this).css('background-color', $('#colorPicker').val());
          var row = $(this).index();
            var col = $(this).closest('tr').index();
            $('p').html('Latest click on '+[col,row].join(','));
        });

        $('td').on('dblclick',function(){
          $(this).css('background-color', '#7B68EE');
          var row = $(this).index();
            var col = $(this).closest('tr').index();
            $('p').html('Latest  double click on '+[col,row].join(','));
        });         
    });

  var isDown = false;

  $(document).mousedown(function() {
    isDown = true;
  });

  $(document).mouseup(function() {
    isDown = false;
  });

    grid.on("mousedown mousemove", function(event) {
    if (event.target && event.target.nodeName == "TD") {
      if (isDown) {
        $(event.target).css('background-color', $('#colorPicker').val());
      }
    }
    
  });

});

