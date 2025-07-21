const passwordBox = document.querySelector("#PassWord");
const len = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const symbols = "*&%$#@!";
const allChars = uppercase+ lowercase + nums + symbols;
const button = document.querySelector("button");
let resPass = "";




function generateRandPass(){
    let pass = "";
     pass+=uppercase[Math.floor(Math.random()*uppercase.length)];
     pass+=lowercase[Math.floor(Math.random()*lowercase.length)];
     pass+=nums[Math.floor(Math.random()*nums.length)];
     pass+=symbols[Math.floor(Math.random()*symbols.length)];

 
    while(pass.length<len){
       
        pass+=allChars[Math.floor(Math.random()*allChars.length)];
        
    }
       passwordBox.value = pass;
       resPass = pass;

}

button.addEventListener("click",generateRandPass);

const img = document.querySelector("#copy");


img.addEventListener("click",()=>{
     
    const cp = resPass;
     navigator.clipboard.writeText(cp)
     .then(()=>{
        console.log("Copied sucessfully");
     })
     .catch((err)=>{
        console.log("Unsuccessful");
     })
});



  
 
  