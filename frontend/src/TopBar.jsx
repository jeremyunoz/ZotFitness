import { HStack, Card, Image, Text } from "@chakra-ui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";

export default function TopBar() {
  return (
    <>
      <Card.Root
        marginTop={8}
        maxWidth={"94.5%"}
        maxHeight={"10vh"}
        mx={"auto"}
        bgColor={"#222222"}
      >
        <Card.Body>
          <HStack gap={10} alignItems={"center"}>
            <Bars3BottomLeftIcon width={22} height={22} />
            <Text fontSize={"20px"}>ZotFitness</Text>
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
}
