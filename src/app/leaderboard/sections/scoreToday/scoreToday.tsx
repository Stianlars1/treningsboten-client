import { ScoreTodayType } from "@/types";
import Image from "next/image";
import { getEmoji } from "../../leaderboardContainer";

export const ScoreToday = ({
  scoreToday,
}: {
  scoreToday: ScoreTodayType[] | null;
}) => {
  if (!scoreToday || !scoreToday[0]) {
    return;
  }

  return (
    <section className="featured-item">
      <h2>Dagens oversikt</h2>

      <ul>
        {scoreToday && (
          <>
            {scoreToday.map((user: ScoreTodayType, index: number) => {
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
          </>
        )}
      </ul>
    </section>
  );
};
