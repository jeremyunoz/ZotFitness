import { HStack, Card, Button, VStack, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";

export default function MetricsCard({ title, icon, data, unit }) {
  const [currentData, setCurrentData] = useState(data);

  return (
    <>
      <Card.Root bgColor={"#222222"}>
        <Card.Header>
          <HStack gap={"4%"} alignItems={"center"}>
            <Icon as={icon} boxSize={6} color={"red.500"} />
            <Text fontSize={"20px"}>{title}</Text>
          </HStack>
        </Card.Header>
        <Card.Body>
          <VStack alignItems={"center"}>
            <Text fontSize={"30px"}>
              {currentData} {unit}
            </Text>
          </VStack>
        </Card.Body>
        <Card.Footer justifyContent={"end"}>
          <Button
            width={"30%"}
            variant="outline"
            color="gray.200"
            borderColor="gray.400"
            _hover={{
              bg: "white",
              color: "black",
              borderColor: "white",
            }}
            onClick={() => setCurrentData(0)}
          >
            Reset
          </Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
}
