import React from "react";

import MouseParticles from "react-mouse-particles";

export default function Mouse() {
  return (
    <>
      <MouseParticles
        g={1}
        color={["#0A8D54", "#F3FF00", "#F60505"]}
        cull="col,image-wrapper"
      />
      ,{" "}
    </>
  );
}
