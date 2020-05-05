import React from 'react';
import { withRouter } from 'react-router-dom';

const NoMatch = (props) => (
  <div>
    <h3>No match for <code>{props.location.pathname}</code> 404</h3>
  </div>
)

export default withRouter(NoMatch);