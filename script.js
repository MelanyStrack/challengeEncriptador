const inputEncrypt = document.querySelector(".input__encrypt")
const showEncryptedMessage = document.querySelector(".encrypted__text")
const titleEncryptedSection = document.querySelector(".section__encripted__title")
const dollImage = document.querySelector(".image__doll")
const h3 = document.querySelector(".section__encripted__empty__message")
const buttonCopy = document.querySelector(".button__copy")
const sectionMesssage = document.querySelector(".index__main__section__show__test")

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const encrypt = (messageToEncrypt) => {
    const stringValues = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
]
    let message = messageToEncrypt.toLowerCase()
    for (let i = 0; i < stringValues.length; i++) {
        if(message.includes(stringValues[i][0])){
            message = message.replaceAll(stringValues[i][0], stringValues[i][1])
        }
        
    }
    return message;
}

const showErrorEmptyMessage = ()=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe ingresar un texto",
        confirmButtonColor:"#052051",
      });
}

let containsMessage = "";

function buttonEncrypt(){
    if (inputEncrypt.value == "") {
        showErrorEmptyMessage();
        containsMessage = "";
    }else{

        const encryptedMessage = encrypt(inputEncrypt.value);
        showEncryptedMessage.innerText = encryptedMessage
        console.log("NEW VALUE",showEncryptedMessage.value);
        
        showEncryptedMessage.style.fontSize="1.5rem";
        showEncryptedMessage.style.color="white";
        titleEncryptedSection.style.display= "block";
        titleEncryptedSection.innerHTML= "Texto encriptado  <i class='fa-regular fa-eye-slash'></i>"
        dollImage.style.display ="none";
        h3.style.display="none";
        buttonCopy.style.display="block";
        sectionMesssage.style.justifyContent="flex-start"
        inputEncrypt.value =""
        containsMessage = encryptedMessage
        return encryptedMessage
    }
    
}

const decrypt = (messageToDecrypt) => {
    const stringValues = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
]
    let message = messageToDecrypt.toLowerCase()
    for (let i = 0; i < stringValues.length; i++) {
        if(message.includes(stringValues[i][1])){
            message = message.replaceAll(stringValues[i][1], stringValues[i][0])
        }
        
    }
    return message;
}

function buttonDecrypt(){
    if (containsMessage == "") {
        showErrorEmptyMessage();
    }else{
        titleEncryptedSection.innerHTML= "Texto desencriptado  <i class='fa-regular fa-eye'></i>"
        
        const decryptedMessage = decrypt(showEncryptedMessage.innerText);
        showEncryptedMessage.innerText = decryptedMessage
        console.log("NEW VALUE",showEncryptedMessage.value);
        return decryptedMessage
    }
    
}


 /* Función que permite copiar el texto encriptado/desencriptado al portapapeles */
const copyText = ()=> {
      navigator.clipboard.writeText(showEncryptedMessage.innerText);
       /* Mensaje de éxito */
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Texto copiado al portapapeles",
        showConfirmButton: false,
        timer: 1500
      });
     

  }