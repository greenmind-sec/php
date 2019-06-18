function ReaderText() {
    $.ajax({
        method: "get",
        url: "ReaderText.php",
        data:"",
        success: function (data) {

            var list = data.split(" ");
            var ordernada = OrdenarLista(list);
            $('#textList').append(ordernada);
        }, error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }

    });


}

function StopList() {
  document.getElementById("textList").innerText = "";
}

function OrdenarLista(list) {

    var listaOrdenada = [];
    var index = 0;
    let text = '';
    let count = 0;
    for (var x = 0; x <=list.length; x++) {
        text += ' ' + list[x];
        index ++;
        
        if(index == 7)
        {
            count++;
            listaOrdenada.push(count+ '- ' + text + '</br>');
            index = 0;
        }
    }
    return listaOrdenada;
    
}