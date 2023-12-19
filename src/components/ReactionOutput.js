import React from 'react'

const ReactionOutput = ({ inputValue, closeReactionOutput }) => {

  var balancedEquation = "";
  
  return (
    <>

      <div className="reaction-output">

        <i className="reaction-output-icon fa-solid fa-flask"></i>
        <div onClick={closeReactionOutput} className="reaction-output-close-button" title="Close Reaction Output">&times;</div>

        <div className="reaction-input-value"><h4>Reaction Input: &nbsp;</h4> <p>{inputValue}</p></div>
        <div className="reaction-after-balancing"><h4>After Balancing: &nbsp;</h4> <p>{balancedEquation}</p></div>
      </div>

    </>
  )
}

export default ReactionOutput