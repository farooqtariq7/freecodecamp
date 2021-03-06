import React, { PropTypes } from 'react';
import { contain } from 'thundercats-react';
import { Accordion, Thumbnail, Panel, Well } from 'react-bootstrap';
import moment from 'moment';

export default contain(
  {
  },
  React.createClass({
    displayName: 'ShowJobs',

    propTypes: {
      jobs: PropTypes.array
    },

    renderJobs(jobs =[]) {
      const thumbnailStyle = {
        backgroundColor: 'white',
        maxHeight: '200px',
        maxWidth: '200px'
      };
      return jobs.map((
        {
          id,
          company,
          position,
          description,
          logo,
          city,
          state,
          email,
          phone,
          postedOn
        },
        index
      ) => {
        const header = (
          <div>
            <h4 style={{ display: 'inline-block' }}>{ company }</h4>
            <h5
              className='pull-right hidden-xs hidden-md'
              style={{ display: 'inline-block' }}>
              { position }
            </h5>
          </div>
        );
        return (
          <Panel
            collapsable={ true }
            eventKey={ index }
            header={ header }
            key={ id }>
            <Thumbnail
              alt='200x200' src={ logo }
              style={ thumbnailStyle } />
            <Well>
              Position: { position }
              Location: { city }, { state }
              <br />
              Contact: { email || phone || 'N/A' }
              <br />
              Posted On: { moment(postedOn).format('MMMM Do, YYYY') }
            </Well>
            <p>{ description }</p>
          </Panel>
        );
      });
    },

    render() {
      const { jobs } = this.props;
      return (
        <Accordion>
          { this.renderJobs(jobs) }
        </Accordion>
      );
    }
  })
);
