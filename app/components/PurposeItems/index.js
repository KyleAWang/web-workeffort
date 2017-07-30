import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

function PurposeItems(props) {
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

  return (
    <SelectField floatingLabelText="Purpose" fullWidth={true} value={props.workEffortPurposeTypeId} maxHeight={200}
                 onChange={props.onChangePurpose}>
      {purposeItems}
    </SelectField>
  );
}

PurposeItems.propTypes = {
  workEffortPurposeTypeId: React.PropTypes.string,
  onChangePurpose: React.PropTypes.func
}

export default PurposeItems;