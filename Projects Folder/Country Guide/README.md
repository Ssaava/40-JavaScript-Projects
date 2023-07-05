# Country Guide Website Documentation

# Table of Contents

[Introduction](#Introduction)

- [Description](#Brief description of the purpose and features of the website.)
- [Features](#Key Features)

[REST Countries API](#REST Countries API)

- [Overview](#Overview of the REST Countries API and its role in fetching country data for the website.)
- [Features](#Key Features and Functionality:)

[Getting Started](#Getting Started)

- [Work with the website](#To work with the Country Guide website, follow these steps:)
- [Functionality](Website Functionality)

[Conclusion](#Conclusion)

## Introduction

### Brief description of the purpose and features of the website.

The Country Guide website is a comprehensive platform designed to help individuals search for specific country information and retrieve essential details, including the country's general information and its flag. Users can easily search for their desired country using the search bar, and the website will display the relevant information on the page.

**Key Features:**

- Country Information: The website provides users with detailed information about a specific country, including its name, population, capital, languages spoken, currency, timezones, and regional blocs. Users can gain a comprehensive understanding of the country's attributes.

- Flag Display: Alongside the country information, the website prominently displays the flag of the searched country. This visual representation enhances the user experience and allows users to quickly identify and associate the flag with the corresponding country.

- User-Friendly Interface: The website is built using HTML, CSS, and JavaScript, with the integration of libraries like Bootstrap to create a visually appealing and responsive user interface. Users can easily navigate through the website, search for countries, and access the desired information effortlessly.

- Search Functionality: The search bar enables users to input the name or code of the country they are interested in. Upon submitting the search query, the website fetches the relevant country data from the countries API and displays it in an organized and user-friendly manner.

- Integration with Countries API: The website utilizes a countries API to retrieve the necessary data about countries. By leveraging the API's endpoints and query parameters, the website can fetch accurate and up-to-date information for display.

- Responsive Design: The website is designed to be responsive, ensuring a seamless experience across various devices and screen sizes. Users can access the country information and explore the website's features from their desktop computers, tablets, or mobile devices.

With the combined power of **HTML, CSS, JavaScript**, and libraries like **Bootstrap**, the Country Guide website provides users with an intuitive and interactive platform to search for and explore detailed information about countries worldwide.

# REST Countries API

### Overview of the REST Countries API and its role in fetching country data for the website.

The REST Countries API is a powerful resource that enables us to retrieve comprehensive information about countries worldwide. By utilizing this API, we can seamlessly fetch country data for our website.

API Documentation: [REST Countries API Documentation](https://restcountries.com/v3.1/all)

**Key Features and Functionality:**

- Country Information: The API provides extensive information about countries, including details such as country codes, names, capitals, currencies, languages spoken, timezones, regional blocs, and much more. This wealth of data allows us to present a holistic view of each country on our website.

- Search Capability: With the REST Countries API, we can search for countries based on various parameters, including country codes, names, and capitals. This search functionality enables users to find specific countries quickly and efficiently.

For our project, we will primarily utilize the country code and name to retrieve the desired country information. These parameters will serve as the main search criteria for fetching the relevant country data.

By leveraging the **REST Countries API**, we can access a vast repository of country data, enabling us to present accurate and up-to-date information to our website users. Please refer to the provided [API documentation](https://restcountries.com/v3.1/all) for more details on the available endpoints, query parameters, and response formats.

# Getting Started

## To work with the Country Guide website, follow these steps:

- Clone this repository by running the following command in your terminal:

  git clone https://github.com/Ssaava/40-JavaScript-Projects.git

Please ensure that you have Git installed on your local machine before executing this command.

- Make sure you have Node.js installed on your system, as it will be used for package management and running the necessary build processes.
- After cloning the repository, navigate to the project directory and open the index.html file in your preferred web browser.
- In the browser, click on the "Projects" section and select the "Country Guide Project" to launch it.

By following these steps, you will be able to access the Country Guide website and explore its features in your browser.

## Website Functionality

## Detail the features and functionality of the website:

- Home Page:
  Provide a search input where users can enter a country name or code.
  Display a list of countries matching the search query, along with basic information like flag, population, and capital.

- Country Details Section:
  Show comprehensive details about a specific country, including its name, flag, population, capital, languages spoken, currency, and more.
  Display additional information like area, timezones, calling code, and regional blocs.

Optionally, showcase additional data like borders, neighboring countries, and regional information.

# Conclusion

    Summarize the key points covered in the documentation.
    Encourage users to explore the REST Countries API documentation for additional information and advanced features.
