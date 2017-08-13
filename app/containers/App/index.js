/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles/index.scss';
import { toggleDrawer } from './actions';
import { makeSelectDrawerToggle } from './selectors';


class App extends React.Component {
  render() {
    const { drawerToggle, onChangeDrawerToggle } = this.props;
    const styles = { example: { position: "fixed", top: 0, }, };

    return (
      <div>
        <Helmet
          defaultTitle="Work Effort Management"
          meta={[
            {name: 'description', content: 'Work Effort Management application'},
          ]}
        />
        <div>
          <AppBar
            title="Work Effort"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={styles.example}
            onLeftIconButtonTouchTap={() => onChangeDrawerToggle(!drawerToggle)}
          >
          </AppBar>
          <div>
            <Drawer open={drawerToggle} containerClassName="drwaer_div">
              <MenuItem
                containerElement={<Link to="/workeffort"/>} onTouchTap={() => onChangeDrawerToggle(false)}>Find Work Efforts</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
            </Drawer>
          </div>
        </div>
        <div className="main-context">
          {React.Children.toArray(this.props.children)}
        </div>
      </div>
    );

  }
}

App.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  drawerToggle: makeSelectDrawerToggle()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeDrawerToggle: (val) => {
      console.log(val);
      dispatch(toggleDrawer(val));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
