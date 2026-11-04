import { headers } from "next/headers"
import { auth } from "./auth"

export const getTokenFromServer = async() =>{
  const jwtTokent = await auth.api.getToken({
      headers: await headers()
    })
    const token = jwtTokent.token
    return token
}