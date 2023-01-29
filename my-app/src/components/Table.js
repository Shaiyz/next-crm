import {
  Table,
  Row,
  Col,
  Tooltip,
  User,
  Text,
  Popover,
} from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge.js";
import { IconButton } from "./IconButton";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";
import { DeleteLead } from "./DeleteLead.js";
import { del } from "@/pages/api/hello.js";

export default function TableData({ users, setTableData, setData }) {
  const columns = [
    { name: "LEAD NAME", uid: "leadname" },
    { name: "PHONE", uid: "phone" },
    { name: "EMAIL", uid: "email" },
    { name: "STATUS", uid: "status" },
    { name: "ASSIGNED", uid: "assigned" },
    { name: "SOURCE", uid: "source" },
    { name: "LOCATION", uid: "location" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const deleteUser = async (id) => {
    await del(id);
    const tableData = users.filter((i) => i.id !== id);
    setTableData(tableData);
  };
  console.log(users)
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "leadname":
        return (
          <User squared src={user.avatar} name={cellValue} css={{ p: 0 }}>
            {/* {cellValue} */}
          </User>
        );
      case "email":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "phone":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "assigned":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );

      case "source":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "location":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={cellValue}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="Edit user">
                <IconButton>
                  <EditIcon
                    size={20}
                    fill="#979797"
                    onClick={() => setData(user)}
                  />
                </IconButton>
              </Tooltip>
            </Col>
            <Col css={{ d: "flex" }}>
              <Tooltip content="Delete user" color="error">
                <Popover>
                  <Popover.Trigger>
                    <IconButton>
                      <DeleteIcon size={20} fill="#FF0080" />
                    </IconButton>
                  </Popover.Trigger>
                  <Popover.Content>
                    <DeleteLead
                      delete={() => {
                        deleteUser(user.id);
                      }}
                    />
                  </Popover.Content>
                </Popover>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
    <Table
      sticked
      aria-label="Example static collection table"
      selectionMode="multiple"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
  );
}
