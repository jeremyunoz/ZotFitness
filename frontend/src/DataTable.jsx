import { Table } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

export default function DataTable() {
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
    <Table.ScrollArea
      borderWidth="1px"
      rounded="md"
      width="130vh"
      height={"68vh"}
      marginTop={8}
      borderColor={"gray.500"}
      onClick={() => {
        fetchAllUserMetrics();
      }}
    >
      <Table.Root size="sm" stickyHeader interactive>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>Pulse</Table.ColumnHeader>
            <Table.ColumnHeader>SPo2</Table.ColumnHeader>
            <Table.ColumnHeader>Ambient Temperature</Table.ColumnHeader>
            <Table.ColumnHeader>Ambient Humidity</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {metricsData.map((item, idx) => (
            <Table.Row key={idx}>
              <Table.Cell>{item.heartRate} bpm</Table.Cell>
              <Table.Cell>{item.oxygen} mmHg</Table.Cell>
              <Table.Cell>{item.temperature} °C</Table.Cell>
              <Table.Cell>{item.humidity} %</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
