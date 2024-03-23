"use client";

import { Button } from "@/components/ui/buttons/defaultButton/button";
import Image from "next/image";
import { useFormState, useFormStatus } from "react-dom";
import "./_css/page.css";
import { authenticate } from "./actions";

export default function Page() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <main className="main-page">
      <Image
        src={"/treningsboten.png"}
        alt="Image of treningsboten"
        aria-hidden={true}
        width={200}
        height={200}
      />
      <h1>Velkommen til Treningsboten </h1>
      <div className="logg-inn-container">
        <div className="form-header">
          <h2>Logg inn</h2>
          <p>
            Skriv inn din kanal-id (channel ID) i feltet nedenfor, etterfulgt av
            din unike Token
          </p>
        </div>
        <form className="form-container shadow" action={dispatch}>
          <div className="input-wrapper">
            <label htmlFor="channel">Channel ID</label>
            <input
              className="form-input shadow-sm"
              type="text"
              name="channel"
              id="channel"
              placeholder="Skriv inn ID-en til kanalen din"
              required
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="token">Token</label>

            <input
              className="form-input shadow-sm"
              type="password"
              name="token"
              id="token"
              placeholder="Skriv inn din unike token"
              required
            />
          </div>
          <LoginButton />
        </form>

        {errorMessage?.message && (
          <div className="error-container">
            <p>{errorMessage.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      loading={pending}
      type="submit"
      width="100%"
      className="logg-inn-knapp"
    >
      Logg inn
    </Button>
  );
};
