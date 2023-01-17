var parametros ={
    amount: "100",
    amountWithoutTax: "100",
    clientTransactionID: "IdentificadorUnico"+Math.random(),
    responseUrl: "https://brave-bay-0f13a1210.2.azurestaticapps.net/transaction-success.html",
    cancellationUrl: "https://brave-bay-0f13a1210.2.azurestaticapps.net/transaction-error.html",
    documentId: "1721789913",
    email: "hector.andrade@bayteq.com",
    phoneNumber: "+593992486985",
    reference: "Pago de prueba"
};
var token ="kBzCOoR0FFQ4tIIcns8KIGRzTPHNGBWlfFwie6NL9PKpyFlOV1Ae-qNBPEtVzrmgYA3FvovFDVCEyL1FGBULDknZ8P4mkaa234c4RR0tgkf_xhwcuAKXCoUJnks9Vo0tex8SsZbxVMEkbBLqmj7FFkSAJDCBmeMfLoS2dBLW4T3kxn7-BcHqksQuWg8nz6-sub449EPvA0yh57jST2VXwAhUWqUPCVB8RSTcPJQsQZz3wXKJGX13qnqmToKywy4yz4z6o5TUgLl1on3QdWJuKAyD4l04BV3ytfaJuSSlpVwXXV2gUvSPubURkuGmJ5WgXjE7KA";

$(document).ready(function(){
    if(token){
        $.ajax({
            data: parametros,
            url: 'https://pay.payphonetodoesposible.com/api/button/Prepare',
            type:'POST',
            beforeSend:function(xhr){
                xhr.setRequestHeader ('Authorization', "Bearer "+token)
                },
            success:function SolicitarPago(respuesta){
                location.href = respuesta.payWithCard;
                },
            error: function(mensajeerror){
                alert ("Error en la llamada:" + mensajeerror.Message);
            }
        });
    }
});