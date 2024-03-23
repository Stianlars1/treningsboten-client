import { LogOutButton } from "@/components/ui/buttons/logout/logOutButton";
import { Results } from "@/types";
import "./css/leaderboard.css";
import { MonthlySummary } from "./monthlySummary/monthlySummary";
import { TopPerformersAllTime } from "./topPerformersAllTime/topPerformersAllTime";

export const Leaderboard = ({ data }: { data: Results }) => {
  return (
    <>
      <div className="leaderboard">
        <header className="leaderboard__header">
          <h1>Leaderboard</h1>
          <p>{data.channelName}</p>
          <LogOutButton />
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
