import React from 'react';
import StripCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GqJ3yCgyYcRRbWw6bs5StTm5KeF7cJTHTOaEBPkiMLJvMfwBFjbHSdhJpYpn7qgRHStmBoSAzAzHXTq2yVVr8tF00YywZloQz';

    const onToken = token => {
        console.log(token);
        alert('payment successful');
    };

    return (
        <StripCheckout
            label='Pay Now'
            name='vibe clothing'
            billingAddress
            shippingAddress
            image='http://www.w3.org/2000/svg'
            description={`total price is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
         />
    );
};

export default StripeCheckoutButton;