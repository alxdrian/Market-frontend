# Market

## The application

This is an e-commerce which allow us to search products and filter them by name, categories, prices and discounts.

## The technologies

This app was built to complete a challenge that requires the creation of a client app developed only with Vanilla JS and styles with CSS. Also, the frontend communicates to a REST API built as part of this challenge with an existing MYSQL database.

## The functionality

The app renders the products of the API when an event was listened to on the page. In index.js, there are some event listeners which call to render.js, which contains a script that changes some parts of the view(index.html) with components(./components like ProductCard.js)depending on the event and their filters collected.

The store.js file saves the filters collected when the user submits the forms of name, prices, and discounts, or clicks in the tab of categories. With this info, the services(productFetch.js) can connect to the backend, after the page was changed with render.js.

## Development

This repository which can cloned to run on your local machine. Only needs to a live server.

## Production

This app was deployed with Vercel: https://market-frontend-alxdrian.vercel.app/