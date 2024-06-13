import React, { useEffect } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import { useToast } from "../../context/NotifyContext/useToast";
import useCreateTask from "../../hooks/useCreateTask";

import { IFormValues } from "./interface";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Título é obrigatório"),
  description: Yup.string().required("Descriçao é obrigatória"),
});

const initialValues: IFormValues = {
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
  const navigate = useNavigate();
  const classes = useStyles();
  const { showToast } = useToast();
  const { mutate, isSuccess, isError } = useCreateTask();
  const handleSubmit = (
    values: IFormValues,
    { resetForm }: FormikHelpers<IFormValues>
  ) => {
    mutate(values);
    resetForm();
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      showToast("Nova Tarefa criada!");
    }
  }, [isSuccess, navigate, showToast]);

  useEffect(() => {
    if (isError) {
      showToast("Erro ao criar a task!");
    }
  }, [isError, showToast]);

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
            label="Titulo da tarefa"
            variant="outlined"
            error={errors.title && touched.title}
            helperText={errors.title && touched.title && errors.title}
            data-testid="title_field"
          />
          <Field
            as={TextField}
            className={classes.textField}
            name="description"
            label="Descrição"
            multiline
            rows={4}
            variant="outlined"
            error={errors.description && touched.description}
            helperText={
              errors.description && touched.description && errors.description
            }
            data-testid="description_field"
          />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Criar nova Tarefa
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskCreate;
