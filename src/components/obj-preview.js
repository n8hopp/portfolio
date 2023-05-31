import { Link } from "gatsby";
import React from "react";

import { buildImageObj, getUrl} from "../lib/helpers";
import { GatsbyImage, getImage} from "gatsby-plugin-image"
import * as styles from "../styles/preview.css";

function ObjPreview(props) {
  return (
    <Link
      to={getUrl(props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {props.picture && props.picture.asset && (
          <GatsbyImage image={props.picture.asset.gatsbyImageData}></GatsbyImage>
        )}
      </div>
      <div>
        <h3>{props.name}</h3>
      </div>
    </Link>
  );
}

export default ObjPreview;