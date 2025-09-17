import SignUpClient from "./SignUpClient";

export const metadata = {
    title: "Sign Up",
    description: "Sign up to MI Store",
};

export default function page() {
  return (
    <div>
      <SignUpClient/>
    </div>
  )
}
