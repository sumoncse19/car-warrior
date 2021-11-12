import React, { useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { Box, Card, Container, Typography } from '@mui/material';

const Payment = () => {
    const [state, setState] = useState(0);

    return (
        <Container>
            <Card sx={{ mb: 3 }}>
                <Typography variant='h4' color='success.main' sx={{fontWeight: 700}}>
                    Pay Here...
                </Typography>
                <br />
                <label>Deposite Amout($): </label>
                <input
                    style={{ marginBottom: '10px' }}
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
            </Card>
        </Container>
    );
};

export default Payment;