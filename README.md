<!-------------------<img src="assets/images/AdobeStock_322612165.gif" style="margin: 0;">---->
<!------------<h2 align="center"><img src="assets/images/Title2.png" style="margin: 0;"></h2>--------->

![alt text](https://readri205.github.io/MS2_Project/assets/images/Title3.jpg "Africa Logo")

[View the live **EARTH AFRICA** :earth_africa: project here.](https://readri205.github.io/MS2_Project/)

# **EARTH AFRICA :earth_africa:**

## Contents

- [**EARTH AFRICA :earth_africa:**](#--earth-africa--earth-africa---)
  * [Contents](#contents)
  * [Site Goals](#site-goals)
  * [User Experience (UX)](#user-experience--ux-)
    + [User stories](#user-stories)
      - [First Time Visitor Goals](#first-time-visitor-goals)
      - [Returning Visitor Goals](#returning-visitor-goals)
      - [Frequent User Goals](#frequent-user-goals)
    + [Design](#design)
      - [Colour Scheme](#colour-scheme)
      - [Typography](#typography)
      - [Box Content Structure](#box-content-structure)
      - [Imagery](#imagery)
    + [Wireframes](#wireframes)
  * [Features](#features)
    + [Responsive on all device sizes](#responsive-on-all-device-sizes)
    + [Interactive elements](#interactive-elements)
    + [Future Features](#future-features)
  * [Technologies Used](#technologies-used)
    + [Languages Used](#languages-used)
    + [Frameworks, Libraries & Programs Used](#frameworks--libraries---programs-used)
    + [Application Programming Interfaces (API's) Used](#application-programming-interfaces--api-s--used)
  * [Site Construction](#site-construction)
    + [Consistent Page Components](#consistent-page-components)
    + [Home Page](#home-page)
    + [Country Details Page (Nigeria has been used by way of example)](#country-details-page--nigeria-has-been-used-by-way-of-example-)
    + [Contacts Page](#contacts-page)
  * [Testing](#testing)
    + [Known Bugs](#known-bugs)
  * [Deployment](#deployment)
    + [GitHub Pages](#github-pages)
    + [Forking the GitHub Repository](#forking-the-github-repository)
    + [Making a Local Clone](#making-a-local-clone)
  * [Credits](#credits)
    + [Code](#code)
    + [Content](#content)
    + [Media](#media)
    + [Acknowledgements](#acknowledgements)
  * [Version Control](#version-control)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>


## Site Goals

* This website provides an overview of the **Africa Continent** in terms of **Land Size, Population** and **Gross Domestic Product (GDP)**. These measures have been provided in a **World** context. The website provides an ability to view similar data for each country in Africa by using a search function. The search function is provided at the bottom of the **'Home'** page and also on the bottom of the **'Country Details'** page. The search function in both locations allows for a quick search for an African country from either page.

* The website is **'informative'**, allowing users to view information about **Africa** and to view information on specific countries. The site is designed to show **Africa** in a world context on the **'Home'** page and to show each country in an Africa context on the **'Country Details'** page.

* The website concept is to answer high level questions about the **African** Continent;
  * where is it?;
  * what are the countries in it?;
  * where are the countries on the Africa Continent?; and
  * what size are each of the countries in terms of Land Size, Population and Gross Domestic Product (GDP);
  * what is the name of the Capital City and where is it located?; and
  * what does the National Flag look like?


* The answers for **Africa as a whole** are provided through a number of different media outputs on the **'Home'** page;
  * **text summary** on Africa land size, population and GDP;
  * **a map** showing the Africa continent with many of the key countries shown;
  * **line graphs** for population and GDP growth from 1970 to 2019;
  * **pie charts** showing Land Size, Population and GDP for Africa relative to the Rest of the World.


* The answers for any **African Country** returned from a search query;
  * **text summary** on Country capital city, national flag, land size, population and GDP relative to the Rest of Africa;
  * **a map** centred on the capital city location and showing the country in context of the Africa Continent;
  * **line graphs** for population and GDP growth from 1970 to 2019;
  * **pie charts** showing Land size, Population and GDP relative to the Rest of Africa; and
  * **pie charts** showing top five countries by Land Size, Population Size (2019) and GDP Size (2019)


* The website sources data from the **[World Bank Database](https://databank.worldbank.org/home.aspx)**. The website primarily makes use of Application Programming Interfaces (API's) to construct the country data, however in certain instances CSV files are used to provide summary level information. The **[Referential](https://rapidapi.com/referential/api/referential)** API via **[RapidAPI](https://rapidapi.com/)** is used to source country codes to construct country information and **[COUNTRYFLAGS](https://www.countryflags.io/)** for country flag images. **[Leaflet](https://leafletjs.com/)** is used as a javascript library for **[Mapbox](https://www.mapbox.com/)** maps with **[OpenStreetMap](https://www.openstreetmap.org)** tile data. API and other data source details are provided in the 'xxx' section below.

* If the site is perceived as successful, it is anticipated that the site could be expanded to show;
  * similar information for the six remaining World Continents; and
  * each continent and its countries could be expanded with more details.


* The site is designed to be responsive and accessible on a range of devices, making it easy to navigate for interested users. The website was designed using **'Mobile First'** principles as the site must be perceived to be quick and easy to use and read as a reference site on a mobile device.

## User Experience (UX)

*   ### User stories

    *   #### First Time Visitor Goals
        * The first time visitor will want to;
          1. easily understand the main purpose of the site;
          1. be able to easily navigate throughout the site to find content;
          1. view the carousel images just beneath the header;
          1. scroll down through the information, read the content, view the map of Africa, then view the line graphs and the pie charts;
          1. search the details<sup id="a1">[1](#f1)</sup> for a specific country from the dropdown menu;
          1. read the information about that country, view the map, zoom in and out on that map, review the line graphs and review the pie charts;
          1. search for another country<sup id="a2">[2](#f1)</sup> and read the information about that country, view the map, zoom in and out on that map, review the line graphs and review the pie charts;
          1. see the data points on the line graphs or pie charts possible with a mouse click on desktop/laptop, or touch screen on a mobile device.
          1. navigate easily back to the 'Home' page;
          1. read the information about Africa in a World Context;
          1. search for another country<sup id="a3">[3](#f1)</sup> and read the information about that country;
          1. contact us for more information or to provide comments about the site;
          1. contact us to ask about data projects that they may be interested to have completed as an item of work.

    *   #### Returning Visitor Goals
        * The returning visitor will want to;
          1. find any new information supplied.
          1. be able to easily navigate throughout the site to find content;
          1. view the carousel images and any new images just beneath the header;
          1. scroll down through the information, read the content, view the map of Africa, then view the line graphs and the pie charts;
        * A returning visitor may want to go straight to the 'Country' search function;
          1. search the details for a specific country<sup id="a4">[4](#f1)</sup> from the dropdown menu;
          1. read the information about that country, view the map, zoom in and out on that map, review the line graphs and review the pie charts;
          1. search for another country<sup id="a5">[5](#f1)</sup> and read the information about that country, view the map, zoom in and out on that map, review the line graphs and review the pie charts;
          1. see the data points on the line graphs or pie charts possible with a mouse hover on desktop/laptop, or touch screen on a mobile device.
          1. navigate easily back to the 'Home' page;
          1. search for another country<sup id="a6">[6](#f1)</sup> and read the information about that country;
        * A returning visitor may want to go straight to the 'Contact Us' page;
          1. contact us for more information or to provide comments about the site;
          1. contact us to ask about data projects that they may be interested to have completed as an item of work.

    *   #### Frequent User Goals
        * The frequent visitor will want to;
          1. check to see if there are any newly added features and information.
          1. find any new information supplied;
          1. view the carousel images just beneath the header;
          1. scroll down through the information, read the content, view the map of Africa, then view the line graphs and the pie charts;
        * A frequent visitor may want to go straight to the 'Country' search function;
          1. search the details for a specific country<sup id="a7">[7](#f1)</sup> from the dropdown menu;
          1. read the information about that country, view the map, zoom in and out on that map, review the line graphs and review the pie charts;
          1. see the data points on the line graphs or pie charts possible with a mouse hover on desktop/laptop, or touch screen on a mobile device.
          1. search for another country<sup id="a8">[8](#f1)</sup> and read the information about that country, view the map, zoom in and out on that map, review the line graphs and review the pie charts;
          1. navigate easily back to the 'Home' page;
          1. search for another country<sup id="a9">[9](#f1)</sup> and read the information about that country;
        * A frequent visitor may want to go straight to the 'Contact Us' page;
          1. contact us for more information or to provide comments about the site;
          1. contact us to ask about data projects that they may be interested to have completed as an item of work.

*   ### Design
    *   #### Colour Scheme
        *   The main colour is 'Ivory' (#FFFFF0), designed to provide a light neutral background to highlight dark text, line graphs, pie charts, images and the country flags.
    *   #### Typography
        *   The "Exo" font is the main font used throughout the whole website with Sans Serif as the fallback font in case the font isn't imported into the site correctly. "Exo" is a clean font which is both attractive and appropriate.
    *   #### Box Content Structure
        *   The box content structure is used to highlight specific messages and themes through the site. This identifies the text high level summaries on the 'Home' and the 'Country Details' page. In addition the box structure is used to highlight the maps, the line graphs and pie charts on the 'Home' and 'Country Details' pages. The 'Contact Us' page uses the same box structure to present the 'contact form'. Each of the boxes has a shadow effect to lift them from the background and to provide a definitive outline for the contained information.
    *   #### Imagery
        *   The header contains an Africa theme with a simple title. The large images in the carousel are designed to be striking and catch the user's attention and to provide some unique image themes from the African continent. To provide some context each image has a clear title description derived from the original image provided by the contributor.

*   ### Wireframes

    *   Wireframe - [View](https://github.com/Readri205/MS2_Project/blob/master/assets/documents/wireframes/Africa.pdf)

## Features

*   ### Responsive for Device Size
    * Mobile / Smaller screen size
      * The site is designed primarily for use on a mobile. The 'Box Content' structure using Bootstrap Grid System has been utilised so that the information boxes (text, maps, line graphs, pie charts) will stack vertically on small screens for readability.
      * The menu system uses the Bootstrap 'navbar' functionality for small screens using the 'toggle' capability for the 'drop down' menu list from a 'hamburger' icon.
      * The navbar is 'fixed' to the top of the screen at all times on page scroll down for easy access.
      * The navbar is coloured 'black' to make it distinctive from the site pages.
      * The 'hamburger' is coloured 'off-white' to make it visible yet not intrusive when view the site details.
      * The 'drop down' site page options are coloured 'off-white' with the current page shown as 'white' and 'grey' background.
      * The header image and the carousel images are suitably sized for smaller screens.
    * Desktop / Laptop large screen size
      * The 'Box Content' is effective on wide screens. The Bootstrap Grid System allows for the 'Box Content' to align horizontally in themes that are consistent on each of the 'Home' and 'Country Details' pages.
      * The header menu system uses the Bootstrap 'navbar' functionality with the menu option pages listed to the left.
      * The navbar is coloured 'black' to make it distinctive from the site pages.
      * The menu item list is coloured 'off-white' to make it visible yet not intrusive when view the site details.
      * The 'drop down' site page options are coloured 'off-white' with the current page shown as 'white' and 'grey' background.
      * The header image and carousel images are designed to be larger and 'impactful' on the larger screen size.

*   ### Interactive Elements
    * The key feature of the site is the interactive search for any of the 54 African Countries details returned on the 'Country Details' page.
      * Note that if a user goes from the 'Home' page direct to the 'Country Details' page using the 'navbar' menu, the default Country on the 'Country Details' page is Nigeria.
      * The 'Search' box is found on scroll down through the 'Home' page.
      * The 'Search' box is also found on scroll down through the 'Country Details' page.
      * In each case the user can open the drop down menu and pick a country of their choice. The search will return the details for that country on the 'Country Details' page.
      * The details from the search are returned using a various API sources. The details returned are;
        * First header text box;
          * 'Country Name' as a title;
          * 'Country Flag' as a colour image;
          * Name of the Capital City; and
          * Three text lines with information describing that country relative to the rest of Africa;
            * Land size;
            * population; and
            * GDP.
        * Second header box;
          * returns a map of that country, centred on the capital city. Note that the default zoom level is 6. The user can zoom in to see more country detail, or out to see the country in a wider Africa context.
        * Third and fourth boxes;
          * return the Population and GDP growth from 1970 to 2019.
        * Pie charts (box 5, 6 and 7);
          * return land size, population (2019) and GDP (2019) relative to the rest of Africa.
        * Pie charts (box 8, 9 and 10)
          * return visual detail about the largest 5 countries in terms of land size, Population (2019) and GDP (2019) in Africa.
    * The user is able to contact us via the 'Contact Us' page.
      * This page has an interactive contact form that the user can complete and submit their details through to us.
      * There is an open text box so that the user can submit comments.
      * When the user submits their details by clicking the 'Send Contact Details' button, a modal pops up to confirm that details have been sent.

*   ### Future Features
    * Expand the site to include other Continents
    * Expand the site to include more details on the countries
    * Update the API references for data such that the site 'maintains' itself when the World Bank Database updates the API data. Currently, some data is supplied via manual and CSV input which will require a manual process to update when the data is refreshed.
    * Amend to Drop Down Search function to return the Country list in alphabetical order
    * Amend the 'Home' page pie charts to ensure appropriate rendering on screen sizes between x and y size.


## Technologies Used

### Languages Used

*   [HTML5](https://en.wikipedia.org/wiki/HTML5)
*   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
*   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.5.0:](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
    * Bootstrap was used to assist with the responsiveness and styling of the website.
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the contact details types and for social media icons in the footer to add the float transition while being hovered over.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Exo' (main content in all pages) and 'Roboto' (for footer) fonts into the style.css file which are used on all pages.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used for the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used to support JavaScript and is loaded from the [Google CDN](https://www.w3schools.com/jquery/jquery_get_started.asp).
1. [GitPod:](https://www.gitpod.io/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Atom](https://atom.io/)
    - Atom was used as a Text Editor for README.md and Testing.md
1. [Mapbox:](https://docs.mapbox.com/mapbox-gl-js/api/)
    - Mapbox javascript library is used to create the maps on the 'Home' and 'Country' pages.
1. [Leaflet:](https://leafletjs.com/)
    - Leaflet provides a javascript library for Mapbox maps on the 'Home' and 'Country' pages.
1. [OpenStreetMap:](https://www.openstreetmap.org)
    - OpenStreetMap provides the detail for Mapbox maps on the 'Home' and 'Country' pages.
1. [Chartsjs:](https://www.chartjs.org/)
    - Chartjs is used to create the line charts and pie charts.
1. [Emailjs:](https://www.emailjs.com/)
    - Emailjs is used to send the email from the contact form on the 'Contact Us' page.    
1. [Photoshop:](https://www.adobe.com/ie/products/photoshop.html)
    - Photoshop was used to resize images and edit photos for the website.
1. [Adobe Stock:](https://stock.adobe.com/uk/)
    - Adobe Stock was used as a library source for images.
1. [Unsplash:](https://unsplash.com/)
    - Unsplash was used as a library source for images.
1. [Balsamiq:](https://balsamiq.com/)
    - Balsamiq was used to create the [wireframes]() during the design process.
1. [Am I Responsive:](http://ami.responsivedesign.is/#)
    - Am I Responsive was used to test the page layouts during the build process.  [Results]()

### Application Programming Interfaces (API's) Used

* The website sources data from the **[World Bank Database](https://databank.worldbank.org/home.aspx)**. The website primarily makes use of API's to construct the country data, however in certain instances CSV files are used to provide summary level information. The **[Referential](https://rapidapi.com/referential/api/referential)** API via **[RapidAPI](https://rapidapi.com/)** is used to source country codes to construct country information and **[CountryFlags](https://www.countryflags.io/)** for country flag images. **[Leaflet](https://leafletjs.com/)** is used as a javascript library for **[Mapbox](https://www.mapbox.com/)** maps with **[OpenStreetMap](https://www.openstreetmap.org)** tile data, but use the API data to return a Country map for a specific country in the search function.

  1. [Referential API](https://rapidapi.com/referential/api/referential)
      * The Referential API (sourced via [RapidAPI](https://rapidapi.com/)) was used to provide the country code to source all the country data in the search function. It provides the full list of countries in the drop down menu and on country selection, the country codes drive the other API's to return the required information. The Referential API is loaded with the 'Continent' denominator for the African Countries 'AF' (shown at the end of the link below). The API returns a full list of countries each with their respective two digit country codes (example: Nigeria='NG'). Please note that the API requires an Application Key so the link will not return a result. Please see the screenshot image of two countries' data, Nigeria (Key=NG) and Rwanda (Key=RW) as an example return (Note the API returns all 54 countries).
        * [Country Code List](https://referential.p.rapidapi.com/v1/country?fields=currency%25252Ccurrency_num_code%25252Ccurrency_code%25252Ccontinent_code%25252Ccurrency%25252Ciso_a3%25252Cdial_code&continent_code=AF), **https://referential.p.rapidapi.com/v1/country?fields=currency%25252Ccurrency_num_code%25252Ccurrency_code%25252Ccontinent_code%25252Ccurrency%25252Ciso_a3%25252Cdial_code&continent_code=AF**
            ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/referentialcountrycode33.jpg "Country Codes from Referential API")
  1. [World Bank Database](https://databank.worldbank.org/home.aspx)
      * The World Bank Database was used as the primary source for the data in the site. The relevant World bank API's are requested for data once a user selects a country in the search function which drives the relevant country code. Once the country code is determined, a number of different API's are used to determine Capital City, Land Size, Population and GDP for the World sectors, Africa and the 54 African Countries listed. The World Bank uses a standard link to reach the core of its data (https://api.worldbank.org/v2/country/XX/indicator/XX.XXX.XXX.XX). By way of example, the list below links directly to the API 'raw' data return for 'Nigeria', with country code 'NG' in the API link. The links below are also shown in full for documentation purposes;
        * [Capital City, Latitude and Longitude](https://api.worldbank.org/v2/country/NG), **https://api.worldbank.org/v2/country/NG**
        * [Land Size](https://api.worldbank.org/v2/country/NG/indicator/AG.LND.TOTL.K2), **https://api.worldbank.org/v2/country/NG/indicator/AG.LND.TOTL.K2**
        * [Population](https://api.worldbank.org/v2/country/NG/indicator/SP.POP.TOTL), **https://api.worldbank.org/v2/country/NG/indicator/SP.POP.TOTL**
        * [GDP](https://api.worldbank.org/v2/country/NG/indicator/NY.GDP.MKTP.CD), **https://api.worldbank.org/v2/country/NG/indicator/NY.GDP.MKTP.CD**
      * Note that not all countries have complete data in the API's either completely or for any number of years between 1970 and 2019. This will be evident in the line graph returns for any country. Sudan and South Sudan do not return any Land Size data in the land size data API. As this is the case, the Land Size numbers for [Sudan](https://en.wikipedia.org/wiki/Sudan) and [South Sudan](https://en.wikipedia.org/wiki/South_Sudan) are sourced from Wikipideia and the Land Size total for Africa has also been adjusted accordingly.
  1. [CountryFlags](https://www.countryflags.io/)
      * The Country Flags API was used to return the national flag for the country selected in the search Function. By way of example, the list below links directly to the API return for 'Nigeria', with country code 'NG' in the API link. The link below is also shown in full for documentation purposes;
        * [Country Flag, Nigeria](https://www.countryflags.io/ng/shiny/64.png), **https://www.countryflags.io/ng/shiny/64.png**

## Site Construction

* ### Consistent Page Components
    * All pages of the site contain the same 'header', 'navbar', 'carousel' and 'footer';

      <!----![alt text](https://readri205.github.io/MS2_Project/assets/images/Title3.jpg "Africa Logo")--------------->
* ### Home Page
    * Information Box
      * Contains the details as to the intention of the site and a how it can be used. It also contains the basic information for Africa in a high level context.
      * The data included in the information box for the **World** figures is computed using the **worldStats.js** file for each of Land Size, Population and GDP. The respective sizes for **Africa** are computed separately from the World Bank Database Excel file download located [here](XX).
      * Note that as the World Bank Database does not show any Land Size data for [Sudan](https://en.wikipedia.org/wiki/Sudan) and [South Sudan](https://en.wikipedia.org/wiki/South_Sudan), the values have been sourced from Wikipideia, and adjusted for Africa and the World Land Size Totals.
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/informationbox10025.jpg "INFO Box")
    * Map
      * The Africa Map is constructed using the **africaMap.js** file which uses the [Leaflet](https://leafletjs.com/) library, based on [Mapbox](https://www.mapbox.com/) Map imagery and[OpenStreetMap](https://www.openstreetmap.org) data providers. The Map is centred on Ouesso, Republic of Congo (1.6155N, 16.0464E) in the Map Box.
        ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/africamap10025.jpg "AFRICA Map")
    * Line Graphs and Pie Charts
      * The graphs and charts use the [Chartsjs](https://www.chartjs.org/) javascript library.
      * The Line Graphs and Pie Charts are all computed in the **totalCharts.js** file.
        * The Line Graphs reference [pop.csv](https://github.com/Readri205/MS2_Project/blob/master/assets/csv/pop.csv) and [gdp.csv](https://github.com/Readri205/MS2_Project/blob/master/assets/csv/gdp.csv) respectively to create the historical data between 1970 and 2019.
        * The Pie Charts are directly loaded with the data in the **totalCharts.js** file.
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/pop10025.jpg "Population Chart")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/gdp10025.jpg "GDP Chart")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/africaland10025.jpg "Land Pie Chart")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/africapop10025.jpg "Population Pie Chart")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/africagdp10025.jpg "GDP Pie Chart")
    * Country Search Function
      * the Search Function is a drop down menu that references the **getCountries.js** file. The country selection made by the user will return the required information about the Country selected on the 'Country Details' page. The **getCountries.js** file will return the required two digit **countryCode** that is fed into all the relevant API's (described below in the 'Country Details' Page section) that in turn generate the required returns for the Country selected.
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/searchmenu10050.jpg "Search Function")
* ### Country Details Page (Nigeria has been used by way of example)
    * Country Information
      * Contains the basic information for the **Country** selected.
      * The Country Name, National Flag and Capital City is returned in the **countryStats.js** file  from the relevant API's.
      * The data included in the information box for the **Country** figures and percentages is computed in the **countryStats.js** file for each of Land Size, Population and GDP on returns from the relevant API's. The respective sizes for **Africa** are computed separately from the **World Bank Database** Excel file download located [here](XX).
      * Note that as the World Bank Database does not show any Land Size data for [Sudan](https://en.wikipedia.org/wiki/Sudan) and [South Sudan](https://en.wikipedia.org/wiki/South_Sudan), the values have been sourced from Wikipideia, and adjusted for Africa and the World Land Size Totals.
      * The following code at **line 107** in the **countryStats.js** file is used to account for Sudan and South Sudan Land Size data after the API from the search function is called;

      ```JavaScript
        function writeLandSize(data) {
          if (countryCode == "SD") {
              landsize = 1886068;
            } else if (countryCode == "SS") {
              landsize = 619745;
            } else {
              item = data[1];
              landsize = item[1].value.toFixed(0);
            }
            perc = (landsize / 295097.44).toFixed(2);
            document.getElementById("landsize").innerHTML += ("Land Size:   " + landsize + "   Sq. Kms" + " " + " - " + perc + "% of total Africa Land Size (29.51 Mn Sq. Kms)");
          }
        ```
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/nigeriainfo10050.jpg "Country Information")
    * Country Map
      * The Country Map is centred on the Capital City Latitude and Longitude. The map is generated by reference to the **countryMap.js** file which uses the [Leaflet](https://leafletjs.com/) library, based on [Mapbox](https://www.mapbox.com/) Map imagery and[OpenStreetMap](https://www.openstreetmap.org) data providers.
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/nigeriamap10050.jpg "Country Map")
    * Country Line Graphs
      * The Country Line Graphs are returned in the **countryGraphs.js** file  from the relevant API's.
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/nigeriapopline10050.jpg "Country Population Line Graph")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/nigeriagdpline10050.jpg "Country GDP Line Graph")
    * Country and Top 5 Pie Charts
      * The Country and Top 5 Pie charts are returned in the **pieCountry.js** file  from the relevant API's.
      * The following code at **line 18** in the **pieCountry.js** file is used to account for Sudan and South Sudan Land Size data (in the Land Size Pie Chart) after the API from the search function is called;
      ```javascript
        function writeLand(data) {
          if (countryCode == "SD") {
            item = data[1][1];
            countland = 1886068 / 1000000;
            } else if (countryCode == "SS") {
            item = data[1][1];
            countland = 619745 / 1000000;
            } else {
            item = data[1][1];
            countland = item.value / 1000000;
            }
            const roaland = (29.509744 - countland);
          }
      ```
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/nigerialandpie10050.jpg "Country Land Size Pie Chart")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/top5landpie10050.jpg "Top 5 Land Size")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/nigeriapoppie10050.jpg "Country Population Pie Chart")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/totpoppie10050.jpg "Top 5 Population Pie Chart")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/nigeriagdppie10050.jpg "Country GDP Pie Chart")
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/topgdppie10050.jpg "Top 5 GDP Pie Chart")
    * Country Search Function
      * the Search Function is a drop down menu that references the **getCountries.js** file. The country selection made by the user will return the required information about the Country selected on the 'Country Details' page. The **getCountries.js** file will return the required two digit **countryCode** that is fed into all the relevant API's (described above in the 'Country Details' Page section) that in turn generates the required information return for the Country selected.
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/searchcountry10050.jpg " Country Search Function")
* ### Contacts Page
    * The Contacts Page contains the 'Contact Form' for a user to supply contact information and to provide comments, questions or to provide a request for some work.
    * The 'Contact Form' will generate an email by referencing the **sendEmail.js** file when a user submits their information.
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/contact10050.jpg "Contact Form")

## Testing

Testing information can be found in a separate [Testing.md](https://github.com/Readri205/MS2_Project/blob/master/Testing.md) file.

### Known Bugs

*   In the Search Function the drop down menu generatedfrom the [Referential API](https://rapidapi.com/referential/api/referential) does not return the list of Countries in a complete alphabetical order. Future updates to the site will look to remedy this issue.
*   Mapbox and Country.io API requests can return CORS issues. The cookies submitted by these API sites have been updated with 'SameSite' = "None" and "Secure" per the [Google Chrome documentation](https://web.dev/samesite-cookies-explained/) by updating the Cookies in the Web Developer Tools in 'Application/Storage/Cookies'.
*  On deployment of the website and attempting to view the site using the Chrome browser, the [Referential API](https://rapidapi.com/referential/api/referential) sometimes returns a 'CORS' issue and will not return the drop down menu in the Search Function.
*  On some screen sizes between x and y, the pie charts on the 'Home' page can become squeezed and will not render the pie chart. Testing on various devices *(list them out)* did not evidence this issue however, there may be some devices with these screen sizes that could have this result.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following process;

1. The project was written in [GitPod](https://www.gitpod.io/) and pushed to GitHub Pages ready for deployment by taking the following steps;
1. Logged in to GitHub and located the [GitHub Repository](https://github.com/Readri205/MS2_Project);
1. At the top of the Repository, the "Settings" Button was selected on the menu;
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/deployment10050.jpg "See Settings").
1. Scrolled down the Settings page until the "GitHub Pages" Section was located;
1. Under "Source", the dropdown showing "None" was selected and then "Master Branch" was chosen;
1. The selection was then saved and the page automatically refreshed; and
1. The published site is found by scrolling back down the page to the "GitHub Pages" section to find the live site - [**EARTH AFRICA** :earth_africa:](https://readri205.github.io/MS2_Project/).
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/deployedgithubpages10050.jpg "Github Pages Deployed Site")

### Forking the GitHub Repository

A copy of the GitHub Repository can be made by forking the GitHub account. This copy can be viewed and  changes can be made to the copy without affecting the original repository. Take the following steps to fork the repository;

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Readri205/MS2_Project);
1. At the top of the Repository above the "Settings" Button on the menu, locate the "Fork" Button.
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/forking10050.jpg "Fork Button"); and
1. Click to create a copy of the original repository in your own GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Readri205/MS2_Project)
1. Under the repository name, click "Code".
1. To clone the repository using HTTPS, click the top right hand link click "Use HTTPS";
1. Copy the link under "Clone with HTTPS";
      ![alt text](https://readri205.github.io/MS2_Project/assets/images/readmeimg/clone10050.jpg "HTTPS Clone")
1. Open your Code Editor and access the appropriate process to paste the clone link;
1. Change the current working directory to the location where you want to keep the cloned directory;
1. Paste the URL you copied in step 4 above.

Note that different Code Editors will have different processes for making the clone once the HTTPS link copy is made in step 4 above.

1. If using GitHub Desktop, the clone can de saved directly into GitHub Desktop from the "Code" dropdown menu.

1. A zip file clone can be downloaded from the same "Code" drop down above;
1. Select 'Download ZIP' and the complete zip file will be saved to you local computer.

## Credits

### Code

*   My Mentor (Adegbenga Adeye (email:adegbenga.adeye@outlook.com, slack:gbenga_mentor)) for providing help, guidance, inspiration and input on the challenging components for the Country Search Function.

*   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

*   [MDN Web Docs](https://developer.mozilla.org/) : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure correct validation. Tutorial Found [Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#Pattern_validation)

### Content

*   All content was written by the developer.

*   Psychological properties of colours text in the README.md was found [here](http://www.colour-affects.co.uk/psychological-properties-of-colours)

### Media

*   All images [© Unsplash.com](https://unsplash.com/) unless otherwise stated;
    *   Header image - [Hand draw doodles of Africa word. Colorful illustration. Background with lots of objects.](https://stock.adobe.com/uk/contributor/206263469/leo-d?load_type=author&prev_url=detail) By leo_d [© stock.adobe.com](https://stock.adobe.com/uk/);
    *   Carousel image - [Dallol, Ehiopia](https://unsplash.com/photos/UQJP4eEqRV0) By Trevor Cole [© Unsplash.com](https://unsplash.com/);
    *   Carousel image - [Aït Benhaddou, Morocco](https://unsplash.com/photos/pcbSQTQr2-I) By Toa Heftiba [© Unsplash.com](https://unsplash.com/);
    *   Carousel image - [Tema, Greater Accra region, Ghana](https://unsplash.com/photos/8hi9WGb4qMA) By Efe Kurnaz [© Unsplash.com](https://unsplash.com/);
    *   Carousel image - [Colonial houses and crosswalk, pedestrian crossing in Mindelo on the island of Sao Vicente in Cape Verde,a beautiful clouded sky.](https://stock.adobe.com/fr/contributor/208162006/clara?load_type=author&prev_url=detail) By clara [© stock.adobe.com](https://stock.adobe.com/uk/);
    *   Carousel image - [Kirche in Malawi](https://stock.adobe.com/fr/contributor/208173857/christian-horras?load_type=author&prev_url=detail) By Christian Horras [© stock.adobe.com](https://stock.adobe.com/uk/);


### Acknowledgements

*   My Mentor (Adegbenga Adeye (email:adegbenga.adeye@outlook.com, slack:gbenga_mentor)) for continuous helpful feedback.

*   Tutor support at Code Institute for their support.

*   Other students (Slack Code Institute Workspace) on the Full Stack Developer Course, via the [Slack Communication Platform](https://slack.com/intl/en-gb/)

*   Friends and family providing review and feedback on the site content and navigation.

## Version Control

*   All through the development phase of the project, commits have been made from the GitPod Repository to GitHub. The version control list below mirrors the GitHub Commit list. It is designed to provide a direct track on commits in the README file for easy access as to code status in GitPod. Note that feedback from MS1 Project was received on July 8th, 2020 which stated that commits should be in the imperative. Any commits after this date (approx. V6.4) that are not in the imperative is in error.

    * V1.0 Initial Commit
    * V1.1 Added Africa header image, country html page and README template
    * V1.2 Added google fonts, Jquery, fontawesome scripts, added navbar and header container
    * V1.3 Added two containers home page for Information box and Map box
    * V1.4 Added second and third row boxes for table graphs, search and contacts boxes
    * V1.5 Updated for background body colour, text colour and font weight
    * V1.6 Added country html page, container boxes for images, map, graphs, search and contact details
    * V1.7 Added country name header styling on country html page
    * V1.8 Added Leaflet and Mapbox link and JS scripts
    * V1.9 Update with private restricted Mapbox access token
    * V2.0 Amended Africa map size with box size on index page
    * V2.1 Added map js for country map on country html
    * V2.2 Added Leaflet and Mapbox link and JS to country html
    * V2.3 Moved country map to new country js file
    * V2.4 Set up individual js files for Africa and country maps
    * V2.5 Add js for country code output to outputs html
    * V2.6 Added js query for World Bank API for capital city and lat long
    * V2.7 Amended wb http queries to https to reduce CORS issue
    * V2.8 Added GET for world bank population data and write to output html
    * V2.9 Added GET for world bank gdp data and write to output html
    * V3.0 Added chart js chart for population in output html
    * V3.1 Switched mapbox access token for charts and updated for bootstrap scripts
    * V3.2 Revised script order for navbar menu to work on small screen
    * V3.3 Added second chart for country GDP on outputs html page
    * V3.4 Added default mapbox access token to Africa and country maps
    * V3.5 Added contact boxes on html pages and linked emailjs function
    * V3.6 Moved emailjs scripts to head of index and country pages
    * V3.7 Added abuja image and updated css styles for image box
    * V3.8 Added total pop and gdp graphs to index html
    * V3.9 Split total and country charts into two js files
    * V4.0 Added dropdown country search box on home page with css and js
    * V4.1 Added js code to push world bank api labels and data into graphs on country page
    * V4.2 Amended get and chart function on charts js page to load graphs on web load
    * V4.3 Added country code input for urls on main js file
    * V4.4 Removed 'toFixed' in mainjs file
    * V4.5 Added world bank capital city url to country map js
    * V4.6 Amended map generate function to auto update from url lat long
    * V4.7 Added world bank api url to flag js to write country info to country html
    * V4.8 Added country code to js pages to update flag for country
    * V4.9 Added country names to search dropdown list
    * V5.0 Amended const to one input on charts js to change country details output
    * V5.1 Moved country code call to codecall js and made function names unique
    * V5.2 Split chart js into popchart js and gdpchart js
    * V5.3 Reordered gdpchart js and popchart js in country page
    * V5.4 Render fix for charts in mobile safari using resize class in css (test)
    * V5.5 Added IE Edge meta tag to headers
    * V5.6 Removed V5.4 resize for mobile, placed graph canvas in div
    * V5.7 ChartsJS into divs, namnso img to png, maps to z-index 1
    * V5.8 Updated for header image on three html pages
    * V5.9 Function added to move country code for onclick function
    * V6.0 New getcountries js to extract country code for load and test
    * V6.1 Load index and country page script links
    * V6.2 Update index and country html scripts
    * V6.3 Additions to total graphs on home page
    * V6.4 Added World Bank CSV total pop/gdp, fed data to graphs totalcharts js
    * V6.5 Fix header image issue dropping down on index and country detail pages
    * V6.6 Update contact form and first write on country menu selection
    * V6.7 Moved contact form box to contact page from index and country pages
    * V6.8 Updated contact form entry boxes to include tel no. and second name
    * V6.9 Updates to information text on home page
    * V7.0 Updated total graphs for WB MEA and SSF data
    * V7.1 Update to information text on home page
    * V7.2 Further update to information text on home page
    * V7.1 Update menucode js menu link for country selection
    * V7.2 Modal box addded to contact form
    * V7.3 Removed switch and loadfunction from menucode js
    * V7.4 Update getCountries js to load country selecton
    * V7.5 Added source references for data and charts
    * V7.6 Add reset function for contact form submission
    * V7.7 Add carousel feature for sizing
    * V7.8 Add padding to reference for data sources
    * V7.9 Revise getCountries js code for country selection
    * V8.0 Remove HTML space breaks in code (&#8203)
    * V8.1 Amend to getCountry code for country search
    * V8.2 Style changes on carousel
    * V8.3 Add access control allow origin in request header getCountries js
    * V8.4 Resize carousel images for header
    * V8.5 Add countryStats js for country page API stats and search boxes centered
    * V8.6 Rework Africa Pop and GDP totals, Update country summary box with totals
    * V8.7 Amend function code in countryStats js
    * V8.8 Add World Population and GDP data to home page graphs
    * V8.9 Remove World Data from graphs due scale incompatible, add pop pie chart
    * V9.0 Add population and gdp pie charts to country page
    * V9.1 Add top five populaton data to pie chart country page
    * V9.2 Add top five GDP data to pie chart country page
    * V9.3 Set min-height on info-box styling to always fit narrative
    * V9.4 Resize header image, add footer content and style
    * V9.5 Resize header image, amend footer content and style
    * V9.6 Resize header image, resize information box home and country pages
    * V9.7 Style changes to country page charts and header image change
    * V9.8 Remove padding on top five country charts
    * V9.9 Rationalise pop/gdp -> countryGraphs,home graphs -> totalcharts, stats -> countryStats
    * V10.0 Add API for World Land POP GDP Stats -> worldStats
    * V10.1 Add API for Region Land stats -> regionStats
    * V10.2 Add land size pie chart -> regionstats for home page
    * V10.3 Add land size country pie -> country page
    * V10.4 Add top 10 country land sizes pie chart -> country page
    * V10.5 Amend footer text and copy to country and contact page, remove carousel indicator and controls
    * V10.6 Amend footer and search box text, amend top 10 country pie chart computation
    * V10.7 Fixed pie chart results to 2 decimal places
    * V10.8 Update all graphs and pie charts to fontFamily "Exo"
    * V10.9 Update all graphs and pie charts to fontColor black fontsize 15
    * V11.0 Revert graph and pie charts to default fontsize for mobile screens
    * V11.1 Rename csv files, redesign world region pie chart for land size
    * V11.2 Update world land size narrative on home page
    * V11.3 Add meta tag for CSP
    * V11.4 Removed meta tag for CSP
    * V11.5 Update mapbox scripts and links
    * V11.6 Amend country redirection from menu for Github
    * V11.7 Add line item in drop down for first country in getCountries.js
    * V11.8 Amend country code for country selection and page selection
    * V11.9 Amend pop up window code for country selection in getCountries.js
    * V12.0 Amend pop up code for /
    * V12.1 Amend API request name in setRequestHeader getCountries.js
    * V12.2 Amend spelling mistake for Url
    * V12.3 Amend push address URL
    * V12.4 Amend to lowercase for location file name
    * V12.5 Amend country tag to country.html?country=NG
    * V12.6 Remove padding on country line graphs
    * V12.7 Reduce image size for carousel
    * V12.8 Remove surplus images, update country page link in navbar
    * V12.9 Remove padding on charts -> totalCharts.js, country page link on outputs
    * V13.0 Add Landsize 'IF' function for Sudan and South Sudan
    * V13.1 Amend country page for test 'IF' Sudan South Sudan landsize
    * V13.2 Initialise getDataLandSize function on test page
    * V13.3 Add IF statement for Sudan South Sudan country stats country page
    * V13.4 Amend getCountriesvtest.js to getCountries.js page for countries page
    * V13.5 Update text in README file
    * V13.6 Tidy HTMl code structure with FreeFormatter
    * V13.7 Update text in README file
    * V13.8 Update text and image in README file
    * V13.9 Update text in README file
    * V14.0 Update text in README file
    * V14.1 Update text README, retract cloudfare CDN jquery script
    * V14.2 Update Mapbox and Country.io cookies with 'SameSite=None' and 'Secure'
    * V14.3 Update text README file
    * V14.4 Update text README file
    * V14.5 Update test image in README file
    * V14.6 Repeat commit for README file save
    * V14.7 Update header with resized image
    * V14.8 Update and reformat text in README file
    * V14.9 Update chadmap.jp2 for screenshot image in README
    * V15.0 Update chadmap.jpg for screenshot image in README
    * V15.1 Update text in README, upload chadmap screenshot
    * V15.2 Update README, adjust info-box height, add carousel image text
    * V15.3 Remove scripts, resize contact form, add text, reduce to top 5 land size pie
    * V15.4 Amend header image size
    * V15.5 Remove carousel caption on small screens
    * V15.6 Amend for typo in carousel 'Trevor' div on home page
    * V15.7 Add filter.css script
    * V15.8 Amend request header in getCountries for cross-origin to " * "
    * V15.9 Add IF function for Sudan South Sudan land size pie chart on country details
    * V16.0 Amend IF function to compute all countries from API
    * V16.1 Amend text in README file
    * V16.2 Update home and country page text
    * V16.3 Update media image credits in README
    * V16.4 Add cape verde image to carousel and to media credits
    * V16.5 Add kirche malawi image to carousel and to media credits
    * V16.6 Add screenshots for site construction in README
    * V16.7 Amend screenshot image sizes for site construction in README
    * V16.8 Amend README text, add table of contents, create testing.md file
    * V16.9 Amend text in README file
    * V17.0 Resize pie chart boxed on 'Country Details' page
    * V17.1 Amend CSV text and header text on 'Home' page to resize charts
    * V17.2 Delete Countrystatstest.js test file
    * V17.3 Update README for API information
    * V17.4 Update README API text
    * V17.5 Update README, image for API and Contents
    * V17.6 Update README text and search menu screenshot
    * V17.7 Update README for site construction text
    * V17.8 Update README for site construction 'Country Details' screenshots
    * V17.9 Update README for site construction 'Country Details' text
    * V18.0 Update README for GitHub Pages Deployment
    * V18.1 Update README for GitHub Pages Deployment amends
    * V18.2 Update README for Features and Code Block format
    * V18.3 Update README Code Block javascript format
    * V18.4 Update README contents and code blocks
    * V18.5 Clean HTML and CSS files
    * V18.6 Add and amend README and Testing.md text
    * V18.7 Remove form modal, add jquery form submission confirmation dialogue box
    * V18.8 Add Africa Map favicon to pages, update new contact page for form
    * V18.9 Amend README for GitHub Deployment, Update 'Country Details' page for favicon header
    * V19.0 Move pie chart legend right, pie charts to 2 rows on home, 2 decimals to country line
    * V19.1 Commit to remove getCountriesvtest GitPod test pages Home and Countries Detail pages
    * V19.2 Amend fonts, backgrounds in boxes for MSEdge testing
    * V19.3 Revert box backgrounds after test
    * V19.4 Remove outputs page, old js files
    * V19.5 Amend all graph fonts globally to Roboto and 'black'
    * V19.6 Amend info boxes text, pie chart legends to fit small screens
    * V19.7 Resize code box and pie charts to fit iPhone 5 6/7/8 screen sizes
    * V19.8 Upload test and supporting documents and screen images
    * V19.9 Upload favicons

***
<b id="f1">1</b> Country searches drop down menu has some out of alphabetical listed order countries. The list order is defined by the Referential API. 1[↩](#a1)2[↩](#a2)3[↩](#a3)4[↩](#a4)5[↩](#a5)6[↩](#a6)7[↩](#a7)8[↩](#a8)9[↩](#a9)
