var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
let iconfile;
var tempicon=document.querySelector("temp-icon");



button.addEventListener('click', function (name) {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=5da9bcfe8ba2f01bef85b47332483b4a')
    .then(response => response.json())
    .then(data => {
      
      var tempValue = data['main']['temp'];
      var nameValue = data['name'];
      var descValue = data['weather'][0]['description'];
      main.innerHTML = nameValue;
      desc.innerHTML = " " + descValue;
      temp.innerHTML = tempValue - 273.15 + 0+ "  &#8451";
      input.value = "";
 
 /*if (id<300 && id>200)
       {
          tempicon.src="./weather/OIP.jpg" 
      } 
      else {
        tempicon.src="D:\weather\OIP.jpg"  
    
      }*/
     console.log(data);


    })

    .catch(err => alert("Wrong city name!"));
})