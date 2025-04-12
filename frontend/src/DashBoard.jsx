import TopBar from "./TopBar";
import SideBar from "./SideBar";
import MetricsCard from "./MetricsCard";
import { Flex, Box } from "@chakra-ui/react";
import { FaHeart, FaTemperatureHigh, FaTint, FaWater } from "react-icons/fa";

export default function Dashboard() {
  const metrics = [
    { title: "Pulse", icon: FaHeart, data: "72", unit: "bpm" },
    { title: "Spo2", icon: FaTint, data: "98", unit: "%" },
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
        gap={10}
        justifyContent={"left"}
      >
        <SideBar />
        <Flex
          marginTop={8}
          wrap="wrap"
          gap={5}
          paddingTop={5}
          paddingLeft={"1%"}
          alignSelf="flex-start"
        >
          {metrics.map((metric, index) => (
            <Box key={index} width={{ base: "100%", md: "calc(35%)" }}>
              <MetricsCard
                title={metric.title}
                icon={metric.icon}
                data={metric.data}
                unit={metric.unit}
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
