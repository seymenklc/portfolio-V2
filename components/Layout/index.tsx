import { Container } from "@chakra-ui/react";
import { Fragment } from "react";
import Navbar from "@/components/Layout/Navbar";

interface Props {
   children: React.ReactNode;
}

export default function Layout({ children }: Props) {
   return (
      <Fragment>
         <Navbar />
         <main className="min-h-screen">
            <Container maxW='3xl' paddingY={5} paddingX={4}>
               {children}
            </Container>
         </main>
         {/* footer */}
      </Fragment>
   );
}