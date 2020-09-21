/* TO-DO 
- Make marker onClick zoom less janky (or disable alltogether)
- Label markers with rover names without having to hover? (ThreeJS text geometry?)
*/

import React, {FunctionComponent} from "react";
import ReactGlobe, {Marker} from "react-globe";
import {markers} from "./Markers"
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

//Renders tooltips on hover (changing function name breaks tooltips!)

export function markerTooltipRenderer(marker: Marker): string {
  return `ROVER: ${marker.rover}`;
}

//Options for globe, more options found at https://react-globe.netlify.app/usage/options
const options = {
  markerTooltipRenderer,
  cameraAutoRotateSpeed: 0.8,
  cameraMaxPolarAngle: (Math.PI * 9) / 16,
  cameraMinPolarAngle: (Math.PI * 7) / 16,
  cameraRotateSpeed: 0.5,
  enableCameraAutoRotate: true,
  enableCameraRotate: true,
  enableCameraZoom: false
};

export const Mars: FunctionComponent = () => {
    return (
        <section>
            {/* Globe and globe props, refer to documentation @ https://react-globe.netlify.app/*/}
            <ReactGlobe
              //focus={null} should prevent globe zoom on marker click but it doesn't :(
              focus={null}
              //Make sure height & width props are not percentage based, else globe will infinitely resize
              height="100vh"
              globeTexture="/images/Mars_Texture.jpg"
              markers={markers}
              options={options}
              width="100vw"
            />
        </section>
  );
};

