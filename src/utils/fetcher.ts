export const fetcher = async (url: string) => {
   return await (await fetch(url)).json();
};