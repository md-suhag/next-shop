import React from "react";
import {
  FUNDING,
  PayPalButtons,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";

interface PaypalButtonProps {
  amount: string;
  onSuccess: (details: any) => void;
}

const PayPalButton = ({ amount, onSuccess }: PaypalButtonProps) => {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID as string,
        currency: "USD",
      }}
    >
      <PayPalButtons
        fundingSource={FUNDING.PAYPAL}
        createOrder={(data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          if (actions.order) {
            return actions.order
              .capture()
              .then((details) => {
                onSuccess(details);
              })
              .catch((error) => {
                console.error("Error capturing order:", error);
              });
          } else {
            console.error("Order is undefined");
            return Promise.reject(new Error("Order is undefined"));
          }
        }}
      />
    </PayPalScriptProvider>
  );
};

export default PayPalButton;
