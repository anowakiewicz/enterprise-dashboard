import React from "react";
import PropTypes from "prop-types";

import OptionItem from "./OptionItem";
import OptionLabel from "./OptionLabel";

const SelectOption = (props) => {
  return (
    <OptionItem data-role="option">
      <OptionLabel type="option" active={props.active} {...props.option}>
        {props.option.label}
      </OptionLabel>
    </OptionItem>
  );
};

SelectOption.propTypes = {
  option: PropTypes.object,
};

export default SelectOption;
