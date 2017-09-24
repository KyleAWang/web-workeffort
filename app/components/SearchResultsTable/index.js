import React from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

function SearchResultsTable(props) {
  const { resultList } = props;

  let tableRow = '';
  if (resultList && resultList.length > 0) {
    tableRow = resultList.map((item, index) => (
      <TableRow key={`result-${index}`}>
        <TableRowColumn>{index}</TableRowColumn>
        <TableRowColumn>{item.workEffortId}</TableRowColumn>
        <TableRowColumn>{item.currentStatusId}</TableRowColumn>
        <TableRowColumn>{item.description}</TableRowColumn>
        <TableRowColumn>{item.lastUpdatedStamp}</TableRowColumn>
        <TableRowColumn>{item.createdStamp}</TableRowColumn>
      </TableRow>
    ));
  }
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Index</TableHeaderColumn>
          <TableHeaderColumn>ID</TableHeaderColumn>
          <TableHeaderColumn>Status</TableHeaderColumn>
          <TableHeaderColumn>Description</TableHeaderColumn>
          <TableHeaderColumn>Last Update</TableHeaderColumn>
          <TableHeaderColumn>Created Time</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableRow}
      </TableBody>
    </Table>
  );
}

SearchResultsTable.PropTypes = {
  resultList: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.array,
  ]),
};

export default SearchResultsTable;
