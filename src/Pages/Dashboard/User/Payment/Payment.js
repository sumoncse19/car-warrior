import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { Box, Container } from '@mui/material';

const Payment = () => {
    const [state, setState] = useState(0);

    return (
        <Container>
            <input
                type='number'
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <PayPalButton
                options={{
                    clientId: "AawI0YNPpRPbTlw95LfVVTB6mhc28JK-zp6oTTfGEez7Vuhz_8g1Jn1LNoHTrK8iL6SOlp9Ld6Nwrmn3",
                    currency: "USD",
                }}
                amount={state}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                    alert("Transaction completed by " + details.payer.name.given_name);

                    console.log({ details, data })
                }}
            />
        </Container>
    );
};

export default Payment;