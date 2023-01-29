import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.css";
import TableData from "@/components/Table";
import { Button, Dropdown } from "@nextui-org/react";
import { AddEditLead } from "@/components/AddEditLead";
import { get } from "./api/hello";

export default function Home() {
  const [tableData, setTableData] = React.useState([]);
  const [data, setData] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [via, setVia] = React.useState("rest");
 
  React.useEffect(() => {
    (async () => {
      const data = await get();
      setTableData(data);
    })();
  }, []);

  React.useEffect(() => {
    if (data) {
      setOpen(true);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>CRM</title>
      </Head>
      <main className={styles.main}>
        {open === true && (
          <AddEditLead
            closeModal={() => {
              setOpen(false);
              setData(null);
            }}
            setTableData={(newData) => {
              setTableData(newData);
            }}
            tableData={tableData}
            data={data}
            via={via}
            modalFormOpen={open}
          />
        )}
        <div>
          <div>
            <Dropdown>
              <Dropdown.Button flat>Add New</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item>
                  <Button
                    onClick={() => {
                      setVia("socket");
                      setOpen(true);
                    }}
                  >
                    Via Socket
                  </Button>
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <Button
                    onClick={() => {
                      setVia("rest");
                      setOpen(true);
                    }}
                  >
                    Via REST API
                  </Button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          {tableData?.length > 0 && (
            <TableData
              users={tableData}
              setTableData={(newData) => setTableData(newData)}
              setData={(userData) => setData(userData)}
            />
          )}
        </div>
      </main>
    </>
  );
}
