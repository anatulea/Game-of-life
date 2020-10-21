const generateEmptyGrid = (numRows, numCols) => {
  console.log("in function numCols:",numCols, "numRows:", numRows)
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
  
    return rows;
  };
  export default generateEmptyGrid;