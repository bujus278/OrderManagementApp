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
import { formatDatePicker } from "../../../util/DateFormater";
import OmDatePicker from "../../../components/FormsUI/OmDatePicker";
import OmCheckBox from "../../../components/FormsUI/OmCheckBox";
import statuses from "../../../data/statuses.json";
import { tr } from "date-fns/locale";

interface OrderFormProps {
    order: Order
}

const FORM_VALIDATION = yup.object().shape({
    orderDate: yup.date()
        .required("Order date is required"),
    description: yup.string()
        .required("Description is required"),
    depositAmount: yup.number()
        .required("Deposit amount is required"),
    otherNotes: yup.string(),
    totalAmount: yup.number()
        .required("Total amount is required"),
    isDelivery: yup.boolean(),
    status: yup.string()
        .required("Status is required")
});

export default function OrderForm({ order }: OrderFormProps) {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const INITIAL_FORM_STATE = {
        id: order.id,
        customerId: order.customerId,
        orderDate: formatDatePicker(order.orderDate ?? new Date()),
        description: order.description || '',
        depositAmount: order.depositAmount || 0,
        otherNotes: order.otherNotes || '',
        totalAmount: order.totalAmount || 0,
        isDelivery: order.isDelivery || false,
        status: order.status || Status.Draft,
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
                    <Form>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <OmSelect
                                    name="status"
                                    otherProps={{ label: "Order status" }}
                                    options={statuses} />
                            </Grid>
                            <Grid item xs={12}>
                                <OmDatePicker name="orderDate" otherProps={{ label: "Order date" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField name="description" otherProps={{ label: "Description" }} />
                            </Grid>
                            <Grid item xs={12}>
                                <OmTextField
                                    name="otherNotes"
                                    otherProps={{
                                        label: "Other notes",
                                        multiline: true,
                                        rows:4
                                    }} />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>
                                    Pricing information
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField name="totalAmount" otherProps={{ label: "Total amount" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmTextField name="depositAmount" otherProps={{ label: "Deposit amount" }} />
                            </Grid>
                            <Grid item xs={6}>
                                <OmCheckBox
                                    name="isDelivery"
                                    otherProps={{ label: "Delivery included" }}
                                    label={"Include Delivery"}
                                    legend={"Include delivery"} />
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
