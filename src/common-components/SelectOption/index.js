import React from "react";
import PropTypes from "prop-types";

import OptionItem from "./OptionItem";

const SelectOption = ({ items }) => {
  if (!items) return [];

  return items.map((option, idx) => (
    <OptionItem key={idx} data-role="option">
      {option.login}
    </OptionItem>
  ));
};

SelectOption.propTypes = {
  option: PropTypes.object,
};

export default SelectOption;
