const inputEl = document.querySelector("#input");
const btnEl = document.querySelector("#btn");
const resultEl = document.querySelector("#result");


const date = new Date();
const nowYear = date.getFullYear();


btnEl.addEventListener("click",()=>{
    if(inputEl.value == ""){
        alert("Enter Your Birth Day!")
    }
    else{
     
     const brithday = new Date(inputEl.value);
  
     let year = nowYear - (brithday.getFullYear());
     

       if(year>0){
         resultEl.innerText = `Your age is ${year} ${(year>1 ? "Years" : "Year" )} `;
        }
        else{
            resultEl.innerText = `Your Input is Invalid`; 
        }
     
    }
    
})