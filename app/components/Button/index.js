import React, { Children } from 'react';
import RaisedButton  from 'material-ui/RaisedButton';
import classNames from 'classnames';

import './styles/index.scss';

function Button(props) {
  const btnClass = classNames({
    btnMarginLeft: props.isMarginLeft,
  });

  const button = (
    <RaisedButton label={Children.toArray(props.children)} className={btnClass}/>
  )
  return button;
};

Button.propTypes = {
  href: React.PropTypes.string,
  isMarginLeft: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  children: React.PropTypes.node.isRequired
};

export default Button;