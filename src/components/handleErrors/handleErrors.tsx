import { ErrorResponse } from "@/types";

export const HandleErrors = ({ errors }: { errors: ErrorResponse }) => {
  console.log("type..", typeof errors.details);
  if (errors) {
    return (
      <div className="error-card">
        <h2 className="error-card__title">Something went wrong</h2>
        {!errors.details && <p>{errors.message}</p>}

        {errors.details && (
          <ul className="error-card__ul">
            {/* {errors.details &&   Array && errors.details.map((detail: string) => (
              <li className="error-card__ul__li-error" key={detail}>
                {detail}
              </li>
            ))} */}
          </ul>
        )}
      </div>
    );
  }
  return null;
};
