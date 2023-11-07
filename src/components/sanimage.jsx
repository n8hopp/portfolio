import React from 'react';
import Image from "gatsby-plugin-sanity-image"

const SanImage = (picture) => (
  <Image
    // pass asset, hotspot, and crop fields
    {...picture}
    // tell Sanity how large to make the image (does not set any CSS)
    width={500}
    // style it how you want it
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  />
)

export default SanImage