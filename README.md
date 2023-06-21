# Testing a form component with React Testing Library

## Description:

This is an example of how we can you React testing library to test specific components while we mock some of their functions.

The Login component is basically a form with a function onSubmit received through props. It should call that function (with the appropriate username and password) when we type our username and password and then we click the submit button

You should run `npm test` in your console.

### We use a jest mock function

In order to check if the onSubmit was called with the username and password we provided, we mock this function and then assert if it was called with the right arguments:

- 📜 `jest.fn()`: https://jestjs.io/docs/en/mock-function-api
- 📜 `toHaveBeenCalledWith`:
  https://jestjs.io/docs/en/expect#tohavebeencalledwitharg1-arg2-
