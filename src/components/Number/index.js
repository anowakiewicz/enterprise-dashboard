import React from "react";
import PropTypes from "prop-types";
import { intlShape, injectIntl } from "reacr-intl";

import Number from "./number";

const FormattedNumber = ({ value, opts, intl }) => (
  <Number>{intl.formattedNumber(value, opts)}</Number>
);

Number.propTypes = {
  value: PropTypes.string.isRequired,
  opts: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(FormattedNumber);
