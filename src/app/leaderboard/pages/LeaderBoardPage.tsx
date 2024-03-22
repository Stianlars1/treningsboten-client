import { getChannelData } from "@/app/actions";
import { Leaderboard } from "@/pages/leaderboard/leaderboard";
import { LeaderboardAuthentication } from "@/types";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getAuth } from "../actions";

export const LeaderBoardPage = async () => {
  const authentication = await getAuth();
  if (!authentication) {
    redirect("/");
  }
  const auth: LeaderboardAuthentication = await JSON.parse(
    authentication.value
  );

  const data = await getChannelData(auth.channel, auth.token);
  const leaderboardData = { ...data, channelName: auth.authToken };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Leaderboard data={leaderboardData} />
    </Suspense>
  );
};
