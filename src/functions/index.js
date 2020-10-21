const generateEmptyGrid = (numRows, numCols) => {
    const rows = [];
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0));
    }
  
    return rows;
  };
  export default generateEmptyGrid;