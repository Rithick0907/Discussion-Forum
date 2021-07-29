import { Form, Formik } from "formik";

import React from "react";

const FormContainer = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    {() => <Form>{children}</Form>}
  </Formik>
);

export default FormContainer;
