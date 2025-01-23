import React from "react";
import { Grid, Typography } from "@mui/material";
import { Order, useGetOrdersQuery } from "../../../graphql/generated/schema";
import OrderList from "./OrderList";
import OmAlert from "../../../components/elements/OmAlert";
import OmLoading from "../../../components/elements/OmLoading";

export default function OrdersDashboard() {
    const { data: ordersData, loading, error } = useGetOrdersQuery();

    if (loading) {
        return <OmLoading />
    }

    if (error || !ordersData) {
        return <OmAlert message={'Could not load orders data'} />
    }

    const orders = ordersData.orders as Order[]
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography component="div" variant='h5' display='block' gutterBottom align='center'>
                    Order List
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <OrderList orders={orders} />
            </Grid>
        </Grid>
    )
}
