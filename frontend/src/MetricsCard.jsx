import { HStack, Card, Button, VStack, Text, Icon } from "@chakra-ui/react";

export default function MetricsCard({ title, icon, data, unit }) {
  return (
    <>
      <Card.Root>
        <Card.Header>
          <HStack gap={2} alignItems={"center"}>
            <Icon as={icon} boxSize={6} color={"red.500"} />
            <Text fontSize={"20px"}>{title}</Text>
          </HStack>
        </Card.Header>
        <Card.Body>
          <VStack alignItems={"center"}>
            <Text fontSize={"30px"}>
              {data} {unit}
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
          >
            Save
          </Button>
        </Card.Footer>
      </Card.Root>
    </>
  );
}
