import React, { ReactNode } from "react";
import { Formik, Form, FormikConfig } from "formik";
import * as Yup from "yup";

interface FormProps<T> extends Omit<FormikConfig<T>, "children"> {
    children: ReactNode;
}

const CustomForm = <T extends object>({ children, ...formikConfig }: FormProps<T>) => {
    console.log(formikConfig);
    return (
        <Formik<T> {...formikConfig}>
            <Form>{children}</Form>
        </Formik>
    );
};

export default CustomForm;
