import { Text } from "@chakra-ui/react";
export default function PageTitle({ title }) {
  return (
    <Text
      fontSize={{ base: "2xl", md: "3xl" }}
      fontWeight={600}
      marginTop={8}
      marginLeft={"1%"}
      marginBottom={"-2vh"}
      fontStyle={"italic"}
      color={"white"}
    >
      {title}
    </Text>
  );
}
