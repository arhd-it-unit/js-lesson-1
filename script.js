const countryTableBody = document.querySelector("#countryTable tbody");
console.log(countryTableBody);
fetch("https://restcountries.eu/rest/v2/all")
  .then(res => {
    return res.json();
  })
  .then(countries => {
    countries.forEach((country, index) => {
      const trTemplate = `
            <tr>
                <td>${country.name}</td>
                <td>${country.capital}</td>
                <td>${country.population}</td>
                <td>${country.region}</td>
            </tr>
         `;
      if (index === 0) {
        countryTableBody.innerHTML = trTemplate;
      }
      {
        countryTableBody.innerHTML += trTemplate;
      }
    });
  });

document.querySelector("#floatingAction").addEventListener("click", event => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
