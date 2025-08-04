import { NextRequest } from "next/server";
import { sign } from "./jwt";


export async function getIp(req: NextRequest) {
  let ip: string;
  if (req.headers.has('x-forwarded-for'))
    ip = req.headers.get('x-forwarded-for') as string;

  else if (req.headers.has('x-real-ip'))
    ip = req.headers.get('x-real-ip') as string;

  else ip = "unknown";

  return ip
}

export async function getSharedSecret(req: NextRequest) {
  const ip = await getIp(req);
  const secret = await sign({ip}, process.env.SHARED_SECRET ?? "secret");
  return secret;
}