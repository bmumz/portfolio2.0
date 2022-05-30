import React, { FC } from "react";
import {
  faNode,
  faJsSquare,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TechnologyIcon: FC<TechnologyIcon> = ({ technology, className }) => {
  if (technology === "React") {
    return <FontAwesomeIcon icon={faReact} className={className} />;
  } else if (technology === "Javascript") {
    return <FontAwesomeIcon icon={faJsSquare} className={className} />;
  } else if (technology === "Ruby on Rails") {
    return <FontAwesomeIcon icon={faGem} className={className} />;
  } else if (technology === "Node.js") {
    return <FontAwesomeIcon icon={faNode} className={className} />;
  } else if (technology === "Vue.js") {
    return <FontAwesomeIcon icon={faVuejs} className={className} />;
  }
};

export default TechnologyIcon;
