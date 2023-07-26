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
  // getting the search input after loading the it in the DOM
  const searchInput = document.querySelector("#search");
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

      // put coutnries in html
      if (searchInput.value.length <= 0) {
        sortedCountries.forEach((element) => {
          showCountries(element);
        });
      }

      //   searching for a scpecific element in the array
      const searchedCountry = (arr, query) => {
        return arr.filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        );
      };

      searchInput.addEventListener("input", () => {
        newArray = searchedCountry(sortedCountries, searchInput.value);
        cardsContainer.innerHTML = "";
        newArray.forEach((element) => {
          showCountries(element);
        });
      });
      //   end of search
    } catch (err) {
      document.write(err);
    }
  }

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
  // essential code to be used when filtering the array
  //   searchInput.addEventListener("input", () => {
  //     console.log("Item Changed value", searchInput.value);
  //   });
});
