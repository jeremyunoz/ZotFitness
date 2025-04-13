import TopBar from "./TopBar";
import SideBar from "./SideBar";
import DataTable from "./DataTable";
import PageTitle from "./PageTitle";
import { Flex, Button } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function History() {
  const [metricsData, setMetricsData] = useState([]);

  function fetchAllUserMetrics() {
    axios
      .get("http://localhost:8000/getAllUserInfo")
      .then((resp) => {
        setMetricsData(resp.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <TopBar></TopBar>
      <Flex
        flexDir={{ base: "column", md: "row" }}
        gap={10}
        justifyContent={"left"}
      >
        <SideBar></SideBar>
        <Flex flexDir={"column"}>
          <Flex flexDir={"row"} justifyContent={"space-between"}>
            <PageTitle title={"History"}></PageTitle>
            <Button
              marginTop={9}
              marginBottom={-2}
              variant={"outline"}
              borderColor={"gray.400"}
              onClick={() => {
                fetchAllUserMetrics();
              }}
            >
              Retreive
            </Button>
          </Flex>
          <DataTable metricsData={metricsData}></DataTable>
        </Flex>
      </Flex>
    </>
  );
}
