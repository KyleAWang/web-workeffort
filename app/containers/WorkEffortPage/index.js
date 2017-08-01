import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PropTypes from 'prop-types';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import Button from 'components/Button';
import TypeItems from  'components/TypeItems';
import PurposeItems from 'components/PurposeItems';
import StatusItems from 'components/StatusItems';

import './styles/index.scss';
import { makeSelectSearchOptions } from './selectors';
import { makeSelectError, makeSelectLoading } from 'containers/App/selectors';
import { changeSearchOptions } from './actions';

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
    // this.setState({workEffortTypeId: value});
    const newSearchOptions = {
      ...this.props.searchOptions,
      workEffortTypeId: value
    };
    this.props.onChangeSearchOptions(newSearchOptions);
  };

  onChangePurpose = (event, index, value) => {
    // this.setState({workEffortPurposeTypeId: value});
    const newSearchOptions = {
      ...this.props.searchOptions,
      workEffortPurposeTypeId: value
    };
    this.props.onChangeSearchOptions(newSearchOptions);
  };

  onChangeStatus = (event, index, value) => {
    const newSearchOptions = {
      ...this.props.searchOptions,
      currentStatusId: value
    }
    this.props.onChangeSearchOptions(newSearchOptions);
  };

  onChangeWorkEffortId = (evt) => {
    const newSearchOptions = {
      ...this.props.searchOptions,
      workEffortId: evt.target.value
    };
    this.props.onChangeSearchOptions(newSearchOptions);
  };

  onChangeWorkParentEffortId = (evt) => {
    const newSearchOptions = {
      ...this.props.searchOptions,
      workEffortParentId: evt.target.value
    };
    this.props.onChangeSearchOptions(newSearchOptions);
  };

  render() {
    const { searchOptions } = this.props;
    const title = <div className="page-title"><span>Find Work Effort</span></div>;

    const searchOptionsDiv = (
      <form>
        <div className="inline-box-block">
          <div className="col-6 col-md-8">
            <TextField hintText='WorkEffort Id' fullWidth={true} floatingLabelText='WorkEffort Id' value={searchOptions.workEffortId || ''} onChange={this.onChangeWorkEffortId}/>
          </div>
          <div className="col-6 col-md-8">
            <TextField hintText='WorkEffort Parent Id' fullWidth={true} floatingLabelText='WorkEffort Parent Id' value={searchOptions.workEffortParentId || ''} onChange={this.onChangeWorkParentEffortId}/>
          </div>
          <div className="col-6 col-md-8">
            <PurposeItems onChangePurpose={this.onChangePurpose} workEffortPurposeTypeId={searchOptions.workEffortPurposeTypeId || ''}/>
          </div>
          <div className="col-6 col-md-8">
            <TypeItems onChangeType={this.onChangeType} workEffortTypeId={searchOptions.workEffortTypeId || ''}/>
          </div>
          <div className="col-11">
            <StatusItems currentStatusId={searchOptions.currentStatusId || []} onChangeStatus={this.onChangeStatus}/>
          </div>
          <div className="clear"/>
          <div className="search-btn">
            <RaisedButton label='Search' primary={true} />
          </div>

        </div>
      </form>
    );

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
            {searchOptionsDiv}
          </CardText>
        </Card>
      </div>
    )
  }
}

WorkEffortPage.PropTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  searchOptions: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  searchOptions: makeSelectSearchOptions(),
  loading: makeSelectLoading(),
  error: makeSelectError()
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchOptions: (searchOptions) => dispatch(changeSearchOptions(searchOptions))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkEffortPage);