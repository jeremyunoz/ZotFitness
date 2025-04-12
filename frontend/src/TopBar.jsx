import {
  HStack,
  VStack,
  Card,
  Image,
  Text,
  Button,
  Dialog,
  CloseButton,
  Spacer,
  Input,
  Box,
} from "@chakra-ui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import { CiSaveDown2 } from "react-icons/ci";
import { useState } from "react";
import { CreateItem } from "./UploadToDB";

export default function TopBar() {
  const [userName, setUserId] = useState("");

  function handleSave() {
    console.log(`saved ${userName}`);
    CreateItem(userName);
  }

  return (
    <>
      <Card.Root
        marginTop={8}
        maxWidth={"94.5%"}
        maxHeight={"10vh"}
        mx={"auto"}
        bgColor={"#222222"}
        justifyContent={"center"}
      >
        <Card.Body>
          <HStack gap={10} alignItems={"center"}>
            <Bars3BottomLeftIcon width={22} height={22} />
            <Text fontSize={"20px"}>ZotFitness</Text>
            <Spacer />

            <Dialog.Root placement={"center"} motionPreset="slide-in-bottom">
              <Dialog.Trigger asChild>
                <Button
                  variant="ghost"
                  fontSize={"17px"}
                  width={"9%"}
                  alignItems={"left"}
                  _hover={{
                    bg: "gray.200",
                    color: "black",
                  }}
                >
                  <HStack width="100%" spacing={2}>
                    <CiSaveDown2></CiSaveDown2>
                    <Text flex="1" overflow={"hidden"}>
                      Save
                    </Text>
                  </HStack>
                </Button>
              </Dialog.Trigger>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Save</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <VStack alignItems={"left"} marginTop={-2}>
                      <Text>
                        Enter your unique user ID here to save your body
                        measures.
                      </Text>
                      <Text color="white" mb={2} fontStyle={"italic"}>
                        Unique User ID:
                      </Text>
                      <Input
                        placeholder="Enter your ID"
                        bg="black"
                        value={userName}
                        onChange={(e) => setUserId(e.target.value)}
                      />
                    </VStack>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Dialog.ActionTrigger asChild>
                      <Button onClick={handleSave}>Save to DynamoDB</Button>
                    </Dialog.ActionTrigger>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Dialog.Root>
          </HStack>
        </Card.Body>
      </Card.Root>
    </>
  );
}
