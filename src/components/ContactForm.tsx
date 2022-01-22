import React, { FC } from "react";
import {
  Card,
  CardContent,
  TextField,
  Grid,
  Divider,
  Typography,
  Theme,
  Button,
} from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    [theme.breakpoints.down("md")]: {
      width: "90vw",
    },
  },
  smallInputPadding: {
    [theme.breakpoints.up("md")]: {
      paddingRight: `${theme.spacing(2)} !important`,
    },
  },
  inputColor: {
    color: `${theme.palette.text.secondary} !important`,
  },
}));

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: FC = () => {
  const classes = useStyles();

  return (
    <Card raised className={classes.cardRoot}>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: 0,
        }}
      >
        <Typography variant="h4" color="secondary" sx={{ fontWeight: 500 }}>
          Contact Me
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{
            borderColor: (theme) => theme.palette.primary.main,
            borderBottomWidth: 3,
            width: "15%",
            marginTop: (theme) => theme.spacing(1),
            letterSpacing: (theme) => theme.spacing(0.25),
          }}
        />
      </CardContent>
      <Formik
        initialValues={{
          name: "",
          email: "",
          subject: "",
          message: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required("Name is required."),
          email: Yup.string()
            .email("Please provide a properly formatted email.")
            .required("Email is required."),
          subject: Yup.string().max(350).required("Subject is required."),
          message: Yup.string().max(1500).required(),
        })}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
        }): JSX.Element => {
          console.log(values);
          return (
            <>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                component={Form}
                onSubmit={handleSubmit}
              >
                <Grid container>
                  <>
                    <Grid
                      container
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={6}
                        sx={{
                          padding: (theme) => theme.spacing(2, 0),
                        }}
                        className={classes.smallInputPadding}
                      >
                        <TextField
                          id="name"
                          label="name"
                          variant="filled"
                          fullWidth
                          inputProps={{
                            className: classes.inputColor,
                          }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.name}
                          error={Boolean(touched.name && errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={12}
                        lg={6}
                        sx={{
                          padding: (theme) => theme.spacing(2, 0),
                        }}
                      >
                        <TextField
                          id="email"
                          label="email"
                          variant="filled"
                          fullWidth
                          inputProps={{
                            className: classes.inputColor,
                          }}
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          error={Boolean(touched.email && errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={12}
                      sx={{ padding: (theme) => theme.spacing(2, 0) }}
                    >
                      <TextField
                        id="subject"
                        label="subject"
                        variant="filled"
                        fullWidth
                        inputProps={{
                          className: classes.inputColor,
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.subject}
                        error={Boolean(touched.subject && errors.subject)}
                        helperText={touched.subject && errors.subject}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      lg={12}
                      sx={{ padding: (theme) => theme.spacing(2, 0) }}
                    >
                      <TextField
                        id="message"
                        label="message"
                        variant="filled"
                        fullWidth
                        multiline
                        rows={4}
                        inputProps={{
                          className: classes.inputColor,
                        }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.message}
                        error={Boolean(touched.message && errors.message)}
                        helperText={touched.message && errors.message}
                      />
                    </Grid>
                  </>
                </Grid>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button variant="contained" type="submit">
                    Send
                  </Button>
                </CardContent>
              </CardContent>
            </>
          );
        }}
      </Formik>
    </Card>
  );
};

export default ContactForm;
