# Mars Mission Frontent
The User Facing frontend for Mars Mission.
Integration Site: [here](http://mars-mission-integration.s3-website.eu-west-2.amazonaws.com/).
Production Site: Coming Soon

## Setup
Just clone this repo.
Then run `npm install` to install dependencies

## Running the app
Run `npm start` to start the application in dev mode.

## Running the tests.
*All lines of code should be either tested, or explicitly marked as not requiring tests*

Run the tests with the following:
`npm run test` runs tests once.
`npm run test:coverage` runs tests including coverage
`npm run test:watch` runs tests, and keeps running them whenever there are updates to the code.

### Marking a file as excluded from test coverage
Add it to the `"collectCoverageFrom"` section of `package.json`.

### Marking a function as excluded from test coverage
```typescript
/* istanbul ignore next */
function myFunc() {
  console.log("This function is not included in test coverage");
}
```