const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const yuan = document.querySelector("#yuan");
const ruble = document.querySelector("#ruble");
const euro = document.querySelector("#euro");


const convert = (elem, target, target2,target3,target4) => { 
  elem.addEventListener("input", () => { 
    const reqest = new XMLHttpRequest(); 
    reqest.open("GET", "data.json"); 
    reqest.setRequestHeader("Content-type", "application/json"); 
    reqest.send(); 
    reqest.addEventListener("load", () => { 
      const response = JSON.parse(reqest.response); 
      if (elem === som) { 
        target.value = (elem.value / response.usd).toFixed(2); 
      target2.value = (elem.value / response.euro).toFixed(2);
      target3.value = (elem.value / response.ruble).toFixed(2);
      target4.value = (elem.value / response.yuan).toFixed(2);
      } else if (elem === usd) { 
        target.value = (elem.value * response.usd).toFixed(2);
      target2.value = (elem.value * response.usd / response.euro).toFixed(2);
      target3.value = (elem.value * response.usd / response.ruble).toFixed(2);
      target4.value = (elem.value * response.usd / response.yuan).toFixed(2);
       
      } else if (elem === euro) { 
        target.value = (elem.value * response.euro).toFixed(2); 
        target2.value = (elem.value * response.euro / response.usd ).toFixed(2); 
        target3.value = (elem.value * response.euro / response.ruble ).toFixed(2); 
        target4.value = (elem.value * response.euro / response.yuan).toFixed(2); 
      }  else if (elem === ruble) { 
        target.value = (elem.value * response.ruble).toFixed(2); 
        target2.value = (elem.value * response.ruble / response.usd ).toFixed(2); 
        target3.value = (elem.value * response.ruble / response.euro ).toFixed(2); 
        target4.value = (elem.value * response.ruble / response.yuan ).toFixed(2); 

      } else if (elem === yuan) { 
        target.value = (elem.value * response.yuan).toFixed(2); 
        target2.value = (elem.value * response.yuan / response.usd ).toFixed(2); 
        target3.value = (elem.value * response.yuan / response.euro ).toFixed(2); 
        target4.value = (elem.value * response.yuan / response.ruble ).toFixed(2); 

      } 
      elem.value === "" ? (target.value = "") : null, 
      elem.value === "" ? (target2.value = "") : null, 
      elem.value === "" ? (target3.value = "") : null,
      elem.value === "" ? (target4.value = "") : null; 
    }); 
  }); 
};

convert(som, usd, euro, ruble, yuan, true);
convert(euro, som, usd, ruble, yuan);
convert(usd, som, euro, ruble, yuan);
convert(ruble, som, usd, euro, yuan);
convert(yuan, som, usd, euro, ruble);