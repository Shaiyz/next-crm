import { put, post } from "@/pages/api/hello";
import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroup,
  Modal,
  Label,
  Row,
  Col,
} from "reactstrap";
import { io } from "socket.io-client";
const socket = io("http://localhost:8000", { transports: ["websocket"] });

export const AddEditLead = ({
  data,
  modalFormOpen,
  closeModal,
  via,
  tableData,
  setTableData,
}) => {
  const [userData, setUserData] = React.useState(
    data
      ? data
      : {
          leadname: "",
          email: "",
          phone: "",
          source: "",
          location: "",
          status: "accepted",
          assigned: "",
        }
  );

  React.useEffect(() => {
    if (data) {
      setUserData({ ...data });
    }
    return () =>
      setUserData({
        leadname: "",
        email: "",
        phone: "",
        source: "",
        location: "",
        status: "accepted",
        assigned: "",
      });
  }, [data]);

  const submit = async (e) => {
    e.preventDefault();
    const updatedData = [...tableData];

    if (!data) {
      if (via === "rest") {
        const response = await post(userData);
        updatedData.push(response);
        setTableData(updatedData);
      } else {
        socket.emit("addlead", userData);
        socket.on("output", (output) => {
          updatedData.push(output);
          setTableData(updatedData);
        });
      }
    } else {
      await put(userData, data.id);
      const index = tableData.findIndex((i) => i.id === data.id);
      updatedData[index] = userData;
      setTableData(updatedData);
    }
    closeModal();
  };
  const updateUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Row>
        <Col md="4">
          <Modal isOpen={modalFormOpen}>
            <div className=" modal-body p-0">
              <Card className="  shadow border-0">
                <CardHeader className=" bg-white pb-5">
                  <div className=" text-muted text-center mt-5 mb-3">
                    <small>{data ? "Edit" : "Add"} Lead</small>
                  </div>
                </CardHeader>
                <CardBody className=" px-lg-5 py-lg-5">
                  <Form role="form" onSubmit={submit}>
                    <FormGroup className=" mb-3">
                      <Label for="exampleSelect">Lead Name</Label>

                      <InputGroup className=" input-group-alternative">
                        <Input
                          name="leadname"
                          value={userData.leadname}
                          placeholder="Lead Name"
                          type="text"
                          onChange={(e) => updateUserData(e)}
                          required
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className=" mb-3">
                      <Label for="exampleSelect">Email</Label>

                      <InputGroup className=" input-group-alternative">
                        <Input
                          name="email"
                          value={userData.email}
                          placeholder="Email"
                          type="email"
                          onChange={(e) => updateUserData(e)}
                          required
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className=" mb-3">
                      <Label for="exampleSelect">Source</Label>

                      <InputGroup className=" input-group-alternative">
                        <Input
                          name="source"
                          value={userData.source}
                          placeholder="Source"
                          type="text"
                          onChange={(e) => updateUserData(e)}
                          required
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className=" mb-3">
                      <Label for="exampleSelect">Phone</Label>

                      <InputGroup className=" input-group-alternative">
                        <Input
                          name="phone"
                          value={userData.phone}
                          placeholder="Phone"
                          type="text"
                          onChange={(e) => updateUserData(e)}
                          required
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className=" mb-3">
                      <Label for="exampleSelect">Assign to</Label>

                      <InputGroup className=" input-group-alternative">
                        <Input
                          name="assigned"
                          value={userData.assigned}
                          placeholder="Assign to"
                          type="text"
                          onChange={(e) => updateUserData(e)}
                          required
                        ></Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <Label for="exampleSelect">Status</Label>
                      <Input
                        type="select"
                        name="status"
                        value={userData.status}
                        id="exampleSelect"
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            [e.target.name]: e.target.value,
                          })
                        }
                      >
                        <option value="Accepted">Accepted</option>
                        <option value="Denied">Denied</option>
                        <option value="Pending">Pending</option>
                        <option value="Contacted">Contacted</option>
                      </Input>
                    </FormGroup>
                    <FormGroup className="mb-3">
                      <Label for="exampleSelect">Location</Label>

                      <InputGroup className="input-group-alternative">
                        <Input
                          name="location"
                          value={userData.location}
                          placeholder="Location"
                          type="text"
                          onChange={(e) => updateUserData(e)}
                          required
                        ></Input>
                      </InputGroup>
                    </FormGroup>

                    <div className=" text-center ">
                      <Button
                        className=" my-4 "
                        style={{ marginRight: "12px" }}
                        color="primary"
                        onClick={() => {
                          closeModal();
                        }}
                      >
                        Close
                      </Button>
                      <Button
                        className=" my-4 ml-2"
                        color="primary"
                        type="submit"
                      >
                        Submit
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
            </div>
          </Modal>
        </Col>
      </Row>
    </>
  );
};
