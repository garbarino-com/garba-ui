$( document ).ready(function() {
    var url = window.location.href;
    firstPurchase = url.search("subscripcion=primera-compra");
    if(firstPurchase>0){
        $('#myModal').modal('toggle');
    }
});

$("#Enviar").click(function () {

    if($("#email").val()!="" && $("#idValue").val()!="" && $("#gender").val()!=""){
    	
        $("#Enviar").html("<i class='icon-circle-notch animate-spin'></i> CARGANDO...");
        
        var url = "/services/addons/campaigns/first-purchases?source=POPUP";

        data = {
          'email': $("#email").val(),
          'idType' : 'DNI',
          'idValue' : $("#idValue").val(),
          'gender' : $("#gender").val(),
        };
        var myData = JSON.stringify(data);

        $.ajaxSetup({
            contentType: "application/json; charset=utf-8"
        });
        $.post(url, myData)
            .done(function(data){
                $("#content").hide();
                $("#div-error").hide();
                $("#div-ok").show();
                $("#Enviar").html("<a href='https://www.garbarino.com/primeras-compras#instructions'>CÓMO APLICAR MI CÓDIGO</a>");
            })
            .fail(function (jqXHR, textStatus){
            	$("#content").hide();
                $("#div-error").show();
                $("#div-ok").hide();
            },"json")
    }else{
        if($("#email").val()==""){
            $("#error").html("Debe completar su Email.");
            return false;
        }else if($("#idValue").val()==""){
            $("#error").html("Debe completar su DNI.");
            return false;
        }else if($("#gender").val()==""){
            $("#error").html("Debe seleccionar el Género.");
            return false;
        }
    }
});