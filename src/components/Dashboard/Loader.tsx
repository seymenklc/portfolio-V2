import { Skeleton } from "@chakra-ui/react";
import { Fragment } from "react";
import StatCard from "../StatCard";

export default function Loader() {
   return (
      <Fragment>
         {Array(4).fill(0).map((_, idx) => (
            <Skeleton key={idx} >
               <StatCard
                  title='Github Followers'
                  value={1000}
               />
            </Skeleton>
         ))}
      </Fragment>
   );
}