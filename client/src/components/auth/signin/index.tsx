'use client';

import { type UserSignInSchema, userSignInSchema } from '@/libs/schemas';
import { FormControl, FormErrorMessage, FormLabel, Input, type InputProps } from '../../ui';
import AuthForm from '../form/AuthForm';

/**
 * UserSignInProps is a type that defines the props for the UserSignInForm component.
 */
type UserSignInProps = {
  /**
   * Optional additional JSX elements to include in the form.
   */
  children?: React.ReactNode;
};

/**
 * UserSignInForm is a component that provides a form for user sign in.
 * It utilizes the AuthForm component for form state and validation.
 * The form fields and validation rules are defined by the userSignInSchema object.
 * The form submission is handled by the handleFormSubmission function.
 *
 * @param {Object} props - The properties to configure the form.
 * @param {React.ReactNode} props.children - Optional additional JSX elements to include in the form.
 * @returns {JSX.Element} - The UserSignInForm component.
 */
export default function UserSignInForm({ children }: UserSignInProps): JSX.Element {
  const formFields: InputProps[] = [
    {
      id: 'username',
      type: 'text',
      autoComplete: 'username',
      placeholder: 'Enter username',
    },
    {
      id: 'password',
      type: 'password',
      placeholder: 'Enter password',
    },
  ];

  /**
   * handleFormSubmission is an async function that simulates form submission with a 2 second delay.
   * In a real-world application, this function would send the form data to a server for authentication.
   *
   * @param {UserSignInSchema} _data - The form data.
   */
  const handleFormSubmission = async (_data: UserSignInSchema) => {
    await new Promise(resolver => setTimeout(resolver, 2000));
  };

  return (
    <AuthForm
      onSubmit={handleFormSubmission}
      schema={userSignInSchema}
      renderFormField={({ fieldName, formErrors, formRegister }) => {
        return (
          <FormControl key={fieldName} isInvalid={!!formErrors[fieldName]}>
            <FormLabel htmlFor={fieldName} textTransform="capitalize">
              {fieldName}
            </FormLabel>
            <Input {...formRegister(fieldName)} {...formFields.find(f => f.id === fieldName)} />
            <FormErrorMessage>
              {formErrors[fieldName] ? (formErrors[fieldName].message as string) : null}
            </FormErrorMessage>
          </FormControl>
        );
      }}
    >
      {children}
    </AuthForm>
  );
}
