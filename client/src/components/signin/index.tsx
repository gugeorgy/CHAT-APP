'use client';

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
} from '@/components/ui';
import { type FieldValues, useForm } from 'react-hook-form';

/**
 * SignIn component is a form for user sign in.
 * It uses the useForm hook from react-hook-form to handle form state and validation.
 *
 * @returns JSX.Element - The SignIn component.
 */
export default function SignIn() {
  /**
   * The useForm hook is used to handle form state and validation. It returns an object with methods and state.
   */
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  /**
   * The onSubmit function is an async function that simulates form submission with a 2 second delay.
   */
  const onSubmit = async (_data: FieldValues) => {
    await new Promise(resolver => setTimeout(resolver, 2000));
  };

  /**
   * The form component consists of two FormControl components for username and password.
   * Each FormControl has a FormLabel, an Input and a FormErrorMessage.
   *
   * The Input component uses the register method from useForm to register itself in the form and to apply validation rules.
   *
   * The FormErrorMessage component displays the validation error message for the input field.
   *
   * A Text component displays a message and a link for navigation to the `signup` page.
   *
   * It also contains a Button component for form submission.
   *
   * @returns JSX.Element - The form component.
   */
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.username}>
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 5,
                message: 'Username must be at least 5 characters',
              },
            })}
          />
          <FormErrorMessage>
            {errors.username ? (errors.username.message as string) : null}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
          />
          <FormErrorMessage>
            {errors.password ? (errors.password.message as string) : null}
          </FormErrorMessage>
        </FormControl>
        <Text>
          Don't have an account?{' '}
          <Link color="teal.500" href="/signup">
            Sign up!
          </Link>
        </Text>
        <Button colorScheme="teal" isLoading={isSubmitting} type="submit">
          Sign In
        </Button>
      </Stack>
    </form>
  );
}
