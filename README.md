# GHR

## Instructions for Development Setup

First, let's install NodeJs and NPM using the Node Version Manager (NVM). To install `nvm`, see [here](https://github.com/creationix/nvm#install-script).

For development, we use the LTS version of node.

    $ nvm install ---lts

Now, you should have Node v8.X and npm v5.X installed. To verify, type:

    $ node --version
    $ nvm --version

To run the project in development mode, `yarn` is also needed:

    $ npm install yarn -g

Then clone the reposisory in the folder of your choice
    
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


