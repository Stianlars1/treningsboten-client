import { ScoreAndUserType } from "@/types";
import { getEmoji } from "../leaderboard";

export const TopPerformersAllTime = ({
  data,
}: {
  data: ScoreAndUserType[];
}) => {
  return (
    <section className="top-performers-all-time">
      <h2>Top Performers - All time </h2>
      <ul>
        {data.map((user: ScoreAndUserType, index: number) => {
          const emoji = getEmoji(index);
          return (
            <li key={user.userId}>
              {emoji} {user.displayName}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
