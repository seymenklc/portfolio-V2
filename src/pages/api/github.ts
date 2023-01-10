import { NextApiRequest, NextApiResponse } from "next";

const END_POINT = `https://api.github.com/users/seymenklc`;

export default async function getGithubStats(_: NextApiRequest, res: NextApiResponse) {
   const response = await fetch(END_POINT, {
      method: "GET",
      headers: {
         'Authorization': process.env.GITHUB_ACCESS_TOKEN as string
      }
   });

   if (response.status === 204 || response.status > 400) {
      return res.status(200).json({ success: false });
   }

   const data = await response.json();

   return res.status(200).json(data);
}