import React, { useState, useEffect } from 'react';
import gif from '../images/reaction-output-gif.gif';

const ReactionOutput = ({ inputValue, closeReactionOutput }) => {

  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false); // Hide the image after 2 seconds
    }, 5000);
    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, [])

  function formatEquation(inputValue) {
    // Split the equation at '->' and trim spaces from each part
    const [leftSide, rightSide] = inputValue.split('->').map(side => side.trim());

    // Replace ' + ' with '+%2B+' in both left and right sides
    const formattedLeft = leftSide.replace(/ \+ /g, '+%2B+');
    const formattedRight = rightSide.replace(/ \+ /g, '+%2B+');

    // Combine both sides with '+->+'
    return `${formattedLeft}+->+${formattedRight}`;
  }
  
  const equation = formatEquation(inputValue);
  const balancedEquation = `https://www.wolframalpha.com/input?i=${equation}`;
  

  return (
    <>

      <div className="reaction-output">

        {showImage && (
          <img src={gif} alt="Reaction Gif" style={{width: "80%", margin: "0 auto"}}/>
        )}

        {!showImage && (
          <>
            <i className="reaction-output-icon fa-solid fa-flask"></i>
            <div onClick={closeReactionOutput} className="reaction-output-close-button" title="Close Reaction Output">&times;</div>

            <div className="reaction-input-value"><h4>Input Interpretation: &nbsp;</h4> <p>{inputValue}</p></div>
            <a className='equation-overview-link' href={balancedEquation}><p>Check detailed overview of your input</p></a>
          </>
        )}

      </div>

    </>
  )
}

export default ReactionOutput