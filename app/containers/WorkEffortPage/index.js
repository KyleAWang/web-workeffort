/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Helmet from 'react-helmet';

import Button from 'components/Button';
import TypeItems from 'components/TypeItems';
import PurposeItems from 'components/PurposeItems';
import StatusItems from 'components/StatusItems';
import SearchResultsTable from 'components/SearchResultsTable';
import LoadingIndicator from 'components/LoadingIndicator';

import './styles/index.scss';
import {
  makeSelectSearchOptions,
  makeSelectSearchWorkEfforts,
  makeSelectError,
  makeSelectLoading,
  makeSelectDiagramDialogOpen,
} from './selectors';
import {
  changeSearchOptions,
  searchWorkEfforts,
  toggleDiagramDialog,
} from './actions';

export class WorkEffortPage extends React.Component {
  constructor(props) {
    super(props);
    this.onOpenDiagramDialog = this.onOpenDiagramDialog.bind(this);
    this.onCloseDiagramDialog = this.onCloseDiagramDialog.bind(this);
  }

    onChangeType = (event, index, value) => {
      // this.setState({workEffortTypeId: value});
      const newSearchOptions = {
        ...this.props.searchOptions,
        workEffortTypeId: value,
      };
      this.props.onChangeSearchOptions(newSearchOptions);
    };

    onChangePurpose = (event, index, value) => {
      // this.setState({workEffortPurposeTypeId: value});
      const newSearchOptions = {
        ...this.props.searchOptions,
        workEffortPurposeTypeId: value,
      };
      this.props.onChangeSearchOptions(newSearchOptions);
    };

    onChangeStatus = (event, index, value) => {
      const newSearchOptions = {
        ...this.props.searchOptions,
        currentStatusId: value,
      };
      this.props.onChangeSearchOptions(newSearchOptions);
    };

    onChangeWorkEffortId = (evt) => {
      const newSearchOptions = {
        ...this.props.searchOptions,
        workEffortId: evt.target.value,
      };
      this.props.onChangeSearchOptions(newSearchOptions);
    };

    onChangeWorkParentEffortId = (evt) => {
      const newSearchOptions = {
        ...this.props.searchOptions,
        workEffortParentId: evt.target.value,
      };
      this.props.onChangeSearchOptions(newSearchOptions);
    };

    onCloseDiagramDialog() {
      this.props.onToggleDiagramDialog(false);
    }

    onOpenDiagramDialog() {
      console.log('open');
      this.props.onToggleDiagramDialog(true);
    }

    render() {
      const {
        searchOptions,
        loading,
        onSubmitForm,
        workEfforts,
        diagramDialogOpen,
      } = this.props;
      const title = <div className="page-title"><span>Find Work Effort</span></div>;

      const searchOptionsDiv = (
        <form onSubmit={onSubmitForm}>
          <div className="inline-box-block">
            <div className="col-4 col-md-6">
              <TextField
                hintText="WorkEffort Id"
                fullWidth
                floatingLabelText="WorkEffort Id"
                value={searchOptions.workEffortId || ''}
                onChange={this.onChangeWorkEffortId}
              />
            </div>
            <div className="col-4 col-md-6">
              <TextField
                hintText="WorkEffort Parent Id"
                fullWidth
                floatingLabelText="WorkEffort Parent Id"
                value={searchOptions.workEffortParentId || ''}
                onChange={this.onChangeWorkParentEffortId}
              />
            </div>
            <div className="col-4 col-md-6">
              <PurposeItems
                onChangePurpose={this.onChangePurpose}
                workEffortPurposeTypeId={searchOptions.workEffortPurposeTypeId || ''}
              />
            </div>
            <div className="col-4 col-md-6">
              <TypeItems
                onChangeType={this.onChangeType}
                workEffortTypeId={searchOptions.workEffortTypeId || ''}
              />
            </div>
            <div className="col-4 col-md-12">
              <StatusItems
                currentStatusId={searchOptions.currentStatusId || []}
                onChangeStatus={this.onChangeStatus}
              />
            </div>
            <div className="clear" />
            <div className="search-btn">
              <RaisedButton label="Search" primary type="submit" />
            </div>

          </div>
        </form>
      );

      let loadingDiv = '';
      if (loading) {
        loadingDiv = <LoadingIndicator />;
      }

      // let workEffortsContent = '';
      // // console.log(workEfforts);
      // if (workEfforts) {
      //   workEffortsContent = workEfforts.map((item, index) => (
      //     <div key={`workEffort-${index}`}>
      //       {item.workEffortId}
      //     </div>
      //   ));
      // }

      const diagramActions = [
        <FlatButton
          label="Cancel"
          primary
          onClick={this.onCloseDiagramDialog}
        />,
      ];

      return (
        <div>
          <Helmet
            defaultTitle="Find Work Effort"
            meta={[
              { name: 'description', content: 'Work Effort Management application' },
            ]}
          />
          {title}
          <div className="button-bar">
            <Button children="Create Work Effort" />
            <Button children="Advanced Search" isMarginLeft />
            <Button children="Show Diagram" isMarginLeft onClick={this.onOpenDiagramDialog} />
          </div>
          <Card initiallyExpanded>
            <CardHeader
              title="Search Options"
              actAsExpander
              showExpandableButton
              style={{ backgroundColor: '#f2f2f2' }}
            />
            <CardText expandable>
              {searchOptionsDiv}
            </CardText>
          </Card>
          {loadingDiv}
          <div className="component-gap">
            <Card>
              <CardText>
                <SearchResultsTable resultList={workEfforts} />
              </CardText>
            </Card>
          </div>

          <Dialog
            title="Dialog With Actions"
            actions={diagramActions}
            modal={false}
            open={diagramDialogOpen}
            onRequestClose={this.onCloseDiagramDialog}
            diagramActionsdiagramActions
          >
                    Dialog
          </Dialog>
        </div>
      );
    }
}

WorkEffortPage.PropTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  searchOptions: PropTypes.object,
  onChangeSearchOptions: PropTypes.func,
  onSubmitForm: PropTypes.func,
  diagramDialogOpen: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  searchOptions: makeSelectSearchOptions(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  workEfforts: makeSelectSearchWorkEfforts(),
  diagramDialogOpen: makeSelectDiagramDialogOpen(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeSearchOptions: (searchOptions) => dispatch(changeSearchOptions(searchOptions)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(searchWorkEfforts());
    },
    onToggleDiagramDialog: (status) => dispatch(toggleDiagramDialog(status)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkEffortPage);
