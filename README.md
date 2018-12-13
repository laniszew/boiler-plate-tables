Clone repository and run 

npm i
npm start

New browser tab should appear with HMR on.

To run tests use 'npm run test'

Editing data for table:

Either change class field (TableContainer.jsx) or mockData.json and change this.setState({ data: this.tableData }) to this.setState({ data: fromMock })

Editing table itself: 
Table.jsx is based on https://react-table.js.org/#/story/readme

