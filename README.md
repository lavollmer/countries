# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

There are no assets for this challenge, as the country flags will be pulled from the [REST Countries API](https://restcountries.com) and you can use an icon font library for the icons.

### Continued development

1. Displaying API Data in Cards - I learned how to work better with API data and display on the frontend. I used useSTate for data, loading state and error handling and useEffect to fetch the data when the component mounts. I created a card component that is reusable to accept data as props. I mapped over the data and rendered the cards. I integrated the data into my app.
2. Syntax Erros - Missing intializer in const declaration. I received this error working on my Axios backend to frontend connection. Through this I realized my reusable card component needed to be a function, and not a const. In React, declaring a functional component vs. assigning an arrow function to a const variable revolves around preferences. The biggest difference is hoisting - when using a function component, it hoists it to the top of the file.
3. TypeError - data.map is not a function of App. This error involved declaring my data variable and useState. I realized that data should be an array and not an empty string when declaring. The map () method i s a standard JS array method use to iterate over array elements.
4. Fetching Data with Axios - Wrap Axios call within in async function and use await axios.get() to pause execution until the promise returns. Use a try...catch block for robust error handling.


### Useful resources

- [Vite Start Guide](https://vite.dev/guide/) - This is helped me install Vite with ReactJS for my project.
- [Google Fonts](https://www.w3schools.com/css/css_font_google.asp) - This helped me integrate Google Fonts into CSS language for matching the design portfolio requirements.
- [REST Countries API](https://restcountries.com/) - This is the API used for the project.
- [React Icons](https://react-icons.github.io/react-icons/search/#q=) - This provided the icons for the website.
- [CSS Box Shadow](https://www.w3schools.com/css/css3_shadows_box.asp) Box shadow property to create paper like cards.
- [Const vs Function Component](https://dev.to/ugglr/react-functional-components-const-vs-function-2kj9) - Explanation of const vs function component.
- [R](h) - This provided the icons for the website.
- [R](h) - This provided the icons for the website.

## Author

- Website - [Laura V](www.lauradeveloper.com)
- Frontend Mentor - [@lavollmer](https://www.frontendmentor.io/profile/lavollmer)
- Github - [@lavollmer](https://github.com/lavollmer)



