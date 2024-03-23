"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getAuth = async () => {
  return cookies().get("auth");
};

export const logOut = async () => {
  cookies().delete("auth");
  return redirect("/");
};
