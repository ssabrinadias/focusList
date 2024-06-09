import React from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

interface FormValues {
  title: string;
  description: string;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
});

const initialValues: FormValues = {
  title: "",
  description: "",
};

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "auto",
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  errorText: {
    color: "red",
    marginBottom: theme.spacing(1),
  },
}));

const TaskCreate: React.FC = () => {
  const classes = useStyles();

  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className={classes.form}>
          <Field
            as={TextField}
            className={classes.textField}
            name="title"
            label="Title"
            variant="outlined"
            error={errors.title && touched.title}
            helperText={errors.title && touched.title && errors.title}
          />
          <Field
            as={TextField}
            className={classes.textField}
            name="description"
            label="Description"
            multiline
            rows={4}
            variant="outlined"
            error={errors.description && touched.description}
            helperText={
              errors.description && touched.description && errors.description
            }
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
            Add Task
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskCreate;
