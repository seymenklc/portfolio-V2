import { Stat, StatHelpText, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";

interface Props {
   title?: string;
   value?: string | number;
   helpText?: string;
}

export default function StatCard({ title, value, helpText }: Props) {
   const borderColor = useColorModeValue('gray.800', 'gray.500');

   return (
      <Stat
         rounded={'lg'}
         border={'1px solid'}
         borderColor={borderColor}
         className="flex flex-col gap-2 px-4 py-3 rounded-md"
      >
         <StatLabel fontSize='lg'>{title}</StatLabel>
         <StatNumber>{value}</StatNumber>
         <StatHelpText>{helpText}</StatHelpText>
      </Stat>
   );
}