// "use client";
// import { FormContainer } from "@/components/formContainer/formContainer";
// import { HandleErrors } from "@/components/handleErrors/handleErrors";
// import { ErrorResponse, Results } from "@/types";
// import { useState } from "react";
// import { fetchChannelData } from "./actions";

// // async function getData() {
// //   const res = await fetch("https://api.example.com/...");
// //   // The return value is *not* serialized
// //   // You can return Date, Map, Set, etc.

// //   if (!res.ok) {
// //     // This will activate the closest `error.js` Error Boundary
// //     throw new Error("Failed to fetch data");
// //   }

// //   return res.json();
// // }

// export default function Home() {
//   const [channelData, setChannelData] = useState<Results | undefined>();
//   const [error, setError] = useState<ErrorResponse | undefined>();
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const handleChannelSearch = async (formData: FormData) => {
//     setIsLoading(true);
//     const { isSuccess, isError, isLoading, channelData, error } =
//       await fetchChannelData(formData);
//     console.log("data", channelData);
//     console.log("isError", isError);
//     console.log("error", error);
//     console.log("isSuccess", isSuccess);
//     setChannelData(channelData);
//     setError(error);
//     setIsLoading(isLoading);
//     //      const [state, formAction] = useFormState(createUser, initialState)
//   };
//   return (
//     <main>
//       <h1>Treningsboten</h1>
//       <FormContainer
//         isLoading={isLoading}
//         handleChannelSearch={handleChannelSearch}
//       />
//       {error && <HandleErrors errors={error} />}
//     </main>
//   );
// }
