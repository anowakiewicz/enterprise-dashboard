import React from "react";

import { Print, CloudDownload } from "@material-ui/icons";

import Link from "./Link";
import IconWrap from "./IconWrap";

const Button = ({ children, name }) => {
  const buttonIcon = (name) => {
    return name === "print" ? <Print /> : <CloudDownload />;
  };

  return (
    <Link>
      {children}
      <IconWrap>{buttonIcon(name)}</IconWrap>
    </Link>
  );
};

export default Button;
