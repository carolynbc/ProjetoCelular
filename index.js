document.addEventListener('deviceready', onDeviceReady, false);

console.log ("Teste para ver console.log no celular");//aqui eu só coloco para ver se aparece

function onDeviceReady() {
   //sempre deletar tudo o que vem aqui dentro para começar do início
    
    var btnTirarFoto = document.getElementById("btnTirarFoto"); //aqui estou pegando o botão para usar
    btnTirarFoto.addEventListener('click', tirarFoto); //adicionei um evento, uma função 

}

function tirarFoto(){

    if(!navigator.camera){
        alert ("Erro, o plugin do cordova não foi instalado!");
    }

    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        saveToPhotoAlbum: true,
        sourceType: 1, // 0:Photo Library, 1=Camera, 2=Saved Album (opções de escolha)
        encodingType: 0 // 0=JPG 1=PNG (opções de escolha)
    };

    let options2 = {
        qualidade: 50 ,
        destinationType: Camera.DestinationType.DATA_URL,
        allowEdit: true,
        saveToPhotoAlbum: false,
        cameraDirection: 1,
        sourceType: Camera.PictureSourceType.CÂMERA //é a mesma coisa que o numero 1 no options
    } ;
    
    navigator.camera.getPicture(
        function(imgData){//isso daqui fará efeito la na imagem que aparecerá no html para nós
            let imgHtmlTag = document.getElementById("imgHtmlTag");
            imgHtmlTag.src = "data:image/jpeg;base64,"+imgData; //aqui será a imagem que eu irei receber, aqui a imagem aparecerá
        },
        function(err){
            alert(err);
        },
        options
    );
}