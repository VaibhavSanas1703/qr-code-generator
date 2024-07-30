
let userInput = document.getElementById("userURL");
let generateBtn = document.getElementById("generate-btn");
let errorMsg = document.getElementById("error");
let qrShow = document.getElementById("qr");
let loader = document.getElementById("loader");

console.log(userInput.length);


let generateQR = (userURL) => {
   if(userURL == ''){
      errorMsg.innerHTML = 'Please Enter URL or Links'

      setTimeout(() => {
         errorMsg.innerHTML = ''
      },3000)
   }
   else{
      readyQRcode(userURL)
   }
}

let readyQRcode = (userQR) => {
   loader.classList.add('toggle-load')
      setTimeout(() => {
         loader.classList.remove('toggle-load')

         qrShow.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${userQR}`
         
      }, 5000);

      


      userInput.value = ''
}

generateBtn.addEventListener("click",() => {
   generateQR(userInput.value)
})
