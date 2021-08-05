import React from "react";
import Button from "@material-ui/core/Button";

export default function CouponButton(props) {
    const {
        couponButtonOnClick
    } = props
    return (
        <Button variant="contained" color="primary" disableElevation onClick={couponButtonOnClick}>
            クーポンを発行する
        </Button>
    );
}
