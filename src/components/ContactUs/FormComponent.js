import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "../Button";
import { useFormik } from "formik";
import * as yup from "yup";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "./styles";

//ეს validation schema ეგრევე გადმოვიტანე formik ის doc იდან სადაც აღწერს როგორ დავაინტერგიროთ formik mui project ში.ამავდროულად yup ს აქ სხვადასხვა validation მეთოდები ამ defoult ის გარდა ამიტომ შეგილია ისინი წამოიღო რომელიც მოგინდება დოქებიდან
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  fullName: yup.string().required("Name is required"),
  message: yup.string().min(20, "Too short!"),
});

const FormComponent = () => {
  //initial values
  const formik = useFormik({
    initialValues: {
      email: "",
      fullName: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(`Email: ${values.email} from ${values.fullName}`);
    },
  });

  return (
    //ეს ჰენდლერიც როგორც doc ებშია ისე ეგრევე გადმოვიტანე
    <form onSubmit={formik.handleSubmit}>
      <Box sx={styles.input}>
        <TextField
          placeholder="Full name"
          //---------------- ეს მონიშნული ნაწილი ეგრევე გადმოვიტანე formik ის doc იდან სადაც textfield ებს ორივეს ქონდაც მოცემული prop ები.თუმცა doc ებში label prop ი და type prop იც იყო მარა არ გადმომიტანია.ოღნდ ცხადად ნიშანდობლივია რო just კიარ ვაკოპირებ ამავედროს ვარგებ ჩვენ ამბავს
          id="fullName"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          error={formik.touched.fullName && Boolean(formik.errors.fullName)}
          helperText={
            formik.touched.fullName && formik.errors.fullName
              ? formik.touched.fullName && formik.errors.fullName
              : " "
          }
          //---------------------
          InputProps={{ style: { fontSize: "16px" } }}
          sx={styles.textField}
        />
        <TextField
          placeholder="Email address"
          //---------------- ეს მონიშნული ნაწილი ეგრევე გადმოვიტანე formik ის doc იდან სადაც textfield ებს ორივეს ქონდაც მოცემული prop ები.თუმცა doc ებში label prop ი და type prop იც იყო მარა არ გადმომიტანია.ოღნდ ცხადად ნიშანდობლივია რო just კიარ ვაკოპირებ ამავედროს ვარგებ ჩვენ ამბავს
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          // აქ მოდიფიკაციას ვუკეთებთ ამ კოდს რადგან როდესაც ამოედება ქვემოდან ტექსტი რო email is required მაგალითად,აწევს ამ techfield ოდნავ ზემოთ ხოდა დარჩება მეორე  text field დი  ასიმეტრიულიი.ამიტომ იქ emty string s ს დავამატებთ პახოდუ თუ ერორი იქნება
          helperText={
            formik.touched.email && formik.errors.email
              ? formik.touched.email && formik.errors.email
              : " "
          }
          //----------------------------------------------------------------
          InputProps={{ style: { fontSize: "16px" } }}
          sx={styles.textField}
        />
      </Box>
      <TextareaAutosize
        minRows={6}
        //---------------- ეს მონიშნული ნაწილი ეგრევე გადმოვიტანე formik ის doc იდან სადაც textfield ებს ორივეს ქონდაც მოცემული prop ები.თუმცა doc ებში label prop ი და type prop იც იყო მარა არ გადმომიტანია.ოღნდ ცხადად ნიშანდობლივია რო just კიარ ვაკოპირებ ამავედროს ვარგებ ჩვენ ამბავს
        id="message"
        name="message"
        value={formik.values.message}
        onChange={formik.handleChange}
        error={formik.touched.message && Boolean(formik.errors.message)}
        helperText={formik.touched.message && formik.errors.message}
        //--------------------------------------------------
        placeholder="write message"
        style={styles.textareaAutosize}
      />
      <Button type={"submit"}>
        send us message <ArrowForwardIosIcon />
      </Button>
    </form>
  );
};

export default FormComponent;
