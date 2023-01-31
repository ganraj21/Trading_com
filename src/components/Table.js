import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import trade_api from "../config/data";
import { makeStyles } from "@material-ui/core/styles";
import "./Table.css";
import { TableContainer } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  tcontainer: {
    width: "90%",
  },
  table_cell: {
    fontWeight: 600,
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: ".00625em",
    fontSize: "1rem",
    textAlign: "left",
  },
  table_row: {
    fontWeight: 600,
  },
  profit_cell: {
    color: "#137333",
    background: "#e6f4ea",
    padding: "14px",
    borderRadius: "9px",
    fontWeight: 600,
  },
}));

const GainersandLosers = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(trade_api); // fetch data and set to setItems
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const symbol = "₹";

  const classes = useStyles();
  return (
    <>
      <div className={classes.tcontainer}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {[
                  "Stock Name",
                  "Closing Price",
                  "Today's Gain",
                  "Percentage Change",
                ].map((data) => (
                  <TableCell
                    style={{
                      color: "black",
                      fontWeight: "600",
                      textAlign: "left",
                      fontSize: "18px",
                      padding: "15px 0 6px 0",
                    }}
                    key={data}
                  >
                    {data}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="table_body">
              {items.map((row) => {
                const profit = row.closing_price - row.opening_price;
                return (
                  <TableRow className="table_row" key={row.id}>
                    {/* name cell */}
                    <TableCell
                      className={classes.table_cell}
                      style={{ fontWeight: "500" }}
                    >
                      {row.name}
                    </TableCell>

                    {/* todays closing price */}
                    <TableCell align="center" className={classes.table_cell}>
                      {symbol}
                      {row.closing_price}
                    </TableCell>

                    {/* todays gain */}
                    <TableCell
                      className={classes.table_cell}
                      align="center"
                      style={{ color: profit >= 0 ? "#137333" : "#a50e0e" }}
                    >
                      <span>{profit >= 0 ? "+" : "-"}</span>
                      {symbol}
                      {row.todays_gain}
                    </TableCell>

                    {/* todays_percentage_change */}
                    <TableCell
                      className={classes.table_cell}
                      align="center"
                      style={{
                        padding: "10px",
                        width: "110px",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      <div
                        className={classes.profit_cell}
                        style={{
                          color: profit >= 0 ? "#137333" : "#a50e0e",
                          background: profit >= 0 ? "#e6f4ea" : "#fce8e6",
                        }}
                      >
                        <span style={{ marginRight: "6px" }}>
                          {profit > 0 ? (
                            <i class="fas fa-solid fa-arrow-up"></i>
                          ) : (
                            <i class="fas fa-regular fa-arrow-down"></i>
                          )}
                        </span>
                        {row.todays_percentage_change}%
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default GainersandLosers;
