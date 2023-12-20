import React from 'react'

const ReactionOutput = ({ inputValue, closeReactionOutput }) => {

  // const balanceEquation = (equation) => {

  //   // Check if equation is a valid string
  //   if (typeof equation !== 'string' || !equation.trim()) {
  //     return 'Invalid equation'; // or handle it according to your application's logic
  //   }

  //   // Split the equation into reactants and products
  //   const [reactants, products] = equation.split('=').map(side => side.trim());
  
  //   // Parse the reactants and products into individual compounds
  //   const parseCompounds = side => side.split('+').map(compound => compound.trim());
  
  //   const reactantCompounds = parseCompounds(reactants);
  //   const productCompounds = parseCompounds(products);
  
  //   // Get the list of unique elements in the equation
  //   const getElements = compounds =>
  //   compounds.flatMap(compound => compound.match(/[A-Z][a-z]?\d*/g));
  
  //   const reactantElements = getElements(reactantCompounds);
  //   const productElements = getElements(productCompounds);
  //   const allElements = [...new Set([...reactantElements, ...productElements])];
  
  //   // Initialize a matrix to represent the coefficients of each element in each compound
  //   const matrix = allElements.map(element =>
  //     [...reactantCompounds, ...productCompounds].map(compound =>
  //       (compound.match(new RegExp(`${element}(\\d*)`)) || [])[1] || 0
  //     )
  //   );
  
  //   // Solve the matrix using Gaussian elimination
  //   for (let i = 0; i < matrix.length; i++) {
  //     for (let j = 0; j < matrix[i].length; j++) {
  //       matrix[i][j] = parseInt(matrix[i][j], 10);
  //     }
  //   }
  
  //   const solveEquation = () => {
  //     for (let i = 0; i < matrix.length; i++) {
  //       let pivotRow = i;
  //       while (pivotRow < matrix.length && matrix[pivotRow][i] === 0) {
  //         pivotRow++;
  //       }
  
  //       if (pivotRow === matrix.length) {
  //         continue;
  //       }
  
  //       [matrix[i], matrix[pivotRow]] = [matrix[pivotRow], matrix[i]];
  
  //       for (let j = 0; j < matrix.length; j++) {
  //         if (j !== i) {
  //           const factor = matrix[j][i] / matrix[i][i];
  //           for (let k = i; k < matrix[i].length; k++) {
  //             matrix[j][k] -= factor * matrix[i][k];
  //           }
  //         }
  //       }
  //     }
  //   };
  
  //   solveEquation();
  
  //   // Get the coefficients for the balanced equation
  //   const coefficients = matrix.map(row => row[row.length - 1]);
  
  //   // Build the balanced equation string
  //   const balancedEquation = `${reactantCompounds.map((compound, index) =>
  //     `${coefficients[index]} ${compound}`
  //   ).join(' + ')} = ${productCompounds.map((compound, index) =>
  //     `${coefficients[index + reactantCompounds.length]} ${compound}`
  //   ).join(' + ')}`;
  
  //   return balancedEquation;
  // }

  var balancedEquation = "";
  // balancedEquation += balanceEquation(inputValue);

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