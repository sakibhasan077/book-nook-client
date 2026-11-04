import { authClient } from "./auth-client";

export const getTokenFromClient = async () => {
  const { data: tokenData, error } = await authClient.token();
  const token = tokenData?.token;
  return token;
};
