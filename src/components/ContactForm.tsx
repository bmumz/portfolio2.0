import React, { FC, useEffect } from "react";
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
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";

const useStyles = makeStyles((theme: Theme) => ({
  cardRoot: {
    [theme.breakpoints.down("md")]: {
      width: "90vw",
    },
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
  const { enqueueSnackbar } = useSnackbar();

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

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
          Let's Connect!
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
          message: Yup.string().max(1500).required("Message is required."),
        })}
        onSubmit={(values: FormValues, { resetForm }) => {
          fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: encode({ "form-name": "contact", ...values }),
          }).then(() => {
            try {
              enqueueSnackbar("Your inquiry has been submitted!", {
                variant: "success",
              });
              resetForm();
            } catch (err) {
              console.error(err);
              enqueueSnackbar("There was an error submitting the form.", {
                variant: "error",
              });
            }
          });
        }}
      >
        {({
          errors,
          status,
          handleBlur,
          handleChange,
          handleSubmit,
          touched,
          values,
          setStatus,
          isSubmitting,
        }): JSX.Element => {
          const handleCheckForm = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            setStatus("verifying");
            handleSubmit(event);
          };

          useEffect(() => {
            if (status === "verifying" && !isSubmitting && errors) {
              enqueueSnackbar("Please review the form and fix any errors.", {
                variant: "error",
              });
            }
          }, [errors, status]);

          return (
            <>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                component={Form}
                onSubmit={handleCheckForm}
                data-netlify={true}
                method="post"
                name="contact"
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
                          paddingTop: (theme) => theme.spacing(3),
                          paddingRight: {
                            lg: "1rem",
                          },
                        }}
                      >
                        <TextField
                          id="name"
                          name="name"
                          label="name"
                          variant="filled"
                          fullWidth
                          inputProps={{
                            sx: {
                              color: (theme) => theme.palette.text.secondary,
                            },
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
                          paddingTop: (theme) => theme.spacing(3),
                        }}
                      >
                        <TextField
                          id="email"
                          name="email"
                          label="email"
                          variant="filled"
                          fullWidth
                          inputProps={{
                            sx: {
                              color: (theme) => theme.palette.text.secondary,
                            },
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
                      sx={{ paddingTop: (theme) => theme.spacing(3) }}
                    >
                      <TextField
                        id="subject"
                        name="subject"
                        label="subject"
                        variant="filled"
                        fullWidth
                        inputProps={{
                          sx: {
                            color: (theme) => theme.palette.text.secondary,
                          },
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
                      sx={{ padding: (theme) => theme.spacing(3, 0) }}
                    >
                      <TextField
                        id="message"
                        name="message"
                        label="message"
                        variant="filled"
                        fullWidth
                        multiline
                        rows={4}
                        inputProps={{
                          sx: {
                            color: (theme) => theme.palette.text.secondary,
                          },
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
