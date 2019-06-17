function ReaderText() {
    $.ajax({
        method: "get",
        url: "ReaderText.php",
        data:"",
        success: function (data) {
            $('#textList').append(data);
        }, error: function (jqXhr, textStatus, errorThrown) {
            console.log(errorThrown);
        }

    });


}

function StopList() {
  document.getElementById("textList").innerText = "";
}