function ReaderText() {
    $.ajax({
        method: "get",
        url: "ReaderText.php",
        data:"",
        success: function (data) {

            var list = data.split("||");
            $('#textList').append(list);
        }, error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }

    });


}

function StopList() {
  document.getElementById("textList").innerText = "";
}
