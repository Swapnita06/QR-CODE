
    let imgbox=document.getElementById("imgbox");
let qrImage=document.getElementById("qrImage");
let qrText= document.getElementById("qrText");
function generateQr(){
if (qrText.value.length>0){
    qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"+qrText.value;
}};
