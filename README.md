# GHR

## Instructions for Development Setup

First, let's install NodeJs and NPM.

Then clone the reposisory 
    
    $ git clone https://github.com/sc15aj/conference-hebergement-repas.git

Once done go in the folder and install all dependencies
    
    $ cd conference-hebergement-repas
    $ npm install
    $ npm install --prefix client

Before running the application, you need to create a `dev.js` file inside the `config` folder containing the keys used for development.

There is a template:

```js
// config/dev.js

module.exports = {
    mongoURI: 'mongodb://ADDRESS:PORT/DB'
};
```

Now, you are ready to run the app!

    $ npm run dev


