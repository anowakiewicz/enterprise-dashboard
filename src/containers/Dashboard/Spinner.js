import styled from "styled-components";
import { BlurOn } from "@material-ui/icons";

const Spinner = styled(BlurOn)`
  width: 60px !important;
  height: 60px !important;
  animation: spinner 0.6s linear infinite;
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
