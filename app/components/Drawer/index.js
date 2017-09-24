import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default function WEDrawer() {
  return (
    <div>
      <Drawer open={false}>
        <MenuItem>Menu Item</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
      </Drawer>
    </div>
  );
}
