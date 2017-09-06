# R3PI-Technical-Test
R3PI React home coding exercice

## Installation

This project was generated on the base of [create-react-app](https://github.com/facebookincubator/create-react-app). To install it, just type:

```
npm i
```

## Usage

```
$ npm run build   Build the application for production use
$ npm start       Start the server in development mode (port 3000)
$ npm run test    Launch the tests using jest in watch mode
$ npm run lint    Launch eslint on the /src folder
```

## Information

This project was created for a Front-End Test for [R3PI](https://r3pi.io/).

The overall architecture is solid & well tested but I learnt [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes) on the spot so don't take example of the css implementation.

This application is responsive and should be compatible with most modern browsers.

## Know bugs

The bottom bar can have a small shift to the right (from the center) when the scrollbar is visible and that the width of the screen is superior to 1024px.
To correct it, we should detect the presence of the scrollbar, doing hacky stuff to measure its width (depends on browsers) and reduce that with a `calc` from the `translateX`.