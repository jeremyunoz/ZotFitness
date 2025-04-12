import { HStack, Card, Button, VStack, Text } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { MdDashboard, MdHistory } from "react-icons/md";

export default function SideBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  return (
    <Card.Root
      marginTop={8}
      minWidth={"210px"}
      height={"79vh"}
      marginLeft={"5vh"}
      bg="#222222"
      paddingTop={0}
    >
      <Text
        marginTop={"10%"}
        marginLeft={"10%"}
        textStyle="lg"
        fontStyle={"italic"}
        fontWeight={500}
        fontSize={"20px"}
      >
        MENU
      </Text>

      <Card.Body padding={0} paddingTop={5}>
        <VStack gap={0}>
          <Button
            variant={isActive("/") ? "solid" : "ghost"}
            onClick={() => navigate("/")}
            width="80%"
            height={"6vh"}
            alignContent="left"
            fontSize={16}
            justifyContent="flex-start"
          >
            <HStack width="100%" spacing={3}>
              <MdDashboard />
              <Text flex="1" overflow={"hidden"}>
                Dashboard
              </Text>
            </HStack>
          </Button>
          <Button
            variant={isActive("/history") ? "solid" : "ghost"}
            onClick={() => navigate("/history")}
            width="80%"
            height={"6vh"}
            alignContent="left"
            fontSize={16}
            justifyContent="flex-start"
          >
            <HStack width="100%" spacing={3}>
              <MdHistory />
              <Text flex="1" overflow={"hidden"}>
                History
              </Text>
            </HStack>
          </Button>
        </VStack>
      </Card.Body>
    </Card.Root>
  );
}
