import TopBar from "./TopBar";
import SideBar from "./SideBar";
import MetricsCard from "./MetricsCard";
import PageTitle from "./PageTitle";
import GeminiPanel from "./GeminiPanel";
import { Flex, Box, HStack } from "@chakra-ui/react";
import { FaHeart, FaTemperatureHigh, FaTint, FaWater } from "react-icons/fa";

export default function Dashboard() {
  const metrics = [
    { title: "Pulse", icon: FaHeart, data: "72", unit: "bpm" },
    { title: "SPo2", icon: FaTint, data: "98", unit: "%" },
    {
      title: "Ambient Temperature",
      icon: FaTemperatureHigh,
      data: "23",
      unit: "°C",
    },
    { title: "Ambient Humidity", icon: FaWater, data: "45", unit: "%" },
  ];

  return (
    <>
      <TopBar></TopBar>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={5}
        justifyContent={"left"}
      >
        <SideBar />
        <Flex flexDir={"column"}>
          <PageTitle title="Dashboard" />
          <HStack gap={"-10vh"}>
            <Flex
              marginTop={2}
              wrap="wrap"
              gap={5}
              paddingTop={5}
              paddingLeft={"1%"}
              alignSelf="flex-start"
            >
              {metrics.map((metric, index) => (
                <Box key={index} width={"280px"}>
                  <MetricsCard
                    title={metric.title}
                    icon={metric.icon}
                    data={metric.data}
                    unit={metric.unit}
                  />
                </Box>
              ))}
            </Flex>
            <GeminiPanel></GeminiPanel>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
}
