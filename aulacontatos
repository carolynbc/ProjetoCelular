let meuapp = {

    inicializar: function(){
        console.log("inicializar: function(){...");
        document.addEventListener('deviceready', meuapp.onMyDeviceReady, false);
        document.addEventListener('resume', meuapp.retornoAoPrimeiroPlano, false);
    },

     onMyDeviceReady: function() {
        console.log('#####=> Running cordova' + cordova.platformId + '@' + cordova.version);
        document.getElementById("btnSelecionaContato").addEventListener('click', meuapp.selecionarContato);
 },

 retornoAoPrimeiroPlano:function(){
    console.log("#### => retornoAoPrimeiroPlano:function(){...");
 },

selecionarContato : function(){
    console.log("selecionarContato : function(){...");
    navigator.contacts.pickContact(function(c){
        console.log("####=> Contato Selecionado");
        console.log(c);
    },function(err){
        console.log("####=> Contato não Selecionado");
        console.log(err);
    });
    
}

}

meuapp.inicializar();
