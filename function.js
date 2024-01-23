  function changeCity() {
        let citytName = prompt("What city do you live in?");
        let temperature = prompt("What temperature is it?");
        if (temperature < 0) {
          let h1 = document.querySelector("h1");
          h1.innerHTML =
            "😔 <br/> Currently " + temperature + "°C in " + citytName;
        } else {
          let h1 = document.querySelector("h1");
          h1.innerHTML =
            "😀 <br/> Currently " + temperature + "°C in " + citytName;
        }
      }
      let contactButton = document.querySelector("button");
      contactButton.addEventListener("click", changeCity);
