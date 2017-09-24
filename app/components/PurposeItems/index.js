import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

function PurposeItems(props) {
  const purposeItems = [
    <MenuItem value="" key={0} primaryText="" />,
    <MenuItem value="ROU_ASSEMBLING" key={1} primaryText="Assembling" />,
    <MenuItem value="SCRUM_DEFAULT_TASK" key={2} primaryText="Default Task" />,
    <MenuItem value="WEPT_DEPLOYMENT" key={3} primaryText="Deployment" />,
    <MenuItem value="WEPT_DEVELOPMENT" key={4} primaryText="Development" />,
    <MenuItem value="WEPT_TASK_EMAIL" key={5} primaryText="Email" />,
    <MenuItem value="WEPT_MAINTENANCE" key={6} primaryText="Maintenance" />,
    <MenuItem value="ROU_MANUFACTURING" key={7} primaryText="Manufacturing" />,
    <MenuItem value="WEPT_MEETING" key={8} primaryText="Meeting" />,
    <MenuItem value="WEPT_PHASE" key={9} primaryText="Phase" />,
    <MenuItem value="WEPT_TASK_PHONE_CALL" key={10} primaryText="Phone Call" />,
    <MenuItem value="WEPT_PRODUCTION_RUN" key={11} primaryText="Production Run" />,
    <MenuItem value="WEPT_PROJECT" key={12} primaryText="Project" />,
    <MenuItem value="WEPT_RESEARCH" key={13} primaryText="Research" />,
    <MenuItem value="ROU_SUBCONTRACTING" key={14} primaryText="Sub-contracting" />,
    <MenuItem value="WEPT_SUPPORT" key={15} primaryText="Support" />,
    <MenuItem value="SYSTEM_DEFAULT_TASK" key={16} primaryText="System Default Task" />,
    <MenuItem value="WEPT_WAREHOUSING" key={17} primaryText="Warehousing" />,
  ];

  return (
    <SelectField
      floatingLabelText="Purpose"
      fullWidth
      value={props.workEffortPurposeTypeId}
      maxHeight={200}
      onChange={props.onChangePurpose}
    >
      {purposeItems}
    </SelectField>
  );
}

PurposeItems.propTypes = {
  workEffortPurposeTypeId: React.PropTypes.string,
  onChangePurpose: React.PropTypes.func,
};

export default PurposeItems;
