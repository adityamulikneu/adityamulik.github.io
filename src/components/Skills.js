import React, { useState } from 'react';
import BarChart from "./BarChart/BarChart";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Skills = () => {

  // React hooks with common state values for all components
  const [selectedGroup, setSelectedGroup] = useState("All");
  const [groupColour, setGroupColour] = useState("lightgrey");

  return (
    <div>
      <svg viewBox="-2 0 100 100" preserveAspectRatio="xMidYMid meet">
        <BarChart
          positionX={35}
          positionY={50}
          width={80}
          height={100}
          selectedGroup={selectedGroup}
          barColour={groupColour}
        />
      </svg>
    </div>
  );
};

export default Skills;