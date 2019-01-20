<h1 align="center">Nodejs Ebook Sales App</h1>

<img src="public/node-ebook-app.png" style="max-width:100%" align="center" alt="ebook-app" />

## Built With
* [NodeJS](https://nodejs.org)
* [EJS](https://ejs.co/)
* [Stripe API](https://stripe.com/)
* [Bootstrap 4](https://getbootstrap.com/)




## Installation

```
$ git clone https://github.com/Marie-Carrere/nodejs-ebook-app.git
$ cd nodejs-ebook-app
$ npm install
$ npm start
```

### Create a config/keys_dev.js file and add:

````
module.exports = {
  stripePublishableKey:'_YOUR_OWN_PUBLISHABLE_KEY_',
  stripeSecretKey:'_YOUR_OWN_SECRET_KEY_'
}
````

Go to `http://localhost:5000`.