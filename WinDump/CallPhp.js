function ReaderText() {
    $.ajax({
        url: 'ReaderText.php',
        dataType: 'json',
        type: 'post',
        contentType: 'application/json',
        data:"",
        processData: false,
        success: function( data, textStatus, jQxhr ){
            $('#response pre').html( JSON.stringify( data ) );
        },
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });

}