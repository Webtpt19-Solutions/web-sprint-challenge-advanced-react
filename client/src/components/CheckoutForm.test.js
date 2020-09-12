import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument();

});

test("form shows success message on submit with form details",  () => {
    render(<CheckoutForm />);

    const firstNameValue = 'John';
    const lastNameValue = 'Doe';
    const addressValue = '321 example lane';
    const cityValue = 'testerville';
    const stateValue = 'Maine';
    const zipValue = '42020';

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    const addressInput = screen.getByLabelText(/Address:/i);
    const cityInput = screen.getByLabelText(/City:/i);
    const stateInput = screen.getByLabelText(/State:/i);
    const zipInput = screen.getByLabelText(/Zip:/i);

    userEvent.type(firstNameInput, firstNameValue);
    userEvent.type(lastNameInput, lastNameValue);
    userEvent.type(addressInput, addressValue);
    userEvent.type(cityInput, cityValue);
    userEvent.type(stateInput, stateValue);
    userEvent.type(zipInput, zipValue);
    
    expect(firstNameInput).toHaveValue(firstNameValue);
    expect(lastNameInput).toHaveValue(lastNameValue);
    expect(addressInput).toHaveValue(addressValue);
    expect(cityInput).toHaveValue(cityValue);
    expect(stateInput).toHaveValue(stateValue);
    expect(zipInput).toHaveValue(zipValue);

    const submitButton = screen.getByTestId('checkout');
    userEvent.click(submitButton);

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument();

});
