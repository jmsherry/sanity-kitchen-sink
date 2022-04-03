import React from "react";
import { Link } from "gatsby";

const CTAction = ({ kind, title, link }) => {
  switch (kind) {
    case "button":
      return <button className="">{title}</button>;
    case "link":
      return <Link to={link}>{title}</Link>;
    default:
      console.log(`Kind ${kind} not known in CTAction component`);
      return null;
  }
};

export default CTAction;
