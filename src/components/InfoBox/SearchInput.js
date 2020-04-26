import React, { Component } from "react";
import { inject } from "mobx-react";
import { Formik } from "formik";
import * as Yup from "yup";

import Form from "../../common-components/Form";
import Input from "../../common-components/Input";
import ButtonSubmit from "../../common-components/ButtonSubmit";

import { Search } from "@material-ui/icons";

@inject("userDataStore")
class SearchInput extends Component {
  render() {
    return (
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, { setSubmitting }) => {
          this.props.userDataStore.changeUserToSearchFor(values.name);
          setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("Required"),
        })}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <Form onSubmit={handleSubmit}>
              <Input
                id="name"
                placeholder="Enter username"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name && touched.name ? 1 : 0}
              />
              <ButtonSubmit type="submit" disabled={isSubmitting}>
                <Search />
              </ButtonSubmit>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default SearchInput;
