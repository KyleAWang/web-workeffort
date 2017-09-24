import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

function TypeItems(props) {
  const typeItems = [
    <MenuItem key={-1} value="" primaryText="" />,
    <MenuItem key={0} value="AVAILABLE" primaryText="Available" />,
    <MenuItem key={1} value="BUSINESS_TRAVEL" primaryText="Business Travel" />,
    <MenuItem key={2} value="SCRUM_TASK_ERROR" primaryText="Error" />,
    <MenuItem key={3} value="EVENT" primaryText="Event" />,
    <MenuItem key={4} value="ASSET_USAGE" primaryText="Fixed Asset Usage(rental)" />,
    <MenuItem key={5} value="SCRUM_TASK_IMPL" primaryText="Implementation" />,
    <MenuItem key={6} value="SHIPMENT_INBOUND" primaryText="Inbound Shipment" />,
    <MenuItem key={7} value="SCRUM_TASK_INST" primaryText="Installation" />,
    <MenuItem key={8} value="MEETING" primaryText="Meeting" />,
    <MenuItem key={9} value="MILESTONE" primaryText="Milestone" />,
    <MenuItem key={10} value="SHIPMENT_OUTBOUND" primaryText="Outbound Shipment" />,
    <MenuItem key={11} value="PERSONAL_TIMEOFF" primaryText="Personal Time Off" />,
    <MenuItem key={12} value="PROD_ORDER_HEADER" primaryText="Production Run Header" />,
    <MenuItem key={13} value="PROD_ORDER_TASK" primaryText="Production Run Task" />,
    <MenuItem key={14} value="PROGRAM" primaryText="Program" />,
    <MenuItem key={15} value="PROJECT" primaryText="Project" />,
    <MenuItem key={16} value="PHASE" primaryText="Project Phase" />,
    <MenuItem key={17} value="PHASE_TEMPLATE" primaryText="Project Phase Template" />,
    <MenuItem key={18} value="TASK_TEMPLATE" primaryText="Project Task Template" />,
    <MenuItem key={19} value="PROJECT_TEMPLATE" primaryText="Project Template" />,
    <MenuItem key={20} value="PUBLIC_HOLIDAY" primaryText="Public Holiday" />,
    <MenuItem key={21} value="PUBLISH_PROPS" primaryText="Publish Properties" />,
    <MenuItem key={22} value="ROUTING" primaryText="Routing" />,
    <MenuItem key={23} value="ROU_TASK" primaryText="Routing Task" />,
    <MenuItem key={24} value="SCRUM_PROJECT" primaryText="Scrum Project" />,
    <MenuItem key={25} value="SCRUM_SPRINT" primaryText="Scrum Sprint" />,
    <MenuItem key={26} value="SCRUM_TASK" primaryText="Scrum Task Type" />,
    <MenuItem key={27} value="TASK" primaryText="Task" />,
    <MenuItem key={28} value="TEMPLATE" primaryText="Template" />,
    <MenuItem key={29} value="SCRUM_TASK_TEST" primaryText="Test" />,
    <MenuItem key={30} value="TRAINING" primaryText="Training" />,
    <MenuItem key={31} value="ACTIVITY" primaryText="Workflow Activity" />,
    <MenuItem key={32} value="WORK_FLOW" primaryText="Workflow Process" />,
  ];

  return (

    <SelectField
      floatingLabelText="Type"
      fullWidth
      value={props.workEffortTypeId}
      maxHeight={200}
      onChange={props.onChangeType}
    >
      {typeItems}
    </SelectField>
  );
}

TypeItems.propTypes = {
  workEffortTypeId: React.PropTypes.string,
  onChangeType: React.PropTypes.func,
};

export default TypeItems;
