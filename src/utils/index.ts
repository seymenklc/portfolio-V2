export const truncateOverview = (str: string, cutOffNum: number) => {
   return str?.length > cutOffNum ? str.slice(0, cutOffNum - 1) + '...' : str;
};

export const fetcher = async (url: string) => {
   return await (await fetch(url)).json();
};