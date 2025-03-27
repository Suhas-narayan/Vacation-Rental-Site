import { auth } from "@/lib/firebase";

export const verifyUser = async (token) => {
  return await auth.verifyIdToken(token);
};
