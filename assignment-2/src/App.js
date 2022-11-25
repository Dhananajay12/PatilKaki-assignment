import "./App.css";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";

function App() {
  const [datas, setData] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://gorest.co.in/public/v2/users");
      const data = await res.json();
      setData(data);
    };

    fetchProduct();
  }, []);

  let male = 0;
  let female = 0;
  let lenght = datas?.length;

  for (let i = 0; i < lenght; i++) {
    if (datas[i].gender === "male") male++;
    else female++;
  }

  return (
    <>
      <Box display="flex">
        <h3 style={{ marginRight: "1rem" }}>Male Count: {male}</h3>
        <h3>Female Count: {female} </h3>{" "}
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 450 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontSize: "20px" }}>ID</TableCell>
              <TableCell style={{ fontSize: "20px" }}>Name</TableCell>
              <TableCell style={{ fontSize: "20px" }}>Email</TableCell>
              <TableCell style={{ fontSize: "20px" }}>Gender</TableCell>
              <TableCell style={{ fontSize: "20px" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas?.map((user) => (
              <TableRow
                key={user.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>{user.id}</TableCell>
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>

                <TableCell>{user.email}</TableCell>
                <TableCell>{user.gender} </TableCell>
                <TableCell>{user.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default App;
