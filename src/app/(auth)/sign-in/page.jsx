// app/sign-in/page.jsx
export const metadata = {
  title: "Sign In",
  description: "Sign in to MI Store",
};

import SignInClient from "./SignInClient";

export default function SignInPage() {
  return <SignInClient />;
}
