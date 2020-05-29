import * as React from "react";
import { useSnackbar } from "notistack";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import { TextFormField } from "../../components/FormFields";
import { httpService } from "../../utils/httpService";
import { FieldError } from "../../shared/constants/interfaces";

import "./styles.scss";
import { validEmailSchema } from "../../shared/validations";

interface Values {
  email: string;
}

const SendConfirmationAgain: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    values: Values,
    { setSubmitting, setErrors }: FormikHelpers<Values>
  ): Promise<void> => {
    setSubmitting(true);
    try {
      const { data } = await httpService.post("/send-confirmation", values);
      if (data) {
        enqueueSnackbar(data.message, { variant: "success" });
      }
    } catch ({ data }) {
      setErrors(
        data.reduce((acc: any, { path, message }: FieldError) => {
          acc[path] = message;
          return acc;
        }, {})
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={"send-confirmation-container"}>
      <Formik
        validationSchema={validEmailSchema}
        initialValues={{ email: "" }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Typography variant={"h3"}>Send confirmation to email</Typography>
            <Field
              name={"email"}
              label={"Email"}
              component={TextFormField}
              variant="outlined"
            />
            <Button
              disabled={isSubmitting}
              type="submit"
              variant={"contained"}
              fullWidth
              color={"primary"}
            >
              Send confirmation
            </Button>
            <div style={{ paddingTop: 20 }}>
              <Link to={"/login"}>Login now</Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SendConfirmationAgain;
