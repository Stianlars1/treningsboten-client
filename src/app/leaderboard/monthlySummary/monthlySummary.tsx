import { MonthlySummaryType, ScoreAndUserType } from "@/types";
import { ReactElement } from "react";
import { getEmoji } from "../leaderboard";

export const MonthlySummary = ({
  monthlySummary,
}: {
  monthlySummary: MonthlySummaryType;
}): ReactElement => {
  return (
    <section className="monthly">
      <h2>Monthly summary</h2>

      {Object.keys(monthlySummary).map((dateKey: string) => {
        const summary = monthlySummary[dateKey];
        const date = new Date(dateKey);
        const month = date.toLocaleString("default", { month: "long" });
        return (
          <>
            <div>
              <h3>{month}</h3>
              <ul>
                {monthlySummary && (
                  <>
                    {summary.map((user: ScoreAndUserType, index: number) => {
                      const emoji = getEmoji(index);

                      return (
                        <li key={user.userId}>
                          {emoji} {user.displayName} - {user.score}
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
