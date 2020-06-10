import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../routes";

export default () => {
  return (
    <Menu>
      <Link route="/">
        <a className="item">E-B App</a>
      </Link>

      <Menu.Menu position="right">

      </Menu.Menu>
    </Menu>
  );
};
