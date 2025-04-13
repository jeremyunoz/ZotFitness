import TopBar from "./TopBar";
import SideBar from "./SideBar";
import MetricsCard from "./MetricsCard";
import PageTitle from "./PageTitle";
import GeminiPanel from "./GeminiPanel";
import { Flex, Box, HStack } from "@chakra-ui/react";
import { FaHeart, FaTemperatureHigh, FaTint, FaWater } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const defaultMetrics = [
  { title: "Pulse", icon: FaHeart, data: "72", unit: "bpm" },
  { title: "SPo2", icon: FaTint, data: "98", unit: "mmHg" },
  {
    title: "Ambient Temperature",
    icon: FaTemperatureHigh,
    data: "23",
    unit: "°C",
  },
  { title: "Ambient Humidity", icon: FaWater, data: "45", unit: "%" },
];

export default function Dashboard() {
  const [metrics, setMetrics] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);

  function buildMetrics(items) {
    console.log("items", items);
    const sorted = [...items].sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
    );
    const lastItem = sorted[0];
    const updatedMetrics = [
      {
        title: "Pulse",
        icon: FaHeart,
        data: lastItem.heartRate,
        unit: "bpm",
      },
      {
        title: "SPo2",
        icon: FaTint,
        data: lastItem.oxygen,
        unit: "mmHg",
      },
      {
        title: "Ambient Temperature",
        icon: FaTemperatureHigh,
        data: lastItem.temperature,
        unit: "°C",
      },
      {
        title: "Ambient Humidity",
        icon: FaWater,
        data: lastItem.humidity,
        unit: "%",
      },
    ];
    console.log("updatedMetrics", updatedMetrics);
    setMetrics(updatedMetrics);
    setRefreshKey((prevKey) => prevKey + 1);
  }

  function fetchAllUserMetrics() {
    axios
      .get("http://localhost:8000/getAllUserInfo")
      .then((resp) => {
        buildMetrics(resp.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchAllUserMetrics();

    const interval = setInterval(() => {
      fetchAllUserMetrics();
    }, 5000); // Fetch every 2 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

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
              key={refreshKey}
              marginTop={2}
              wrap="wrap"
              gap={5}
              paddingTop={5}
              paddingLeft={"1%"}
              alignSelf="flex-start"
            >
              {metrics.length > 0
                ? metrics.map((metric, index) => (
                    <Box key={index} width={"280px"}>
                      <MetricsCard
                        title={metric.title}
                        icon={metric.icon}
                        data={metric.data}
                        unit={metric.unit}
                      />
                    </Box>
                  ))
                : defaultMetrics.map((metric, index) => (
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
