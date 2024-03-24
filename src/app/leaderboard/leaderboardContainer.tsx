import { LogOutButton } from "@/components/ui/buttons/logout/logOutButton";
import { Results } from "@/types";
import "./css/leaderboard.css";
import { MonthlySummary } from "./sections/monthlySummary/monthlySummary";
import { ScoreToday } from "./sections/scoreToday/scoreToday";
import { TopPerformersAllTime } from "./sections/topPerformersAllTime/topPerformersAllTime";
import { YesterdaysWinner } from "./sections/yesterdaysWinner/yesterdaysWinner";

export const LeaderboardContainer = ({ data }: { data: Results }) => {
  return (
    <>
      <div className="leaderboard">
        <header className="leaderboard__header">
          <h1>Leaderboard</h1>
          <p>{data.channelName}</p>
          <LogOutButton />
        </header>

        <div className="leaderboard__featured">
          <ScoreToday scoreToday={data.scoreToday} />
          <YesterdaysWinner yesterdaysWinner={data.winnerYesterday} />
        </div>

        <div className="hero">
          <MonthlySummary monthlySummary={data.monthlySummary} />
          <TopPerformersAllTime data={data.topPerformersAllTime} />
        </div>
      </div>
    </>
  );
};

export const getEmoji = (index: number) => {
  return index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";
};
