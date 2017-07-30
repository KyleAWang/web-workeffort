import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import './styles/index.scss';
import Button from 'components/Button';

const typeItems = [
  <MenuItem key={-1} value="" primaryText=""/>,
  <MenuItem key={0} value="AVAILABLE" primaryText="Available"/>,
  <MenuItem key={1} value="BUSINESS_TRAVEL" primaryText="Business Travel"/>,
  <MenuItem key={2} value="SCRUM_TASK_ERROR" primaryText="Error"/>,
  <MenuItem key={3} value="EVENT" primaryText="Event"/>,
  <MenuItem key={4} value="ASSET_USAGE" primaryText="Fixed Asset Usage(rental)"/>,
  <MenuItem key={5} value="SCRUM_TASK_IMPL" primaryText="Implementation"/>,
  <MenuItem key={6} value="SHIPMENT_INBOUND" primaryText="Inbound Shipment"/>,
  <MenuItem key={7} value="SCRUM_TASK_INST" primaryText="Installation"/>,
  <MenuItem key={8} value="MEETING" primaryText="Meeting"/>,
  <MenuItem key={9} value="MILESTONE" primaryText="Milestone"/>,
  <MenuItem key={10} value="SHIPMENT_OUTBOUND" primaryText="Outbound Shipment"/>,
  <MenuItem key={11} value="PERSONAL_TIMEOFF" primaryText="Personal Time Off"/>,
  <MenuItem key={12} value="PROD_ORDER_HEADER" primaryText="Production Run Header"/>,
  <MenuItem key={13} value="PROD_ORDER_TASK" primaryText="Production Run Task"/>,
  <MenuItem key={14} value="PROGRAM" primaryText="Program"/>,
  <MenuItem key={15} value="PROJECT" primaryText="Project"/>,
  <MenuItem key={16} value="PHASE" primaryText="Project Phase"/>,
  <MenuItem key={17} value="PHASE_TEMPLATE" primaryText="Project Phase Template"/>,
  <MenuItem key={18} value="TASK_TEMPLATE" primaryText="Project Task Template"/>,
  <MenuItem key={19} value="PROJECT_TEMPLATE" primaryText="Project Template"/>,
  <MenuItem key={20} value="PUBLIC_HOLIDAY" primaryText="Public Holiday"/>,
  <MenuItem key={21} value="PUBLISH_PROPS" primaryText="Publish Properties"/>,
  <MenuItem key={22} value="ROUTING" primaryText="Routing"/>,
  <MenuItem key={23} value="ROU_TASK" primaryText="Routing Task"/>,
  <MenuItem key={24} value="SCRUM_PROJECT" primaryText="Scrum Project"/>,
  <MenuItem key={25} value="SCRUM_SPRINT" primaryText="Scrum Sprint"/>,
  <MenuItem key={26} value="SCRUM_TASK" primaryText="Scrum Task Type"/>,
  <MenuItem key={27} value="TASK" primaryText="Task"/>,
  <MenuItem key={28} value="TEMPLATE" primaryText="Template"/>,
  <MenuItem key={29} value="SCRUM_TASK_TEST" primaryText="Test"/>,
  <MenuItem key={30} value="TRAINING" primaryText="Training"/>,
  <MenuItem key={31} value="ACTIVITY" primaryText="Workflow Activity"/>,
  <MenuItem key={32} value="WORK_FLOW" primaryText="Workflow Process"/>
];

const purposeItems = [
  <MenuItem value="" primaryText=""/>,
  <MenuItem value="ROU_ASSEMBLING" primaryText="Assembling"/>,
  <MenuItem value="SCRUM_DEFAULT_TASK" primaryText="Default Task"/>,
  <MenuItem value="WEPT_DEPLOYMENT" primaryText="Deployment"/>,
  <MenuItem value="WEPT_DEVELOPMENT" primaryText="Development"/>,
  <MenuItem value="WEPT_TASK_EMAIL" primaryText="Email"/>,
  <MenuItem value="WEPT_MAINTENANCE" primaryText="Maintenance"/>,
  <MenuItem value="ROU_MANUFACTURING" primaryText="Manufacturing"/>,
  <MenuItem value="WEPT_MEETING" primaryText="Meeting"/>,
  <MenuItem value="WEPT_PHASE" primaryText="Phase"/>,
  <MenuItem value="WEPT_TASK_PHONE_CALL" primaryText="Phone Call"/>,
  <MenuItem value="WEPT_PRODUCTION_RUN" primaryText="Production Run"/>,
  <MenuItem value="WEPT_PROJECT" primaryText="Project"/>,
  <MenuItem value="WEPT_RESEARCH" primaryText="Research"/>,
  <MenuItem value="ROU_SUBCONTRACTING" primaryText="Sub-contracting"/>,
  <MenuItem value="WEPT_SUPPORT" primaryText="Support"/>,
  <MenuItem value="SYSTEM_DEFAULT_TASK" primaryText="System Default Task"/>,
  <MenuItem value="WEPT_WAREHOUSING" primaryText="Warehousing"/>
];

const statusItems = [
  "[General] Cancelled",
  "[General] Declined",
  "[General] Delegated",
  "[General] In Planning",
  "[General] Needs Action",
  "[General] Planned",
  "[General] Sent",
  "[Task] Accepted",
  "[Task] Completed",
  "[Event] Confirmed",
  "[Event] Tentative",
];


const statusValueItems = [
  "CAL_CANCELLED",
  "CAL_DECLINED",
  "CAL_DELEGATED",
  "CAL_IN_PLANNING",
  "CAL_NEEDS_ACTION",
  "CAL_PLANNED",
  "CAL_SENT",
  "CAL_ACCEPTED",
  "CAL_COMPLETED",
  "CAL_CONFIRMED",
  "CAL_TENTATIVE"
];


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

  menuItems(values) {
    return statusItems.map((item, index) => (
      <MenuItem
        key={item}
        insetChildren={true}
        checked={values && values.indexOf(item) > -1}
        value={statusValueItems[index]}
        primaryText={item}
      />
    ));
  }


  render() {
    const title = <div className="page-title"><span>Find Work Effort</span></div>;

    const searchOptions = (
      <form>
        <div className="inline-box-block">
          <div className="col-6 col-md-8">
            <TextField hintText='WorkEffort Id' floatingLabelText='WorkEffort Id'/>
          </div>
          <div className="col-6 col-md-8">
            <TextField hintText='WorkEffort Parent Id' floatingLabelText='WorkEffort Parent Id'/>
          </div>
          <div className="col-6 col-md-8">
            <SelectField floatingLabelText="Purpose" value={this.state.workEffortPurposeTypeId} maxHeight={200}
                         onChange={this.onChangePurpose}>
              {purposeItems}
            </SelectField>
          </div>
          <div className="col-6 col-md-8">
            <SelectField floatingLabelText="Type" value={this.state.workEffortTypeId} maxHeight={200}
                         onChange={this.onChangeType}>
              {typeItems}
            </SelectField>
          </div>
          <div className="col-11">
            <SelectField floatingLabelText="Status" multiple={true} fullWidth={true} value={this.state.currentStatusId} maxHeight={200}
                         onChange={this.onChangeStatus}>
              {this.menuItems(this.state.currentStatusId)}
            </SelectField>
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