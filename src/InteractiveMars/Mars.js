/* TO-DO 
- Make marker onClick zoom less janky (or disable alltogether)
- Label markers with rover names without having to hover? (ThreeJS text geometry?)
- Make enter button look pretty
*/

import React, { useState } from "react";
import ReactGlobe from "react-globe";
import { Markers } from "./Markers.tsx";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";


//Function to render onHover tooltips
function markerTooltipRenderer(marker) {
  return `ROVER: ${marker.rover} `;
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

//Globe export

export function Mars() {
  // Get marker data from Markers.js
  const markers = Markers;

  return (
    <section>

        {/* Globe and globe props, refer to documentation @ https://react-globe.netlify.app/*/}
        <ReactGlobe
          //focus={null} should prevent globe zoom on marker click but it doesn't :(
          focus={null}
          //Make sure height & width props are not percentage based, else globe will infinitely resize
          height="100vh"
          //Mars texture, maybe download and keep part of files incase site unreachable at any point?
          globeTexture="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b7029c3-9717-4658-9066-11c30aa24029/dcsauye-ba810e63-20e3-4ae9-a73c-9201ed87e67d.png/v1/fill/w_1280,h_640,q_80,strp/mars_texture_map__rare_version__by_oleg_pluton_dcsauye-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD02NDAiLCJwYXRoIjoiXC9mXC85YjcwMjljMy05NzE3LTQ2NTgtOTA2Ni0xMWMzMGFhMjQwMjlcL2Rjc2F1eWUtYmE4MTBlNjMtMjBlMy00YWU5LWE3M2MtOTIwMWVkODdlNjdkLnBuZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.X7rDRGm_uGFDxKyzB7nkfQuSxXmT87Hhg7CsW79lJTI"
          markers={markers}
          options={options}
          width="100vw"
        />
    </section>
  );
}

