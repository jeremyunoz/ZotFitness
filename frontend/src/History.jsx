import TopBar from "./TopBar";
import SideBar from "./SideBar";
import DataTable from "./DataTable";
import PageTitle from "./PageTitle";
import { Flex } from "@chakra-ui/react";

export default function History() {
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
          <PageTitle title={"History"}></PageTitle>
          <DataTable></DataTable>
        </Flex>
      </Flex>
    </>
  );
}
