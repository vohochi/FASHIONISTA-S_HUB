import React from 'react';
import '../styles/loading.css';

interface Props {
  // define your props here
}

const Loading: React.FC<Props> = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading set_1"></div>
      <div className="loading set_2"></div>
      <div className="loading set_3"></div>
    </div>
  );
};

export default Loading;
