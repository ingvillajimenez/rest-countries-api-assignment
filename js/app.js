var request = superagent;
request
  .get('https://restcountries.eu/rest/v2/all')
  .then(function(res){
    addDOM(res.body);
  })
  .catch(function(err){
    err.message;
  });

  function addDOM(countriesList){
    countriesContainer = document.querySelector(".countries-container");
    var template="";
    countriesList.forEach(function(country){
      template += `<div class="country-card">
                    <img class="country-flag" src= ${country.flag} alt="flag">
                    <h4 class="country-name">  ${country.name} </h4>
                    <p class="country-capital"> ${country.capital} </p>
                  </div>`;
    });
    countriesContainer.innerHTML = template;
  }
