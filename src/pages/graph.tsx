import React from 'react';

interface GraphProps {
  userType: 'parent' | 'docteur' | 'professeur';
}

const Graph: React.FC<GraphProps> = ({ userType }) => {
  return (
    <div>
      <h1>Page de graphiques pour {userType}</h1>
    </div>
  );
};

export default Graph;