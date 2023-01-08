import { Heading, Text } from "@chakra-ui/react";

interface Props {
   title: string;
   body: string;
}

export default function HeadingSection({ title, body }: Props) {
   return (
      <section className="flex flex-col gap-3 py-4">
         <Heading>{title}</Heading>
         <Text>{body}</Text>
      </section>
   );
}