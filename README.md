<img src="assets/images/AdobeStock_322612165.gif" style="margin: 0;">

<h1 align="center">Africa</h1>

[View the live project here.]( https://readri205.github.io/MS2_Project/)

This website provides an overview of the Africa Continent in terms of land size, population and Gross Domestic Product (GDP). These measures have been provided in a World context. The website provides an ability to view similar data for each country in Africa by using a search function. The search function is provided at the bottom of the 'Home' page and also on the bottom of the 'Country'. The search function in both locations allows for a quick search for an African country from either page.

The website is primarily 'informative', allowing users to view information about Africa in general and to view information on specific countries. The site is designed to show Africa in a world context initially and then to show each African country in an Africa context.

The website concept is to answer high level questions about the African Continent;
  * where is it?;
  * what are the countries in it?;
  * where are the countries on the Africa Continent?; and
  * what size are each of the countries in terms of land size, population and Gross Domestic Product (GDP);
  * what is the name of the Capital City and where is it located?; and
  * what does the national flag look like?

The answers for Africa as a whole are provided through the use of a number of different media outputs on the 'Home' page;
  * text summary on Africa land size, population and GDP;
  * a map showing the Africa continent with many of the key countries shown;
  * line graphs for population and GDP growth from 1970 to 2019;
  * pie charts showing land size, population and GDP for Africa relative to the Rest of the World.

The answers for any African country returned from a search query;
  * text summary on Country capital city, national flag, land size, population and GDP relative to the Rest of Africa;
  * a map centred on the capital city location and showing the country in context of the Africa Continent;
  * line graphs for population and GDP growth from 1970 to 2019;
  * pie charts showing land size, population and GDP relative to the Rest of Africa; and
  * pie charts showing top ten countries by land size, top five by population size (2019) and top five by GDP size (2019)

The website sources data from the [World Bank Database](https://databank.worldbank.org/home.aspx). The website primarily makes use of API's to construct the country data, however in certain instances CSV files are used to provide summary level information. The [Referential](https://rapidapi.com/referential/api/referential) API via [RapidAPI](https://rapidapi.com/) is used to source country codes to construct country information and [COUNTRYFLAGS](https://www.countryflags.io/) for country flag images. [Mapbox](https://www.mapbox.com/) is used as the base layer for maps with [Leaflet](https://leafletjs.com/) and [Openstreetmap](https://www.openstreetmap.org) overlays. API and other data source details are provided in the 'xxx' section below.

If the site is perceived as successful, it is anticipated that the site could be expanded to show;
  * similar information for the six remaining World Continents; and
  * each continent and its countries could be expanded with more details.

The site is designed to be responsive and accessible on a range of devices, making it easy to navigate for interested users and partners. The website was designed using 'Mobile First' principles as the site must be perceived to be quick and easy to use and read as a reference site on a mobile device.

<h2 align="center"><img src="assets/images/Title2.png"></h2>

## User Experience (UX)

-   ### User stories

    -   #### First Time Visitor Goals

        1. I want to easily understand the main purpose of the site.
        2. I want to be able to easily navigate throughout the site to find content.
        3. I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their followings on social media to determine how trusted and known they are.

    -   #### Returning Visitor Goals

        1. I want to find information about coding challenges.
        2. I want to find the best way to get in contact with the organisation with any questions I may have.
        3. I want to find community links.

    -   #### Frequent User Goals
        1. I want to check to see if there are any newly added challenges or hackathons.
        2. I want to check to see if there are any new blog posts.
        3. I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.

-   ### Design
    -   #### Colour Scheme
        -   The main colour is 'Ivory' (#FFFFF0), designed to provide a light neutral background to highlight dark text, line graphs, pie charts, images and the country flags.
    -   #### Typography
        -   The "Exo" font is the main font used throughout the whole website with Sans Serif as the fallback font in case the font isn't imported into the site correctly. "Exo" is a clean font which is both attractive and appropriate.
    -   #### Box Content Structure
        -   The box content structure is used to highlight specific messages and themes through the site. This identifies the text high level summaries on the 'Home' and the 'Country' page. In addition box structure is used to highlight the maps, the line graphs and pie charts on the 'Home' and 'Country' pages. The 'Contact Us' page uses the same box structure to present the 'contact form'. Each of the boxes has a shadow effect to lift them from the background and to provide a definitive outline for the contained information.
    -   #### Imagery
        -   The header contains an Africa theme with a simple title. The large images in the carousel are designed to be striking and catch the user's attention and to provide some unique image themes from the African continent. To provide some context each image has a clear title description which is derived from the original image and provided by the contributor.

*   ### Wireframes

    -   Home Page Wireframe - [View](https://github.com/)

    -   Mobile Wireframe - [View](https://github.com/)

    -   Contact Us Page Wireframe - [View](https://github.com/)

## Features

-   Responsive on all device sizes

-   Interactive elements

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
-   [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.5.0:](https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js
1. [Hover.css:](https://ianlunn.github.io/Hover/)
    - Hover.css was used on the contact details types and for social media icons in the footer to add the float transition while being hovered over.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Exo' (main content in all pages) **and 'Roboto' (for footer) fonts into the style.css file which are used on all pages.**
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used for the website to add icons for aesthetic and UX purposes.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive but was also used to support JavaScript and is loaded from the [Google CDN](https://www.w3schools.com/jquery/jquery_get_started.asp).
1. [GitPod](https://www.gitpod.io/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
1. [Mapbox:](https://docs.mapbox.com/mapbox-gl-js/api/)
    - Mapbox javascript library is used to create the maps on the 'Home' and 'Country' pages.
1. [Leaflet:](https://unpkg.com/leaflet@1.6.0/dist/leaflet.js)
    - Leaflet provides a javascript library for Mapbox maps on the 'Home' and 'Country' pages.
1. [OpenStreetMap:](https://www.openstreetmap.org)
    - OpenStreetMap provides the detail for Mapbox maps on the 'Home' and 'Country' pages.
1. [Chartsjs:](https://www.chartjs.org/)
    - Chartjs is used to create the line charts and pie charts.
1. [Emailjs:](https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js)
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

## Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

-   [W3C Markup Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results]()
-   [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) - [Results]()

### Testing User Stories from User Experience (UX) Section

-   #### First Time Visitor Goals

    1. I want to easily understand the main purpose of the site.

        1. Upon entering the site, users are automatically greeted with a clean and easily readable navigation bar to go to the page of their choice. Underneath there is a Hero Image with Text and a "Learn More" Call to action button.
        1. The main points are made immediately with the hero image
        1. The user has two options, click the call to action buttons or scroll down, both of which will lead to the same place, to learn more about the organisation.

    1. I want to be able to easily be able to navigate throughout the site to find content.

        1. The site has been designed to be fluid and never to entrap the user. At the top of each page there is a clean navigation bar, each link describes what the page they will end up at clearly.
        1. At the bottom of the first 3 pages there is a redirection call to action to ensure the user always has somewhere to go and doesn't feel trapped as they get to the bottom of the page.
        1. On the Contact Us Page, after a form response is submitted, the page refreshes and the user is brought to the top of the page where the navigation bar is.

    1. I want to look for testimonials to understand what their users think of them and see if they are trusted. I also want to locate their social media links to see their following on social media to determine how trusted and known they are.
        1. Once the new visitor has read the About Us and What We Do text, they will notice the Why We are Loved So Much section.
        1. The user can also scroll to the bottom of any page on the site to locate social media links in the footer.
        1. At the bottom of the Contact Us page, the user is told underneath the form, that alternatively they can contact the organisation on social media which highlights the links to them.

-   #### Returning Visitor Goals

    1. I want to find the new programming challenges or hackathons.

        1. These are clearly shown in the banner message.
        1. They will be directed to a page with another hero image and call to action.

    1. I want to find the best way to get in contact with the organisation with any questions I may have.

        1. The navigation bar clearly highlights the "Contact Us" Page.
        1. Here they can fill out the form on the page or are told that alternatively they can message the organisation on social media.
        1. The footer contains links to the organisations Facebook, Twitter and Instagram page as well as the organization's email.
        1. Whichever link they click, it will be open up in a new tab to ensure the user can easily get back to the website.
        1. The email button is set up to automatically open up your email app and autofill their email address in the "To" section.

    1. I want to find the Facebook Group link so that I can join and interact with others in the community.
        1. The Facebook Page can be found at the footer of every page and will open a new tab for the user and more information can be found on the Facebook page.
        1. Alternatively, the user can scroll to the bottom of the Home page to find the Facebook Group redirect card and can easily join by clicking the "Join Now!" button which like any external link, will open in a new tab to ensure they can get back to the website easily.
        1. If the user is on the "Our Favourites" page they will also be greeted with a call to action button to invite the user to the Facebook group. The user is incentivised as they are told there is a weekly favourite product posted in the group.

-   #### Frequent User Goals

    1. I want to check to see if there are any newly added challenges or hackathons.

        1. The user would already be comfortable with the website layout and can easily click the banner message.

    1. I want to check to see if there are any new blog posts.

        1. The user would already be comfortable with the website layout and can easily click the blog link

    1. I want to sign up to the Newsletter so that I am emailed any major updates and/or changes to the website or organisation.
        1. At the bottom of every page their is a footer which content is consistent throughout all pages.
        1. To the right hand side of the footer the user can see "Subscribe to our Newsletter" and are prompted to Enter their email address.
        1. There is a "Submit" button to the right hand side of the input field which is located close to the field and can easily be distinguished.

### Further Testing

-   The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
-   The website was viewed on a variety of devices such as Desktop, Laptop, iPhone7, iPhone 8 & iPhoneX.
-   A large amount of testing was done to ensure that all pages were linking correctly.
-   Friends and family members were asked to review the site and documentation to point out any bugs and/or user experience issues.

### Known Bugs

-   On some mobile devices the Hero Image pushes the size of screen out more than any of the other content on the page.
    -   A white gap can be seen to the right of the footer and navigation bar as a result.
-   On Microsoft Edge and Internet Explorer Browsers, all links in Navbar are pushed upwards when hovering over them.

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
1. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
1. Scroll down the Settings page until you locate the "GitHub Pages" Section.
1. Under "Source", click the dropdown called "None" and select "Master Branch".
1. The page will automatically refresh.
1. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
1. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
1. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
1. Under the repository name, click "Clone or download".
1. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
1. Open Git Bash
1. Change the current working directory to the location where you want the cloned directory to be made.
1. Type `git clone`, and then paste the URL you copied in Step 3.

```
$ git clone https://github.com/Readri205/MS2_Project
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/Readri205/MS2_Project
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

Click [Here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-to-github-desktop) to retrieve pictures for some of the buttons and more detailed explanations of the above process.

## Credits

### Code

-   The full-screen hero image code came from this [StackOverflow post](https://stackoverflow.com)

-   [Bootstrap4](https://getbootstrap.com/docs/4.4/getting-started/introduction/): Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.

-   [MDN Web Docs](https://developer.mozilla.org/) : For Pattern Validation code. Code was modified to better fit my needs and to match an Irish phone number layout to ensure correct validation. Tutorial Found [Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel#Pattern_validation)

### Content

-   All content was written by the developer.

-   Psychological properties of colours text in the README.md was found [here](http://www.colour-affects.co.uk/psychological-properties-of-colours)

### Media

-   All Images were created by the developer.

### Acknowledgements

-   My Mentor for continuous helpful feedback.

-   Tutor support at Code Institute for their support.

### Version control

#### V1.0 Initial Commit
#### V1.1 Added africa header image, country html page and README template
#### V1.2 Added google fonts, Jquery, fontawesome scripts, added navbar and header container
#### V1.3 Added two containers home page for Information box and Map box
#### V1.4 Added second and third row boxes for table graphs, search and contacts boxes
#### V1.5 Updated for background body color, text color and font weight
#### V1.6 Added country html page, container boxes for images, map, graphs, search and contact details
#### V1.7 Added country name header styling on country html page
#### V1.8 Added Leaflet and Mapbox link and JS scripts
#### V1.9 Update with private restricted Mapbox access token
#### V2.0 Amended africa map size with box size on index page
#### V2.1 Added map js for country map on country html
#### V2.2 Added Leaflet and Mapbox link and JS to country html
#### V2.3 Moved country map to new country js file
#### V2.4 Set up individual js files for africa and country maps
#### V2.5 Add js for country code output to outputs html
#### V2.6 Added js query for World Bank API for capital city and lat long
#### V2.7 Amended wb http queries to https to reduce CORS issue
#### V2.8 Added GET for wb population data and write to output html
#### V2.9 Added GET for wb gdp data and write to output html
#### V3.0 Added chart js chart for population in output html
#### V3.1 Switched mapbox access token for charts and updated for bootstrap scripts
#### V3.2 Revised script order for navbar menu to work on small screen
#### V3.3 Added second chart for country GDP on outputs html page
#### V3.4 Added default mapbox access token to africa and country maps
#### V3.5 Added contact boxes on html pages and linked emailjs function
#### V3.6 Moved emailjs scripts to head of index and country pages
#### V3.7 Added abuja image and updated css styles for image box
#### V3.8 Added total pop and gdp graphs to index html
#### V3.9 Split total and country charts into two js files
#### V4.0 Added dropdown country search box on home page with css and js
#### V4.1 Added js code to push world bank api labels and data into graphs on country page
#### V4.2 Amended get and chart function on charts js page to load graphs on web load
#### V4.3 Added country code input for urls on main js file
#### V4.4 Removed 'toFixed' in mainjs file
#### V4.5 Added wb capital city url to country map js
#### V4.6 Amended map generate function to auto update from url lat long
#### V4.7 Added wb api url to flag js to write country info to country html
#### V4.8 Added country code to js pages to update flag for country
#### V4.9 Added country names to search dropdown list
#### V5.0 Amended const to one input on charts js to change country details output
#### V5.1 Moved country code call to codecall js and made function names unique
#### V5.2 Split chart js into popchart js and gdpchart js
#### V5.3 Reordered gdpchart js and popchart js in country page
#### V5.4 Render fix for charts in mobile safari using resize class in css (test)
#### V5.5 Added IE Edge meta tag to headers
#### V5.6 Removed V5.4 resize for mobile, placed graph canvas in div
#### V5.7 ChartsJS into divs, namnso img to png, maps to z-index 1
#### V5.8 Updated for header image on three html pages
#### V5.9 Function added to move country code for onclick function
#### V6.0 New getcountries js to extract country code for load and test
#### V6.1 Load index and country page script links
#### V6.2 Update index and country html scripts
#### V6.3 Additions to total graphs on home page
#### V6.4 Added World Bank CSV total pop/gdp, fed data to graphs totalcharts js
#### V6.5 Fix header image issue dropping down on index and country detail pages
#### V6.6 Update contact form and first write on country menu selection
#### V6.7 Moved contact form box to contact page from index and country pages
#### V6.8 Updated contact form entry boxes to include tel no. and second name
#### V6.9 Updates to information text on home page
#### V7.0 Updated total graphs for WB MEA and SSF data
#### V7.1 Update to information text on home page
#### V7.2 Further update to information text on home page
#### V7.1 Update menucode js menu link for country selection
#### V7.2 Modal box addded to contact form
#### V7.3 Removed switch and loadfunction from menucode js
#### V7.4 Update getCountries js to load country selecton
#### V7.5 Added source references for data and charts
#### V7.6 Add reset function for contact form submission
#### V7.7 Add carousel feature for sizing
#### V7.8 Add padding to reference for data sources
#### V7.9 Revise getCountries js code for country selection
#### V8.0 Remove HTML space breaks in code (&#8203)
#### V8.1 Amend to getCountry code for country search
#### V8.2 Style changes on carousel
#### V8.3 Add access control allow origin in request header getCountries js
#### V8.4 Resize carousel images for header
#### V8.5 Add countryStats js for country page API stats and search boxes centered
#### V8.6 Rework Africa Pop and GDP totals, Update country summary box with totals
#### V8.7 Amend function code in countryStats js
#### V8.8 Add World Population and GDP data to home page graphs
#### V8.9 Remove World Data from graphs due scale incompatible, add pop pie chart
#### V9.0 Add population and gdp pie charts to country page
#### V9.1 Add top five populaton data to pie chart country page
#### V9.2 Add top five GDP data to pie chart country page
#### V9.3 Set min-height on info-box styling to always fit narrative
#### V9.4 Resize header image, add footer content and style
#### V9.5 Resize header image, amend footer content and style
#### V9.6 Resize header image, resize information box home and country pages
#### V9.7 Style changes to country page charts and header image change
#### V9.8 Remove padding on top five country charts
#### V9.9 Rationalise pop/gdp -> countryGraphs,home graphs -> totalcharts, stats -> countryStats
#### V10.0 Add API for World Land POP GDP Stats -> worldStats
#### V10.1 Add API for Region Land stats -> regionStats
#### V10.2 Add land size pie chart -> regionstats for home page
#### V10.3 Add land size country pie -> country page
#### V10.4 Add top 10 country land sizes pie chart -> country page
#### V10.5 Amend footer text and copy to country and contact page, remove carousel indicator and controls
#### V10.6 Amend footer and search box text, amend top 10 country pie chart computation
#### V10.7 Fixed pie chart results to 2 decimal places
#### V10.8 Update all graphs and pie charts to fontFamily "Exo"
#### V10.9 Update all graphs and pie charts to fontColor black fontsize 15
#### V11.0 Revert graph and pie charts to default fontsize for mobile screens
#### V11.1 Rename csv files, redesign world region pie chart for land size
#### V11.2 Update world land size narrative on home page
#### V11.3 Add meta tag for CSP
#### V11.4 Removed meta tag for CSP
#### V11.5 Update mapbox scripts and links
#### V11.6 Amend country redirection from menu for Github
#### V11.7 Add line item in drop down for first country in getCountries.js
#### V11.8 Amend country code for country selection and page selection
#### V11.9 Amend pop up window code for country selection in getCountries.js
#### V12.0 Amend pop up code for /
#### V12.1 Amend API request name in setRequestHeader getCountries.js
#### V12.2 Amend spelling mistake for Url
#### V12.3 Amend push address URL
#### V12.4 Amend to lowercase for location file name
#### V12.5 Amend country tag to country.html?country=NG
#### V12.6 Remove padding on country line graphs
#### V12.7 Reduce image size for carousel
#### V12.8 Remove surplus images, update country page link in navbar
#### V12.9 Remove padding on charts -> totalCharts.js, country page link on outputs
#### V13.0 Add Landsize 'IF' function for Sudan and South Sudan
#### V13.1 Amend country page for test 'IF' Sudan South Sudan landsize
#### V13.2 Initialise getDataLandSize function on test page
#### V13.3 Add IF statement for Sudan South Sudan country stats country page
#### V13.4 Amend getCountriesvtest.js to getCountries.js page for countries page
#### V13.5 Update text in README file
#### V13.6 Tidy HTMl code structure with FreeFormatter
#### V13.7 Update text in README file
#### V13.8 Update text and image in README file
#### V13.9 Update text in README file
#### V14.0 Update text in README file
#### V14.1 Update text README, retract cloudfare CDN jquery script
