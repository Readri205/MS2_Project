![alt text](https://readri205.github.io/MS2_Project/assets/images/Title3.jpg "Africa Logo")

[View the live **EARTH AFRICA**:earth_africa: project here.](https://readri205.github.io/MS2_Project/)

View the Main README [here](https://github.com/Readri205/MS2_Project/blob/master/README.md)

# **EARTH AFRICA :earth_africa: - Testing Information**

## Contents

- [Testing](#testing)
  * [Testing User Stories from User Experience (UX) Section](#testing-user-stories-from-user-experience--ux--section)
  * [User stories](#user-stories)
    + [First Time Visitor Goals](#first-time-visitor-goals)
    + [Returning Visitor Goals](#returning-visitor-goals)
    + [Frequent User Goals](#frequent-user-goals)
  * [Further Testing](#further-testing)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Testing

### Automated Testing

The following automated tools were used to test the website during development of the website;

*   [Chrome Developer Tools]() used extensively during development to test outputs and to identify issues arising during the development phase. This tool has proved very successful in terms of determining the appropriate results

*   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results]() - used to validate HTML.
*   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results]() - used to validate CSS.
*   [JSHint]() - [Results]() used to validate javascript.
*   [Autoprefixer CSS Online](https://autoprefixer.github.io/) - used to parse CSS and add vendor prefixes.

### Testing User Stories from User Experience (UX) Section

*   ### User stories

    *   #### First Time Visitor Goals
        * The first time visitor will want to;
          1. easily understand the main purpose of the site;
          1. be able to easily navigate throughout the site to find content;
          1. view the carousel images just beneath the header;
          1. scroll down through the information, read the content, view the map of **Africa**, then view the line graphs and the pie charts;
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

### Numerical Validation Testing

The website makes use of [World Bank Database](https://databank.worldbank.org/home.aspx) API's as described in the [README.md](https://github.com/Readri205/MS2_Project/blob/master/README.md). In particular, those API's relevant to Land Size, Population and GDP. In some cases, adjustments have had to be made to figures to reflect the more appropriate figures for the Africa continent analysis;
*   The land sizes for Sudan and South Sudan are not included in the World Bank Database and so are adjusted and **confirmed** in the [LandByRegion.xlsx](https://github.com/Readri205/MS2_Project/blob/master/assets/documents/excelfiles/landByRegion.xlsx) excel sheet (image below). Note that [Sudan](https://en.wikipedia.org/wiki/Sudan) (1,886,068 sq. kms) and [South Sudan](https://en.wikipedia.org/wiki/South_Sudan) (619,745 sq. kms) Land Sizes are sourced from [Wikipedia](https://www.wikipedia.org/)
*   The land size for Africa from the World Bank is adjusted to move the 6 countries in the Middle East and North Africa sector are also **confirmed** using the same excel file (image below).

  ![alt text](https://github.com/Readri205/MS2_Project/blob/master/assets/documents/excelfiles/landbyregion10050.jpg "Land By Region")
*   The Population and GDP sectors for the World Regions and Africa are also **confirmed** in the [GDPPOPWorldAdj.xlsx](https://github.com/Readri205/MS2_Project/blob/master/assets/documents/excelfiles/gdppopworldadj.xlsx) excel file (Image below).

  ![alt text](https://github.com/Readri205/MS2_Project/blob/master/assets/documents/excelfiles/gdppopworldadj10050.jpg "Population and GDP Adjustments")

### Contact Form Testing

### Further Testing

*   The website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.

*   The website was tested using Google Chrome Developer Tools Responsive Design feature for screen sizes.

*   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 5, iPhone6, iPhone7, iPhone 8, iPhoneX, Galaxy.

*   A large amount of testing was done to ensure that all pages were linking correctly.

*   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.
