import React from "react";
import {
  faNode,
  faJsSquare,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const projects = [
  {
    img: {
      url: "https://i.ibb.co/QJZPt3G/serenity-now.png",
      alt: "Serenity Now! - A Seinfeld Trivia Game",
    },
    title: "Serenity Now!",
    blurb: "A Seinfeld Trivia Game",
    stack: [
      {
        name: "JavaScript",
        icon: <FontAwesomeIcon icon={faJsSquare} />,
      },
      {
        name: "VueJs",
        icon: <FontAwesomeIcon icon={faVuejs} />,
      },
      {
        name: "Ruby on Rails",
        icon: <FontAwesomeIcon icon={faGem} />,
      },
    ],
    description: ["test", "testing", "tester"],
    links: {
      site: "serenitynow.com",
      github: "github.com",
    },
  },
  {
    img: {
      url: "https://i.ibb.co/5K108xH/isl-Hor-portfolio.png",
      alt: "Island Horizons - an Animal Crossing blog",
    },
    title: "Island Horizons",
    blurb: "An Animal Crossing blog",
    stack: [
      {
        name: "JavaScript",
        icon: <FontAwesomeIcon icon={faJsSquare} />,
      },
      {
        name: "React",
        icon: <FontAwesomeIcon icon={faReact} />,
      },
    ],
    description: ["test", "testing", "tester"],
    links: {
      site: "islandhorizons.com",
      github: "github.com",
    },
  },
  {
    img: {
      url: "https://i.ibb.co/RcLvrZG/ygg-portfolio.png",
      alt: "You Go, Girl! - An Inspirational Quotes Generator",
    },
    title: "You Go, Girl!",
    blurb: "An Inspirational Quotes Generator",
    stack: [
      {
        name: "JavaScript",
        icon: <FontAwesomeIcon icon={faJsSquare} />,
      },
      {
        name: "React",
        icon: <FontAwesomeIcon icon={faReact} />,
      },
      {
        name: "NodeJS",
        icon: <FontAwesomeIcon icon={faNode} />,
      },
    ],
    description: ["test", "testing", "tester"],
    links: {
      site: "serenitynow.com",
      github: "github.com",
    },
  },
];
