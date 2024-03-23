import { MonthlySummaryType, ScoreAndUserType } from "@/types";
import Image from "next/image";
import { ReactElement } from "react";
import { getEmoji } from "../leaderboard";

export const MonthlySummary = ({
  monthlySummary,
}: {
  monthlySummary: MonthlySummaryType;
}): ReactElement => {
  return (
    <section className="monthly">
      <h2>Månedlig oppsummering</h2>

      {Object.keys(monthlySummary).map((dateKey: string) => {
        const summary = monthlySummary[dateKey];
        const date = new Date(dateKey);
        const month = date.toLocaleString("nb", { month: "long" });
        const formattedMonth = month.charAt(0).toUpperCase() + month.slice(1);
        return (
          <>
            <div>
              <h3>{formattedMonth}</h3>
              <ul>
                {monthlySummary && (
                  <>
                    {summary.map((user: ScoreAndUserType, index: number) => {
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
            </div>
          </>
        );
      })}
    </section>
  );
};
