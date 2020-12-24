import React, { Component } from 'react';
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css';  
import withDraggableColumns from 'react-table-hoc-draggable-columns';
import 'react-table-hoc-draggable-columns/dist/styles.css';
const ReactTableDraggableColumns = withDraggableColumns(ReactTable);
const columns = [{  
        Header: 'Name',  
        accessor: 'name'  
        },{  
        Header: 'Ticker',  
        accessor: 'ticker'  
        },{  
        Header: 'Asset_class',  
        accessor: 'asset_class'  
        },{  
        Header: 'Avg_price',  
        accessor: 'avg_price'  
        },{  
        Header: 'Market_price',  
        accessor: 'market_price'  
        },{  
        Header: 'Market_value_ccy',  
        accessor: 'market_value_ccy'  
        },{  
        Header: 'Latest_chg_pct',  
        accessor: 'latest_chg_pct'  
        }] 
class Table extends Component {
    render() {
        console.log(this.props.payload)
        return (  
            <div>  
                {this.props.payload ?
               <ReactTableDraggableColumns  
                   data={this.props.payload}  
                   columns={columns}  
                   defaultPageSize = {10}  
                   draggableColumns= {{
                    mode: 'reorder',
                    draggable: ['name','ticker','asset_class','avg_price','market_price','market_value_ccy','latest_chg_pct']
                  }}
                />  
                :
                <h1>Loading...</h1>
    }
            </div>        
       )  
    }
}

export default Table;