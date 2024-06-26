import { ErrorBoundary } from "@/components/errorBoundary/errorBoundary";
import { LeaderBoardPage } from "./LeaderBoardPage";

export default async function Page() {
  return (
    <>
      <ErrorBoundary
        pageTitle="Leaderboard"
        fallback={<div>Failed to load leaderboard</div>}
      >
        <LeaderBoardPage />
      </ErrorBoundary>
    </>
  );
}
