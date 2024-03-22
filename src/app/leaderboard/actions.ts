import { cookies } from "next/headers";

export const getAuth = async () => {
  return cookies().get("auth");
};
