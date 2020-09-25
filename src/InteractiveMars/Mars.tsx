/* TO-DO 
- Make marker onClick zoom less janky (or disable alltogether)
- Label markers with rover names without having to hover? (ThreeJS text geometry?)
/* eslint-disable */
import React, {FunctionComponent} from "react";
import ReactGlobe, {Marker} from "react-globe";
import {markers} from "./Markers"
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import styles from "./Mars.module.scss";


//Renders tooltips on hover (changing function name breaks tooltips!)

export function markerTooltipRenderer(marker: Marker): string {
  /*eslint-disable-next-line*/
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
        <section className={styles.marsContainer}>
            {/* Globe and globe props, refer to documentation @ https://react-globe.netlify.app/*/}
            <ReactGlobe
              //focus={null} should prevent globe zoom on marker click but it doesn't :(
              focus={null}
              //Make sure height & width props are not percentage based, else globe will infinitely resize
              height="60vh"
              globeTexture="/images/Mars_Texture.jpg"
              markers={markers}
              options={options}
              globeCloudsTexture={null}
              width="100vw"
            />
        </section>
  );
};

