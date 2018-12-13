import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import { makeAction } from '../../makeAction';
import TableActions from '../../redux/actions/actionTypes/tableActions';
import * as mockData from '../../config/mockData.json'

class FormContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        };
    }    

    tableData = [
        {
            firstName: 'Tanner',
            lastName: 'Linsley',
            age: 26,           
        },
        {
            firstName: 'Annah',
            lastName: 'Imand',
            age: 16           
        }
    ];

    componentDidMount() {      
        const fromMock = mockData.default;       //we can use fromMock instead of this.tableData to import data from JSON file
        
        this.setState({ data: this.tableData })
    }

    render() {
        return (
            this.state.data && 
            <Table
                data={this.state.data}
            />
        );
    }
}

const mapStateToProps = state => ({
    table: state.table
});

const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
