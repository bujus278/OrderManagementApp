import React, { useState } from "react";
import { Customer } from "../../../graphql/generated/schema";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Form, Formik } from "formik";
import { Grid, Typography } from "@mui/material";
import OmTextField from "../../../components/FormsUI/OMTextField";
import OmSelect from "../../../components/FormsUI/OmSelect";
import OmSubmitButton from "../../../components/FormsUI/OmSubmitButton";
import countries from "../../../data/countries.json";
import { Label } from "@material-ui/icons";
import { validate } from "graphql";

interface CustomerFormProps {
    customer: Customer
}

const FORM_VALIDATION = yup.object().shape({
    firstNmae: yup.string()
        .required("First name is required"),
    lastName: yup.string()
        .required("Last name is required"),
    contactNumber: yup.string()
        .required("Contact number is required"),
    email: yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    addressLine1: yup.string()
        .required("Addres line1 is required"),
    addressLine2: yup.string(),
    city: yup.string()
        .required("City is required"),
    state: yup.string()
        .required("State is required"),
    country: yup.string()
        .required("Country is required"),
});

export default function CustomerForm({ customer }: CustomerFormProps) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const INITIAL_FORM_STATE = {
        id: customer.id,
        firstName: customer.firstName || '',
        lastName: customer.lastName || '',
        contactNumber: customer.contactNumber || '',
        email: customer.email || '',
        addressLine1: customer.address?.addressLine1 || '',
        addressLine2: customer.address?.addressLine2 || '',
        city: customer.address?.city || '',
        state: customer.address?.state || '',
        country: customer.address?.country || '',
    };

    function addOrUpdateCustomerDetails(value: any) {
        console.log(value);
    }

    return (
        <Container>
            <div>
                <Formik
                    initialValues={INITIAL_FORM_STATE}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={addOrUpdateCustomerDetails} >
                    <Form placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <OmTextField name="firstName" otherProps={{ label: "First Name" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField name="lastName" otherProps={{ label: "Last Name" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField name="email" otherProps={{ label: "Email" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField name="contactNumber" otherProps={{ label: "Contact number" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>Address</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField name="addressLine1" otherProps={{ label: "Address line1" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField name="addressLine2" otherProps={{ label: "Address line2" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField name="city" otherProps={{ label: "City" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField name="state" otherProps={{ label: "State" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <OmSelect
                                    name="country"
                                    otherProps={{ label: "Country" }}
                                    options={ countries } />
                            </Grid>
                            <Grid item xs={12}>
                                <OmSubmitButton otherProps={{}} >
                                    {!customer.id ? "Add New Customer" : "Update customer"}
                                </OmSubmitButton>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
        </Container>

    );
}
