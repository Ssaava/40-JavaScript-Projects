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

const container = document.querySelector(".container-fluid");
const our_html =  "<div class='card'>
<img
  src='https://flagcdn.com/ax.svg'
  class='card-img-top'
  alt='...'
/>
<div class='card-body'>
  <h5 class='card-title fw-bold w-100'>Uganda</h5>
  <ul class='card-text fw-light'>
    <li>Population: <span>420000</span></li>
    <li>Region: <span>Uganda</span></li>
    <li>Capital: <span>Kampala</span></li>
  </ul>
</div>
</div>
"
