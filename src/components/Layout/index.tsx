import { Fragment } from "react";
// chakra-ui
import { Container } from "@chakra-ui/react";
// components
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

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
         <Footer />
      </Fragment>
   );
}