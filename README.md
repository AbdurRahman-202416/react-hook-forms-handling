# React Hook Form Login Example

This project is a simple **login form** built using **React** and **React Hook Form**. The aim of this project is to demonstrate how to efficiently handle forms in React using React Hook Form, including form validation, dynamic form handling, and managing form states.

## Learning Objectives

- **React Hook Form Basics**: Understanding how to register and validate form fields.
- **Form Validation**: Implementing client-side validation for username and password fields.
- **Dynamic Form Handling**: Using `watch()`, `setValue()`, and `getValues()` to manage form field states.
- **Form Submission**: Handling form submission and displaying error messages.
- **User Feedback**: Showing dynamic feedback, such as disabling the submit button during form submission or showing validation errors.

## Key Features of React Hook Form Used

### 1. **Basic Validation**
React Hook Form makes it simple to add validation to form fields. For this project, the username and password fields are validated for the following conditions:
- **Username**: Required, minLength of 4 characters, maxLength of 8 characters.
- **Password**: Required, minLength of 6 characters.

### 2. **Real-Time Field Tracking**
By using the `watch()` method, the username field is dynamically displayed, showing real-time updates as the user types.

### 3. **Manual Form Value Management**
Using `setValue()`, I can autofill the username field for demonstration purposes. This method allows developers to manually set form values in React Hook Form.

### 4. **Error Handling**
React Hook Form provides a streamlined way of handling errors. When the form fields don't meet the validation criteria, the corresponding error message is displayed beneath the field.

### 5. **Form Submission**
The form submission is managed by the `handleSubmit()` function provided by React Hook Form. After the form is submitted, the data is displayed in an alert box and the form is reset using the `reset()` function.

#   r e a c t - h o o k - f o r m s - h a n d l i n g  
 