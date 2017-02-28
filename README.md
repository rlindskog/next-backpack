<div align="center">
<img height="100" alt="screen shot 2016-10-25 at 2 37 27 pm" src="https://cloud.githubusercontent.com/assets/13041/19686250/971bf7f8-9ac0-11e6-975c-188defd82df1.png">
<img height="100" alt="screen shot 2016-10-25 at 2 37 27 pm" src="https://cloud.githubusercontent.com/assets/4060187/21872211/318795e8-d835-11e6-8376-bea370605361.png">
</div>

Out of the box, this example includes 

 1. Universal es2015 JS
 2. React...
 3. Client Side Routing
 4. Server Side Rendering
 5. Code Splitting
 6. Tree Shaking
 6. Hot Module Replacement
 7. A REST API
 8. Live API Reload
 9. Configurable Webpack endpoints
 10. Configurable Babel

with no boilerplate, no log spam, human readable errors all around, while being production ready!

All thanks to [Next.js](https://github.com/zeit/next.js) and [Backpack](https://github.com/palmerhq/backpack)!

## Setup ##
    git clone https://github.com/rlindskog/next-backpack/
    cd next-backpack
    npm install

## Run in Development##
    npm run dev

## Build/Run for production##
    npm run build
    npm start

## Why not just Next.js? ##
According to a FAQ in the [Next.js Docs](https://github.com/zeit/next.js)

> **How do I fetch data?**
> 
> It’s up to you. getInitialProps is an async function (or a regular function that returns a Promise). It can retrieve data from anywhere.

and according to a the [Backpack docs](https://github.com/palmerhq/backpack)
> You should use create-react-app or Next.js for your frontend and then
> build your backend with Backpack.

The reason this combo is so great is because Next acts as the Page server and Backpack acts as an API server.  They both follow extremely similar ideologies.

Check out [Next.js](https://github.com/zeit/next.js) and [Backpack](https://github.com/palmerhq/backpack) docs to learn more.
