import { Table } from "@chakra-ui/react";
import { FetchItem } from "./FetchFromDB";


export default function DataTable() {
  const item = FetchItem();
  console.log(item.userID);

  const metricsData = [
    // {
    //   userId: item.userID,
    //   userName: item.userName,
    //   pulse: item.HeartRate,
    //   SPo2: 999.99,
    //   amb_temp: 23,
    //   amb_humidity: 45,
    // },
    {
      userId: 2,
      userName: "jeremy",
      pulse: 33,
      SPo2: 999.99,
      amb_temp: 23,
      amb_humidity: 45,
    },
    {
      userId: 3,
      userName: "es",
      pulse: 33,
      SPo2: 999.99,
      amb_temp: 23,
      amb_humidity: 45,
    },
    {
      userId: 4,
      userName: "kevlin",
      pulse: 33,
      SPo2: 999.99,
      amb_temp: 23,
      amb_humidity: 45,
    }
  ];

  return (
    <Table.ScrollArea
      borderWidth="1px"
      rounded="md"
      width="130vh"
      height={"60vh"}
      marginTop={8}
      borderColor={"gray.500"}
    >
      <Table.Root size="sm" stickyHeader interactive>
        <Table.Header>
          <Table.Row bg="bg.subtle">
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Pulse</Table.ColumnHeader>
            <Table.ColumnHeader>SPo2</Table.ColumnHeader>
            <Table.ColumnHeader>Ambient Temperature</Table.ColumnHeader>
            <Table.ColumnHeader>Ambient Humidity</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {metricsData.map((item) => (
            <Table.Row key={item.userId}>
              <Table.Cell>{item.userName}</Table.Cell>
              <Table.Cell>{item.pulse}</Table.Cell>
              <Table.Cell>{item.SPo2}</Table.Cell>
              <Table.Cell>{item.amb_temp}</Table.Cell>
              <Table.Cell>{item.amb_humidity}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Table.ScrollArea>
  );
}
