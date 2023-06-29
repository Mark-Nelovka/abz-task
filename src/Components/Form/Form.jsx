import { useState } from "react";
import { schemaStepOne } from "../../helpers/validationSchema";
import { Formik, Form } from "formik";
import { useField } from "formik";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

export const FormQ = () => {
  const [initialState, setInitialState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    country: "",
    experience: "",
  });

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialState}
      validationSchema={schemaStepOne}
      onSubmit={handleSubmit}
    >
      <Form>
        <p>Working with POST request</p>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            label="Name"
          />
        </FormControl>
        <TextField
          error
          id="outlined-error"
          label="Name"
          defaultValue="Hello World"
        />

        <MyTextInput
          name="email"
          type="email"
          id="email"
          placeholder="Email"
          alt="Your email"
        />

        <MyTextInput
          name="tel"
          type="number"
          id="Phone"
          alt="Your phone number"
          placeholder="0123456789"
        />
      </Form>
    </Formik>
  );
};

export const MyTextInput = ({ name, type, placeholder, id, src, alt }) => {
  const [field, meta] = useField({ name, type, placeholder });
  return (
    <div>
      <label htmlFor={id}>
        <div>
          <img src={src} alt={alt} />
        </div>

        <input
          {...field}
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </label>
      {/* {meta.touched && meta.error ? (
        <S.ErrorMessage>{meta.error}</S.ErrorMessage>
      ) : null} */}
    </div>
  );
};
