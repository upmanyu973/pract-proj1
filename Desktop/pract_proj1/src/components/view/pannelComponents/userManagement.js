import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { getUser } from "../../../redux/selectors/userSelector";
import data from "../../../utils/constants/Data.json";
const Usermanagement = () => {
  const [tableData, setTableData] = useState(data?.data);
  const user = useSelector(getUser);
  console.table(user);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, id) => {
            return (
              <tr>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Usermanagement;
