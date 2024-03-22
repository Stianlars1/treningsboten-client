"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "./actions";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <main>
      <form action={dispatch}>
        <input
          type="text"
          name="channel"
          id="channel"
          placeholder="Channel ID"
          required
        />
        <input
          type="text"
          name="token"
          id="token"
          placeholder="Your special token"
          required
        />
        <LoginButton />
      </form>
      <p>{errorMessage?.message}</p>
    </main>
  );
}

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <button aria-disabled={pending} type="submit">
      {pending ? "Please wait" : "Login"}
    </button>
  );
};
