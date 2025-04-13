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
import genAI from "./config/gemini";

export default function GeminiPanel() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi there! How can I assist you with your fitness today?",
    },
  ]);
  const [userInput, setUserInput] = useState("");

  function filterResp(rawResponse) {
    const plainText = rawResponse
      .replace(/\*\*(.*?)\*\*/g, "$1") // bold
      .replace(/\*(.*?)\*/g, "$1") // italics
      .replace(/`(.*?)`/g, "$1"); // code
    console.log("plainText", plainText);
    return plainText;
  }

  async function runGemini() {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(userInput);
      const response = result.response;
      const filteredResp = filterResp(response.text());

      setMessages((messages) => [
        ...messages,
        { sender: "ai", text: filteredResp },
      ]);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleSend() {
    if (!userInput.trim()) return;
    const newMessages = [...messages, { sender: "user", text: userInput }];
    setMessages(newMessages);
    setUserInput("");
    runGemini();
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
          onClick={() => {
            handleSend();
          }}
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
