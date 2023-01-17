var token ="fuUCJxNZjePDorh6_IFGlZD6tVqv94rW_35dU2SZGwr_Ydl7K5jzKzBZ9NbsgjwfqJ-JrmLWFa7F9MLIUzKe6UfKjaBTMQBAQIlfosDE1tIZKxYQ3K5Oa87sjH0m3W0czMoJPKyFDg5Q0-zSTy1xNJmx1hBqVEobyaZ_gAumw3W1ORIz24qp6vYPHYg9UdiHWIbqsweHXEjZ5eUR9qWPzBoXKr7Wii6MBFK0p9UeW_gNi1DfO4IToLu3-dZbucCkHIqtgquTOGKFuSQT9_BwSl4IgZ6GXFIiho3BWLloSi1Yzl8Tn0VR9imWhO0qfllsTAwGWw";

$(document).ready(function(){
    var id = GetURLParameter('id');
    var clientTransactionId = GetURLParameter('clientTransactionId');

    var parametros = {
        id: id,
        clientTxId: clientTransactionId
    }

    if(token){
        $.ajax({
            data: parametros,
            url: 'https://pay.payphonetodoesposible.com/api/button/V2/Confirm',
            type:'POST',
            beforeSend:function(xhr){
                xhr.setRequestHeader ('Authorization', "Bearer "+token)
                },
            success:function ConfirmarPago(respuesta){
                console.log(respuesta);
                alert(respuesta);
            },
            error: function(mensajeerror){
                alert ("Error en la llamada:" + mensajeerror.Message);
            }
        });
    }

});

function GetURLParameter(sParam)
{
    debugger;
   var sPageURL = window.location.search.substring(1).split('#')[0];
   var sURLVariables = sPageURL.split('&');
   for (var i = 0; i < sURLVariables.length; i++)
   {
     var sParameterName = sURLVariables[i].split('=');
     if (sParameterName[0] == sParam)
     {
        return sParameterName[1];
     }
   }
}