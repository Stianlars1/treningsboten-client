"use server";
import { AuthentificationResponse, FetchChannelData, Results } from "@/types";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  channel: z
    .string({
      required_error: "Please enter a channel id",
    })
    .min(1, "Please enter a channel id"),
  token: z
    .string({
      required_error: "Please enter a valid token",
    })
    .min(1, "Please enter a valid token"),
});

export const fetchChannelData = async (
  _currentState: unknown,
  formData: FormData
): Promise<FetchChannelData> => {
  const validatedFields = schema.safeParse({
    channel: formData.get("channel"),
    token: formData.get("token"),
  });

  if (!validatedFields.success) {
    const channelError = validatedFields.error.flatten().fieldErrors.channel;
    const tokenError = validatedFields.error.flatten().fieldErrors.token;
    const fieldErrors =
      channelError && tokenError
        ? [...channelError, ...tokenError]
        : channelError || tokenError;
    return {
      isError: true,
      error: {
        message: "Validation failed with unauthorized access",
        details: fieldErrors,
      },
      isSuccess: false,
      isLoading: false,
      channelData: undefined,
    };
  }

  const channel = validatedFields.data.channel;
  const token = validatedFields.data.token;

  try {
    const response = await getChannelData(channel, token);
    return {
      channelData: response,
      isSuccess: true,
      isError: false,
      isLoading: false,
    };
  } catch (e: any) {
    let errorMessage = e.message || "An unknown error occurred";
    if (e instanceof TypeError) {
      errorMessage = "Network error or invalid response";
    }

    return {
      isError: true,
      isLoading: false,
      error: { message: errorMessage },
      isSuccess: false,
      channelData: undefined,
    };
  }
};

// C06GX53DMU2
// stian
export const getChannelData = async (
  channel: string,
  token: string
): Promise<Results> => {
  console.log("== getChannelData ==");

  const res = await fetch(
    `https://treningsboten.com/api/channel?channelId=${channel}&token=${token}`
  );
  if (res.status === 403) {
    throw new Error("Unauthorized access");
  }

  if (res.status === 404) {
    throw new Error("Channel not found");
  }
  if (!res.ok) {
    throw new Error("Something went wrong. Please try again later.");
  }
  const data = (await res.json()) as Results;

  return data;
};

export async function authenticate(_currentState: unknown, formData: FormData) {
  console.log("running ");
  const channel = formData.get("channel");
  const token = formData.get("token");

  try {
    const authResponse = await fetch(
      `https://treningsboten.com/api/auth?channelId=${channel}&token=${token}`
    );
    if (authResponse.status === 403) {
      throw new Error("Unauthorized access");
    }

    if (authResponse.status === 404) {
      throw new Error("Channel not found");
    }
    if (!authResponse.ok) {
      throw new Error("Something went wrong. Please try again later.");
    }

    if (authResponse.status === 200) {
      const auth: AuthentificationResponse = await authResponse.json();
      cookies().set(
        "auth",
        JSON.stringify({
          channel,
          token,
          authenticated: auth.authentification,
          authToken: auth.authToken,
          channelId: auth.channelId,
          channelName: auth.channelName,
        })
      );
    }
  } catch (error: any) {
    if (error instanceof TypeError) {
      return {
        message: "Network error or invalid response (VPN?)",
      };
    }
    if (error) {
      switch (error.message) {
        case "Unauthorized access":
          return { message: "Unauthorized access" };
        case "Channel not found":
          return { message: "Channel not found" };
        case "fetch failed":
          return { message: "Channel not found" };
        default:
          return { message: "An unknown error occurred" };
      }
    }
    throw error;
  }

  const redirectUrl = `/leaderboard`;
  redirect(redirectUrl);
}
