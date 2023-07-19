/**
 * Key features of the Country Guide website
            * country name
            * population
            * capital
            * language spoken 
            *currency used
            * timezones
            * regional blocs
            * The flags of the country
            * 
* The search bar functionality
*    users shall be inposition to search for country by country code or country name

*The link to the country API https://restcountries.com/v3.1/all


Your users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*
 */
window.addEventListener("DOMContentLoaded", () => {
  // the variables that we are gonna use in the app
  const body = document.body;
  const switchMode = document.querySelector(".toggle-mode");
  const changeTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const icon = document.querySelector(".fa-moon");
  const textMode = document.querySelector(".mode-text");
  const section = document.createElement("section");
  const form = document.createElement("form");
  const cardsContainer = document.createElement("div");
  const formContent = `
  <input
            type="search"
            name="search"
            id="search"
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
  // selecting the stored theme from the local storage
  let theme = localStorage.getItem("theme");

  // the url to the API
  const url = "https://restcountries.com/v3.1/all";

  // function to reuse the dark mode and light mode themes
  const darkMode = () => {
    textMode.textContent = "Light Mode";
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
    theme = "dark";
  };
  const lightMode = () => {
    textMode.innerText = "Dark Mode";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    theme = "light";
  };
  // toggle dark mode on dom content loaded
  if (changeTheme.matches) {
    if (theme == "dark") {
      body.classList.toggle("dark-mode");
      darkMode();
    } else {
      lightMode();
      body.classList.toggle("light-mode");
    }
  } else {
    if (theme == "light") {
      lightMode();
      body.classList.toggle("light-mode");
    } else {
      darkMode();
      body.classList.toggle("dark-mode");
    }
  }

  // toggling between dark and light mode if button is clicked
  switchMode.addEventListener("click", () => {
    // logic for the dark mode
    if (changeTheme.matches) {
      if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        darkMode();
      } else {
        body.classList.toggle("light-mode");
        lightMode();
      }

      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
      }
    }

    // logic for the light theme
    else {
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        lightMode();
      } else {
        body.classList.toggle("dark-mode");
        darkMode();
      }

      if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
      }
    }
    // store theme after user clicks
    theme = localStorage.setItem("theme", theme);
  });
  // end of the switch functionality

  // working on fetching data from the API to the html
  async function getCountries() {
    try {
      const response = await fetch(url);
      const countries = await response.json();
      // create the section to show countries

      section.classList.add("cards");
      body.appendChild(section);
      form.classList.add("navbar", "justify-content-between", "px-5", "my-5");
      section.appendChild(form);
      form.innerHTML = formContent;
      cardsContainer.classList.add(
        "container-fluid",
        "row",
        "justify-content-center",
        "countries-container"
      );
      section.appendChild(cardsContainer);

      // put coutnries in html
      countries.forEach((element) => {
        console.log(element);
        showCountries(element);
      });
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
});
