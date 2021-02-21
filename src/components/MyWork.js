import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';

const MyWork = () => (
  <div>
    <GitHubCalendar username="adityamulik" >
      <ReactTooltip delayShow={50} html />
    </GitHubCalendar>
  </div>
);

export default MyWork;