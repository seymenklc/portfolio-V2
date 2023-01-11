import querystring from 'querystring';

const {
   SPOTIFY_CLIENT_ID: client_id,
   SPOTIFY_CLIENT_SECRET: client_secret,
   SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env as { [key: string]: string; };

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const BASE_URL = 'https://api.spotify.com/v1/me';
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
   const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
         Authorization: `Basic ${basic}`,
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: querystring.stringify({
         grant_type: 'refresh_token',
         refresh_token,
      })
   });

   return response.json() as Promise<{ access_token: string; }>;
};

export { getAccessToken, BASE_URL };