import React from 'react';
import ReactTable from 'react-table';

const Table = ({ data }) => {
    return (      
        <div>  
            <h1>Our TABLE example</h1>
            <ReactTable
          data={data}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "First Name",
                  accessor: "firstName"
                },
                {
                  Header: "Last Name",
                  id: "lastName",
                  accessor: "lastName"
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Age",
                  accessor: "age"
                },               
              ]
            },  
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />     
        </div>  
    );
};

export default Table;
