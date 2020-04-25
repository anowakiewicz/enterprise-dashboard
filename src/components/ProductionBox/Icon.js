import React from "react";

import { Refresh } from "@material-ui/icons";
import IconWrap from "./IconWrap";

const Icon = ({ name }) => {
  return (
    <IconWrap>
      <Refresh />
    </IconWrap>
  );
};

export default Icon;
