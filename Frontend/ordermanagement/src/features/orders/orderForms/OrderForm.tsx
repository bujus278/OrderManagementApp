import React, { useState } from "react";
import { Order } from "../../../graphql/generated/schema";
import * as yup from 'yup';
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { Form, Formik } from "formik";
import { Grid, Typography } from "@mui/material";
import OmTextField from "../../../components/FormsUI/OMTextField";
import OmSelect from "../../../components/FormsUI/OmSelect";
import OmSubmitButton from "../../../components/FormsUI/OmSubmitButton";
import countries from "../../../data/countries.json";
import { Status } from "../../../graphql/generated/schema";
import { Label } from "@material-ui/icons";
import { validate } from "graphql";

interface OrderFormProps {
    order: Order
}

const FORM_VALIDATION = yup.object().shape({
    description: yup.string()
        .required("First name is required"),
    orderDate: yup.date()
        .required("Order date is required"),
    depositAmount: yup.number()
        .required("Deposit amount is required"),
    totalAmount: yup.number()
        .required("Total amount is required"),
    status: yup.string()
        .required("Status is required"),
    otherNotes: yup.string(),
    isDelivery: yup.boolean()
        .required("Delivery status is required")
});

export default function OrderForm({ order }: OrderFormProps) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const INITIAL_FORM_STATE = {
        id: order.id,
        status: order.status || '',
        description: order.description || '',
        otherNotes: order.otherNotes || '',
        orderDate: order.orderDate || Date.now(),
        depositAmount: order.depositAmount || '',
        totalAmount: order.totalAmount || '',
        isDelivery: order.isDelivery || false,
    };

    function addOrUpdateOrderDetails(value: any) {
        console.log(value);
    }

    return (
        <Container>
            <div>
                <Formik
                    initialValues={INITIAL_FORM_STATE}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={addOrUpdateOrderDetails} >
                    <Form placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <OmTextField name="description" otherProps={{ label: "Description" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField name="totalAmount" otherProps={{ label: "Total amount" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField name="depositAmount" otherProps={{ label: "Deposit amount" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmSelect
                                    name="status"
                                    otherProps={{ label: "Status" }}
                                    options={Status} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField name="orderDate" otherProps={{ label: "Order date" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField name="otherNotes" otherProps={{ label: "Other notes" }} />
                            </Grid>


                            <Grid item xs={12}>
                                <OmSubmitButton otherProps={{}} >
                                    {!order.id ? "Add New Order" : "Update order"}
                                </OmSubmitButton>
                            </Grid>
                        </Grid>
                    </Form>
                </Formik>
            </div>
        </Container>

    );
}
