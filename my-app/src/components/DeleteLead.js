import React from "react";
import { Text, Button, Grid, Row } from "@nextui-org/react";

export const DeleteLead = (props) => {
  return (
    <Grid.Container
      css={{ borderRadius: "14px", padding: "0.75rem", maxWidth: "330px" }}
    >
      <Row justify="center" align="center">
        <Text b>Confirm</Text>
      </Row>
      <Row>
        <Text>
          Are you sure you want to delete this user ? By doing this, you will
          not be able to recover the data.
        </Text>
      </Row>
      <Grid.Container justify="end" alignContent="end">
        <Grid>
          <Button size="sm" shadow color="error" onClick={() => props.delete()}>
            Delete
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};
