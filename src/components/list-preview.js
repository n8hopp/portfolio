import * as styles from "../styles/preview.css";
import ObjPreview from "./obj-preview";
import { Link } from "gatsby";
import React from "react";

function ListPreview(props) {
  return (
    <div className={styles.root}>
      {props.name && <h2 className={styles.headline}>{props.name}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <ObjPreview {...node} isInList />
            </li>
          ))}
      </ul>
    </div>
  );
}

ListPreview.defaultProps = {
  name: "",
  nodes: [],
};

export default ListPreview;