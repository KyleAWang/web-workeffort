import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';

import './styles/index.scss';
import Button from 'components/Button';
import TypeItems from  'components/TypeItems';
import PurposeItems from 'components/PurposeItems';
import StatusItems from 'components/StatusItems';

export class WorkEffortPage extends React.Component {
  constructor(props) {
    super(props)
  };

  state = {
    workEffortTypeId: '',
    workEffortPurposeTypeId: '',
    currentStatusId: []
  };

  onChangeType = (event, index, value) => {
    this.setState({workEffortTypeId: value});
  };

  onChangePurpose = (event, index, value) => {
    this.setState({workEffortPurposeTypeId: value});
  };

  onChangeStatus = (event, index, value) => {
    this.setState({currentStatusId: value});
  };

  render() {
    const title = <div className="page-title"><span>Find Work Effort</span></div>;

    const searchOptions = (
      <form>
        <div className="inline-box-block">
          <div className="col-6 col-md-8">
            <TextField hintText='WorkEffort Id' fullWidth={true} floatingLabelText='WorkEffort Id'/>
          </div>
          <div className="col-6 col-md-8">
            <TextField hintText='WorkEffort Parent Id' fullWidth={true} floatingLabelText='WorkEffort Parent Id'/>
          </div>
          <div className="col-6 col-md-8">
            <PurposeItems onChangePurpose={this.onChangePurpose} workEffortPurposeTypeId={this.state.workEffortPurposeTypeId}/>
          </div>
          <div className="col-6 col-md-8">
            <TypeItems onChangeType={this.onChangeType} workEffortTypeId={this.state.workEffortTypeId}/>
          </div>
          <div className="col-11">
            <StatusItems currentStatusId={this.state.currentStatusId} onChangeStatus={this.onChangeStatus}/>
          </div>
          <div className="clear"/>
          <div className="search-btn">
            <RaisedButton label='Search' primary={true} />
          </div>

        </div>
      </form>
    )

    return (
      <div>
        {title}
        <div className="button-bar">
          <Button children='Create Work Effort'/>
          <Button children='Advanced Search' isMarginLeft={true}/>
        </div>
        <Card initiallyExpanded={true}>
          <CardHeader
            title="Search Options"
            actAsExpander={true}
            showExpandableButton={true}
            style={{backgroundColor: '#f2f2f2'}}
          />
          <CardText expandable={true}>
            {searchOptions}
          </CardText>
        </Card>
      </div>
    )
  }
}

export default WorkEffortPage;