import type { NextApiRequest, NextApiResponse } from "next";
import httpProxyMiddleware from "next-http-proxy-middleware";

const handler = (req: NextApiRequest, res: NextApiResponse) =>
  httpProxyMiddleware(req, res, {
    target: process.env.API_BASE_URL,
    pathRewrite: [
      {
        patternStr: "^/api",
        replaceStr: process.env.API_BASE_URL + "/v2",
      },
    ],
  });

export default handler;
