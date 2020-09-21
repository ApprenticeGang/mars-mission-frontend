import React, {FunctionComponent} from "react";

// So this is a GIANT PAIN!
// 
// Under the hood the real 'react-globe' uses a thing called threejs.
// This is a JavaScript based WebGL library
// Unfortunately, that library is ES6 based and exports ES6 code.
//
// Why does it to that? Great Question! I have no idea :(
//
// What that means is that we have to transpile all that code into ES5 code when we build the project.
// We can do that just fine for a production build, as we are transpiling everything anyway...
// but during tests we can't really
// Jest generally (and understandably) assumes that node_modules won't need to be transpiled.
// You can override this with the 'transformIgnorePatterns' - but react-scripts don't support this :( 
// (and in any case it makes the tests much slower and causes other pain)
// So instead we've chosen to stub out these modules in the test.
// Whenever we import react-globe... we instead import this module.
// Its obviously not very functional... but that's fine for tests - after all we don't need to a third party library.
// This mocking is done in package.json in the moduleNameMapper section of the jest config.

/* eslint-disable */
const ReactGlobe: FunctionComponent<any> = () => {
    return <div>Stub Globe!</div>;
};

export interface Marker {
    [key: string]: any;
    coordinates: [number, number];
    rover: string;
    id: string;
    value: number;
    color?: string;
}

export default ReactGlobe;