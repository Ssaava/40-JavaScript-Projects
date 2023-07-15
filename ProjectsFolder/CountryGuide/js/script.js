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

  // function to reuse the dark mode and light mode themes
  const darkMode = () => {
    textMode.textContent = "Light Mode";
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  };
  const lightMode = () => {
    textMode.innerText = "Dark Mode";
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  };
  // toggle dark mode on dom content loaded
  if (changeTheme.matches) {
    darkMode();
  } else {
    lightMode();
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
  });
  // end of the switch functionality
});
