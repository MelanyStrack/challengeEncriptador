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

const encrypt = (message) => {
    const stringValues = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
]
    
    for (let i = 0; i < stringValues.length; i++) {
        if(message.includes(stringValues[i][0])){
            message = message.replaceAll(stringValues[i][0], stringValues[i][1])
        }
        
    }
    return message;
}

const messageValidation = (message)=>{
    const regex = /^[a-z0-9\s]+$/;
     if(!regex.test(message)){
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Sólo se permiten letras minúsculas, sin tildes ni caracteres especiales",
            confirmButtonColor:"#052051",
          });
          return false
     }else{
        return true
     }
}

const showErrorEmptyMessage = ()=>{
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe ingresar un texto válido",
        confirmButtonColor:"#052051",
      });
}


function buttonEncrypt(){
    if (inputEncrypt.value == "") {
        showErrorEmptyMessage();
    }else{
        if(!messageValidation(inputEncrypt.value)) return;
        const encryptedMessage = encrypt(inputEncrypt.value);
        showEncryptedMessage.innerText = encryptedMessage
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

const decrypt = (message) => {
    const stringValues = [
        ["e", "enter"], 
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
]
 
    for (let i = 0; i < stringValues.length; i++) {
        if(message.includes(stringValues[i][1])){
            message = message.replaceAll(stringValues[i][1], stringValues[i][0])
        }
        
    }
    return message;
}

function buttonDecrypt(){
    if (inputEncrypt.value == "") {
        showErrorEmptyMessage();
    }else{
        titleEncryptedSection.innerHTML= "Texto desencriptado  <i class='fa-regular fa-eye'></i>"
        
        const decryptedMessage = decrypt(inputEncrypt.value);
        console.log("desencriptado",decryptedMessage);
        
        showEncryptedMessage.innerText = decryptedMessage
        inputEncrypt.value =""
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