import { ScoreAndUserType } from "@/types";
import Image from "next/image";
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
          const emoji = index <= 2 ? getEmoji(index) : index + 1;

          return (
            <li key={user.userId}>
              <span
                className={`winner-emoji ${
                  index <= 2 ? "" : "emoji-text-format"
                }`}
              >
                {emoji}
              </span>
              <Image
                src={user.images.image_48}
                alt={user.displayName}
                width={30}
                height={30}
                className="user-image"
              />
              {user.displayName} - {user.score}
            </li>
          );
        })}
      </ul>
    </section>
  );
};
