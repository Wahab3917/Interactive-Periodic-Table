import React, { useState } from 'react';

const ReactionBar = ({ onSearch }) => {
  const [reactionQuery, setReactionQuery] = useState('');

  const handleReactionChange = (e) => {
    setReactionQuery(e.target.value);
  };

  const handleReactionSubmit = (e) => {
    e.preventDefault();
    onSearch(reactionQuery);
  };

  return (
    <>
      <form className="reaction-bar" onSubmit={handleReactionSubmit}>
        <input type="text" placeholder="Perform a Reaction" value={reactionQuery} onChange={handleReactionChange} className="reaction-bar-input"/>
        <i className="reaction-bar-icon fa-solid fa-flask"></i>
      </form>
    </>
  );
};

export default ReactionBar;