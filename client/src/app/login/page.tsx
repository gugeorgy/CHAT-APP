import UserSignInForm from '@/components/auth/signin';
import { Box, Button, Heading, Link, Text } from '@/components/ui';

/**
 * LoginPage is a component that renders the login page of the Chat App.
 * It includes a heading, a UserSignInForm for users to sign in, and a link to the sign up page.
 * The UserSignInForm includes a text indicating users to sign up if they don't have an account,
 * and a button to submit the form.
 *
 * @returns {JSX.Element} - The LoginPage component.
 */
export default function LoginPage(): JSX.Element {
  return (
    <Box>
      <Heading>Login Chat App</Heading>
      <UserSignInForm>
        <Text>
          Don't have an account?{' '}
          <Link color="teal.500" href="/signup">
            Sign up!
          </Link>
        </Text>
        <Button colorScheme="teal" type="submit">
          Sign In
        </Button>
      </UserSignInForm>
    </Box>
  );
}
