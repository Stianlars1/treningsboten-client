"use client";

import { logOut } from "@/app/leaderboard/actions";
import { useState } from "react";
import { Button } from "../defaultButton/button";

export const LogOutButton = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Button
      className="logg-ut-knapp"
      loading={loading}
      loadingText="Logger ut"
      onClick={async () => {
        setLoading(true);
        await logOut();
        setLoading(false);
      }}
    >
      Logg ut
    </Button>
  );
};
