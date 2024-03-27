# The Good Guys Front End Coding Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

TailwindCSS is used for styling

SVG icons are from [https://iconmonstr.com](https://iconmonstr.com)

The site is responsive and content appropriately shifts based on screen size

The UI has been broken up into reusable components, which allows for faster development and easier maintenance in the future

## Deployed site

Site has also been deployed on vercel and can be viewed at [https://good-guys-take-home.vercel.app/](https://good-guys-take-home.vercel.app/)


## Running
```
npm install
npm run start
```

## Brief 

Create a simple React app which fetches product review data and displays it on the page. Review data file is attached.

Should display a list of reviews, each showing the rating number (stars not required), review title, review text and customer name.

Should display the first 10 reviews on load with a ‘Load More’ button at the bottom to display an additional 10 reviews each time it's clicked.

Add a dropdown at the top to sort the displayed results by:

- newest (date published)
- highest rating
- lowest rating

Styling can be very basic or non-existent. The assessment is primarily on the javascript (or typescript) code rather than css/html.

**Task**
- Feel free to use Create React App or similar as a starting point and use any libraries and tools using npm or yarn.
- Place the reviews.json file in the /public folder.
- You may use plain javascript or Typescript.