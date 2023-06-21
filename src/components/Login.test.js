import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import Login from "./Login";

const buildLoginForm = (overrides) => {
  return {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    ...overrides,
  };
};

test("Submitting the form calls onSubmit with username and password", async () => {
  expect.assertions(1);

  const handleSubmit = jest.fn();

  render(<Login onSubmit={handleSubmit} />);

  const { username, password } = buildLoginForm();

  const usernameInputField = screen.getByLabelText(/username/i);
  const passwordInputField = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });

  await userEvent.type(usernameInputField, username);
  await userEvent.type(passwordInputField, password);

  await userEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalledWith({ username, password });
});
