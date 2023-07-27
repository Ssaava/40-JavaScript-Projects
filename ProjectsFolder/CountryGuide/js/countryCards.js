window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  // the variables that we are gonna use in the app
  const body = document.body;
  const section = document.createElement("section");
  const form = document.createElement("form");
  const cardsContainer = document.createElement("div");
  const formContent = `
        <input
          type="search"
          name="search"
          id="search"
          value = ""
          class="border-0 ps-3"
          placeholder="Search for a country..."
        />
        <select
          name="country"
          id="continent"
          class="px-2"
          placeholder="Filter by Region"
        >
          <option value="placeholder" disabled="" selected="">
            Filter by Region
          </option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
          
        </select>
`;

  // the url to the API
  const url = "https://restcountries.com/v3.1/all";

  // working on fetching data from the API to the html

  // create the section to show countries

  section.classList.add("cards");
  body.appendChild(section);
  form.classList.add(
    "navbar",
    "justify-content-between",
    "gap-3",
    "px-5",
    "my-5"
  );
  section.appendChild(form);
  form.innerHTML = formContent;
  cardsContainer.classList.add(
    "container-fluid",
    "row",
    "justify-content-center",
    "cards-container"
  );
  section.appendChild(cardsContainer);
  // getting the stored input on the localStorage after loading the it in the DOM
  const searchInput = document.querySelector("#search");
  const filteredList = document.querySelector("#continent");
  let searchInputValue = localStorage.getItem("searchInput") || "";
  let filterInputValue = localStorage.getItem("filterInput") || "";
  // async function to get the
  async function getCountries() {
    try {
      const response = await fetch(url);
      const countries = await response.json();

      // sorting the countries using a function
      const sortedCountries = countries.sort((a, b) => {
        const countryA = a.name.common.toLowerCase();
        const countryB = b.name.common.toLowerCase();
        if (countryA < countryB) return -1;
        if (countryA > countryB) return 1;
        return 0;
      });

      // put coutnries in html at loading of the page
      if (
        searchInput.value.length <= 0 &&
        filteredList.value === "placeholder"
      ) {
        arrayOperations(sortedCountries);
      }

      //   searching for a scpecific country in the countries api array
      const searchedCountry = (arr, query) => {
        return arr.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        );
      };
      // display the countries basing on the stored value of the search input
      if (searchInputValue.length > 0 && filteredList.value === "placeholder") {
        filteredList.value = "placeholder";
        searchInput.value = searchInputValue;
        newArray = searchedCountry(sortedCountries, searchInputValue);
        verifySearchedCountry();
      }

      searchInput.addEventListener("input", (e) => {
        e.preventDefault();

        filterInputValue = localStorage.setItem("filterInput", "");
        searchInputValue = localStorage.setItem(
          "searchInput",
          searchInput.value
        );
        newArray = searchedCountry(sortedCountries, searchInput.value);
        verifySearchedCountry();
      });
      // end of search

      // filtering the countries by region
      const filteredCountry = (arr, query) => {
        return arr.filter((country) =>
          country.continents[0].toLowerCase().includes(query.toLowerCase())
        );
      };
      //  display filtered results on loading of the page
      if (filterInputValue.length > 0 && searchInputValue.length <= 0) {
        searchInput.value = "";
        filteredList.value = filterInputValue;
        newArray = filteredCountry(sortedCountries, filterInputValue);
        cardsContainer.innerHTML = "";
        arrayOperations(newArray);
      }
      filteredList.addEventListener("change", (e) => {
        e.preventDefault();
        newArray = filteredCountry(sortedCountries, filteredList.value);
        cardsContainer.innerHTML = "";
        arrayOperations(newArray);
        filterInputValue = localStorage.setItem(
          "filterInput",
          filteredList.value
        );
      });
      console.log(sortedCountries);
    } catch (err) {
      document.write(err);
    }
  }

  // important functions
  const arrayOperations = (value) => {
    value.forEach((element) => {
      showCountries(element);
    });
  };
  const showCountries = (data) => {
    // we shall need to create a new div element every after each iteration
    const card = document.createElement("div");
    card.classList.add("card", "countryCard");
    card.innerHTML = `      
  
          
            <img
              src=${data.flags.png}
              class="card-img-top"
              alt="${data.flags.alt}"
            />
            <div class="card-body">
              <h5 class="card-title fw-bold w-100">${data.name.common}</h5>
              <ul class="card-text fw-light">
                <li>Population: <span>${data.population}</span></li>
                <li>Region: <span>${data.region}</span></li>
                <li>Capital: <span>${verifyCapital(data)}</span></li>
              </ul>
            </div>
         
     
      `;

    cardsContainer.appendChild(card);

    // Adding an event listener to each card in the hmtl so as to load the country details
    card.addEventListener("click", (event) => {
      const countryName = card.childNodes[3].children[0].textContent;
      displayCOuntryDetails();
    });
  };

  const verifyCapital = (capital) => {
    if (capital.capital === undefined) {
      return "No capital";
    }

    return capital.capital[0];
  };
  const verifySearchedCountry = () => {
    if (newArray.length <= 0) {
      cardsContainer.innerHTML =
        "<h3 class='text-danger'>There is no such country<h3>";
    } else {
      cardsContainer.innerHTML = "";
      arrayOperations(newArray);
    }
  };
  getCountries();

  /**
   * ====================================================================================================
   * =====this is where we start with the next part of displaying some of the contents of each card=====
   * ====================================================================================================
   */
  const backButton = document.createElement("button");
  const countryDetails = document.createElement("div");

  const displayCOuntryDetails = (country) => {
    // adding the neccessary content to the page after loading it
    section.innerHTML = "";
    section.classList.remove("cards");
    section.classList.add("card-display", "container-fluid");
    countryDetails.classList.add("row");
    backButton.textContent = "Back";
    section.appendChild(backButton);
    section.appendChild(countryDetails);

    // loading the country details in the html

    countryDetails.innerHTML = `
    <div class="flag col-lg-6 text-center">
    <img
      src=${country.flags.png}
      class="card-img-top"
      alt=${country.flags.alt}
    />
  </div>
  <div class="content col-lg-6 col-md-12 text-start">
    <div class="row my-3">
      <div class="col-lg-12 fw-bold country-name">${country.name.common}</div>
    </div>
    <div class="row my-0">
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="my-2">
          <span class="fw-bold native-name">Native Name: </span>
          <span class="native">${
            // if (element.name.nativeName === undefined) {
            //   console.log("no name specified");
            // } else {
            //   console.log(Object.entries(element.name.nativeName)[0][1].common);
            // }
            country.name.nativeName === undefined
              ? "undefined"
              : Object.entries(country.name.nativeName)[0][1].common
          }</span>
        </div>
        <div class="my-2">
          <span class="fw-bold region-name">Region: </span>
          <span class="region">${country.region}</span>
        </div>
        <div class="my-2">
          <span class="fw-bold capital-name">Capital: </span>
          <span class="capital">${verifyCapital(country)}</span>
        </div>
        <div class="my-2">
          <span class="fw-bold currency-name">Currencies: </span>
          <span class="currency">${
            country.currencies === undefined
              ? "Undefined"
              : Object.entries(country.currencies)[0][1].name
          }</span>
        </div>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6">
        <div class="my-2">
          <span class="fw-bold population-size">Population: </span>
          <span class="population">${country.population}</span>
        </div>
        <div class="my-2">
          <span class="fw-bold sub-region-name">Sub Region: </span>
          <span class="sub-region">${country.subregion}</span>
        </div>
        <div class="my-2">
          <span class="fw-bold top-level-domain-name"
            >Top Level Domain:
          </span>
          <span class="top-level-domain">${country.tld[0]}</span>
        </div>
        <div class="my-2">
          <span class="fw-bold language-name">Languages: </span>
          <span class="Language">${
            element.languages === undefined
              ? "Undefined"
              : Object.values(element.languages)[0]
          }</span>
        </div>
      </div>
    </div>
    <div class="border-countries row my-3">
      <div class="col-lg-12 d-flex gap-3 flex-wrap align-items-center">
        <span class="fw-bold me-4 border-country-names"
          >Border Countries:
        </span>
        ${country.border}
        <span class="border border-countries">Tanzania Uganda</span>
        <span class="border border-countries"
          >Tanzania Republic Kenya</span
        >
        <span class="border border-countries">Tanzania</span>
        <span class="border border-countries">Tanzania</span>
        <span class="border border-countries">Tanzania</span>
        <span class="border border-countries">Tanzania</span>
        <span class="border border-countries">Tanzania</span>
        <span class="border border-countries">Tanzania</span>
        
      </div>
    </div>
  </div>
    `;
  };
  const borderCountries = (border) => {
    return `<span class="border border-countries">${border.border}</span>`;
  };
});
