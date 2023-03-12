import {  CustomForm, CustomInput, Button, Label, Error,} from "../styles/StyledComponents";
import { useFormik } from "formik";
import * as Yup from "yup";

const VALID_COLOR_REGEX = /^[A-Fa-f0-9]*$/;

const Form = ({ showUserData, handleUserValues }) => {
  const getInitialValues = () => ({
    name: "",
    color: "",
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        name: Yup.string()
          .required("Este campo es obligatorio.")
          .min(3, "El nombre debe tener al menos 3 caracteres.")
          .trim(
            "El nombre no debe contener espacios en blanco al principio ni al final."
          ),
        color: Yup.string()
          .required("Este campo es obligatorio.")
          .length(6, "El código de color debe tener 6 caracteres.")
          .matches(
            VALID_COLOR_REGEX,
            "El código de color debe estar compuesto por números de 0 a 9 y/o letras de A a F."
          ),
      })
    );

  const onSubmit = (values) => {
    //control values
    console.log(values);
    showUserData();
    handleUserValues(values);
    handleReset();
  };

  const { values, setFieldValue, errors, handleSubmit, handleReset } =
    useFormik({
      initialValues: getInitialValues(),
      validationSchema: getValidationSchema(),
      validateOnChange: false,
      validateOnBlur: false,
      onSubmit,
    });

  return (
    <CustomForm id="user-form" onSubmit={handleSubmit}>
      <h1>¿Cuál es tu color?</h1>
      <Label>Nombre</Label>
      <CustomInput
        name="name"
        type="text"
        placeholder="Ingresa tu nombre"
        onChange={(e) => setFieldValue(e.target.name, e.target.value)}
        value={values["name"]}
      />
      {errors["name"] && <Error>{errors["name"]}</Error>}

      <Label>Color</Label>
      <CustomInput
        name="color"
        type="text"
        placeholder="Ingresa color en formato HEX (Ej. AC1224)"
        onChange={(e) => setFieldValue(e.target.name, e.target.value)}
        value={values["color"]}
      />

      {errors["color"] && <Error>{errors["color"]}</Error>}

      <Button from="user-form" type="submit">
        Enviar
      </Button>
    </CustomForm>
  );
};

export default Form;