import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

import './styles/index.scss';

function Header(props) { // eslint-disable-line react/prefer-stateless-function
  const styles = { example: { position: 'fixed', top: 0 } };
  return (
    <div>
      <AppBar
        title="Work Effort"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        style={styles.example}
      >
      </AppBar>
      <div>
        <Drawer open containerClassName="drwaer_div">
          <MenuItem
            containerElement={<Link to="/workeffort" />}
          >Find Work Efforts</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    </div>
  );
}

export default Header;
