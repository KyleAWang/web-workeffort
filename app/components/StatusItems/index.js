import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

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


const items = [
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


const valueItems = [
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

function StatusItems(props) {
  const status = items.map((item, index) => (
    <MenuItem
      key={item}
      insetChildren={true}
      checked={props.currentStatusId && props.currentStatusId.indexOf(item) > -1}
      value={valueItems[index]}
      primaryText={item}
    />
  ));

  return (
    <SelectField floatingLabelText="Status" multiple={true} fullWidth={true} value={props.currentStatusId}
                 maxHeight={200}
                 onChange={props.onChangeStatus}>
      {status}
    </SelectField>
  );
}

StatusItems.propTypes = {
  currentStatusId: React.PropTypes.array,
  onChangeStatus: React.PropTypes.func
};

export default StatusItems;
