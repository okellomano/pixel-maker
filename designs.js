
//$(document).ready(function()
//{
    function makeGrid(event){
        let rows = $('#inputHeight').val();
        let columns = $('#inputWidth').val();
    
       for(var r = 1; r <= rows; r++){
           var tbl_row = "<tr>";
           for(var c = 1; c <= columns; c++){
               tbl_row += "<td class='table_cell'></td>";
            }
            tbl_row += "</tr>";
           $("#pixelCanvas").append(tbl_row);
       }
        
        event.preventDefault();
        return false;
    }


    $("#sizePicker input[type=submit]").click(makeGrid);
    
    $("body").delegate("[class~='table_cell']", 'click', colorTableCell);
    
    function colorTableCell(){
        var color = $("#colorPicker").val();
        $(this).css("background-color", color);
    }
    
//});


$('#sizePicker').submit(function makeGrid(event){
    let rows = $('#inputHeight').val();
    let columns = $('#inputWidth').val();
    for(var r = 1; r <= rows; r++){
        var tbl_row = "<tr>";
        for(var c = 1; c <= columns; c++){
              tbl_row += "<td></td>";  
        }
        tbl_row += "</tr>";
        $("#pixelCanvas").append(tbl_row);
    }

    event.preventDefault();
});

