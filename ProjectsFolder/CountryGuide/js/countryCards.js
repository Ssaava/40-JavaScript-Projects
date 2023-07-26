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

      //   searching for a scpecific element in the array
      const searchedCountry = (arr, query) => {
        return arr.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        );
      };
      // display the countries basing on the stored value of the search input
      if (searchInputValue.length > 0 && filteredList.value === "placeholder") {
        searchInput.value = searchInputValue;
        newArray = searchedCountry(sortedCountries, searchInputValue);
        cardsContainer.innerHTML = "";
        arrayOperations(newArray);
      }
      searchInput.addEventListener("input", (e) => {
        e.preventDefault();
        filterInputValue = localStorage.setItem("filterInput", "");
        searchInputValue = localStorage.setItem(
          "searchInput",
          searchInput.value
        );
        newArray = searchedCountry(sortedCountries, searchInput.value);
        cardsContainer.innerHTML = "";
        arrayOperations(newArray);
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
    } catch (err) {
      document.write(err);
    }
  }
  const arrayOperations = (value) => {
    value.forEach((element) => {
      showCountries(element);
    });
  };
  const showCountries = (data) => {
    // we shall need to create a new div element every after each iteration
    const card = document.createElement("div");
    card.classList.add("card");
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
                <li>Capital: <span>${data.capital}</span></li>
              </ul>
            </div>
         
     
      `;

    cardsContainer.appendChild(card);
  };
  getCountries();
});
