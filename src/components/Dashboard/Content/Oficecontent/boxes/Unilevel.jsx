import React from 'react';
import { Table } from 'react-bootstrap';


const ResponsiveTable = ({lvl,userscount,paysum}) => {


  const data = [
    { id: "LVL 1", name: 'John', age: 25 },
    { id: "LVL 2", name: 'Jane', age: 30 },
    { id: "LVL 3", name: 'Alice', age: 28 },
    { id: "LVL 4", name: 'Alice', age: 28 },
    { id: "LVL 5", name: 'Alice', age: 28 },
    { id: "LVL 6", name: 'Alice', age: 28 },
    { id: "LVL 7", name: 'Alice', age: 28 },
    { id: "LVL 8", name: 'Alice', age: 28 },
    { id: "LVL 9", name: 'Alice', age: 28 },
    { id: "LVL 10", name: 'Alice', age: 28 },
  ];
  


  return (
    <div className="col-md-12 col-lg-12">
      <div style={{ borderRadius: "1rem" }} className="mb-3 card">
        <div className="card-header-tab card-header-tab-animation card-header">
          <div className="card-header-title">
            <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
            <h1 className="fs-2">Total Volume Details</h1>
          </div>
          <ul className="nav">
            <li className="nav-item"><h3>%</h3></li>
          </ul>
        </div>
        <div className="card-body row">
          <Table style={{ borderRadius: "1rem" }} borderless striped bordered hover responsive>
            <thead>
              <tr  scope={"col"}>
                <th style={{borderRight:"2px solid black"}} className='col-1'>LEVEL</th>
                <th className='col-2'>LINE<br />UID</th>
                <th className='col-8'>25$<br/>uid</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveTable;
















<div className="col col-lg-6">

</div>