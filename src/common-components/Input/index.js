import styled from "styled-components";

const Input = styled.input`
  width: 70%;
  max-width: 250px;
  height: 25px;
  outline: none;
  color: #3b3c3d;
  padding: 0 5px;
  background-color: white !important;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: ${(props) =>
    props.error ? "1px solid #fb5050" : "1px solid #bcc2c5"};
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-transition: "color 9999s ease-out, background-color 9999s ease-out";
    -webkit-transition-delay: 9999s;
  }
`;

export default Input;
