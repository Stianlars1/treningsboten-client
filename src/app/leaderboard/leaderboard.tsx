import { Results } from "@/types";
import "./css/leaderboard.css";
import { MonthlySummary } from "./monthlySummary/monthlySummary";
import { TopPerformersAllTime } from "./topPerformersAllTime/topPerformersAllTime";

export const Leaderboard = ({ data }: { data: Results }) => {
  //     MonthlySummaryType
  // ScoreAndUserType
  return (
    <>
      <div className="leaderboard">
        <header className="leaderboard__header">
          <h1>Leaderboard</h1>
          <p>{data.channelName}</p>
          <p>scores of the channel</p>
        </header>

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
