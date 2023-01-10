import { Fragment } from 'react';
import { IGithubUser } from "@/src/types/github";
import StatCard from "@/components/StatCard";

interface Props {
   data?: IGithubUser;
}

export default function Stats({ data }: Props) {
   return (
      <Fragment>
         <StatCard
            title='Github Followers'
            value={data?.followers}
         />
         <StatCard
            title='Github Following'
            value={data?.following}
         />
         <StatCard
            title="Public Repos"
            value={data?.public_repos}
         />
         <StatCard
            title='Developing Since'
            value={new Date(data?.created_at as Date).getFullYear().toString()}
         />
      </Fragment>
   );
}