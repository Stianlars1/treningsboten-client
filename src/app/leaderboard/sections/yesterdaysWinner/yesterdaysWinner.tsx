import { ScoreAndUserType } from "@/types";
import Image from "next/image";
import { getEmoji } from "../../leaderboardContainer";

export const YesterdaysWinner = ({
  yesterdaysWinner,
}: {
  yesterdaysWinner: ScoreAndUserType[] | null;
}) => {
  if (!yesterdaysWinner) {
    return;
  }

  const user = yesterdaysWinner[0];
  const emoji = getEmoji(0);
  return (
    <section className="featured-item">
      <h2>Gårsdagens vinner</h2>

      <ul>
        <li key={user.userId}>
          <span className={`winner-emoji`}>{emoji}</span>
          <Image
            src={user.images.image_48}
            alt={user.displayName}
            width={30}
            height={30}
            className="user-image"
          />
          {user.displayName} - {user.score}
        </li>
      </ul>
    </section>
  );
};
