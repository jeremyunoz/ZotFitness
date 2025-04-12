import {
  Card,
  Stack,
  Textarea,
  Button,
  Avatar,
  Box,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

export default function GeminiPanel() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi there! How can I assist you with your fitness today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  function handleSend() {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages([
      ...newMessages,
      {
        sender: "ai",
        text: "This is a sample AI response. I’ll give you real insights soon!",
      },
    ]);
    setUserInput("");
  }

  return (
    <Card.Root
      bgColor={"white"}
      borderColor={"gray.400"}
      borderWidth={"2px"}
      width="105vh"
      height={"70vh"}
      marginRight={"25vh"}
      marginTop={8}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      padding={4}
    >
      <Card.Body
        flex="1"
        overflowY="auto"
        bgColor={"whiteAlpha.100"}
        padding={2}
      >
        <Stack spacing={3}>
          {messages.map((msg, idx) => (
            <Box
              key={idx}
              alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
              bg={msg.sender === "user" ? "blue.100" : "gray.200"}
              borderRadius="md"
              padding={2}
              maxWidth="80%"
            >
              <Text color={"black"}>{msg.text}</Text>
            </Box>
          ))}
        </Stack>
      </Card.Body>
      <Box mt={3} display="flex" gap={2} alignItems="center">
        <Textarea
          placeholder="Type your message..."
          value={userInput}
          color={"black"}
          onChange={(e) => setUserInput(e.target.value)}
          height="10vh"
        />
        <IconButton
          onClick={handleSend}
          aria-label="send"
          variant={"ghost"}
          _hover={{ bg: "white" }}
        >
          <RiSendPlaneFill
            size={"30px"}
            color={"black"}
            bgColor={"transparent"}
          />
        </IconButton>
      </Box>
    </Card.Root>
  );
}
