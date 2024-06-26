import { getChannelData } from "@/app/actions";
import { LeaderboardAuthentication } from "@/types";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getAuth } from "./actions";
import { LeaderboardContainer } from "./leaderboardContainer";

export const LeaderBoardPage = async () => {
  const authentication = await getAuth();
  if (!authentication) {
    redirect("/");
  }
  const auth: LeaderboardAuthentication = await JSON.parse(
    authentication.value
  );

  const data = await getChannelData(auth.channelId, auth.authToken);
  const leaderboardData = { ...data, channelName: auth.channelName };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LeaderboardContainer data={leaderboardData} />
    </Suspense>
  );
};
