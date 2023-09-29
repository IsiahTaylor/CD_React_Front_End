export default function ResponsiveColumns() {
  const numCols = [4, 8, 12];
  const numRows = [16, 9, 11];
  const squareBlockHeight = 75;
  const gapBetweenBlocks = [8, 12, 12];

  function calcW(i: number) {
    return (
      numCols[i] * squareBlockHeight + (numCols[i] - 1) * gapBetweenBlocks[2]
    );
  }

  function calcMW(i: number) {
    return (
      numCols[i] * squareBlockHeight + (numCols[i] + 1) * gapBetweenBlocks[i]
    );
  }
  function calcHeight(i: number) {
    const heightOfBlocks = numRows[i] * squareBlockHeight;
    const gapHeight = numRows[i] * gapBetweenBlocks[i];
    return heightOfBlocks + gapHeight;
  }
  /**
   * For each size we need to return
   * width
   * widthAndMargin //used for determining breakpoints at the app level
   * number of columns
   * minChildWidth
   */

  return {
    sm: {
      numCols: numCols[0],
      widthAsString: calcW(0) + "px",
      widthAndMarginAsString: calcMW(0) + "px",
      marginGapsAsString: gapBetweenBlocks[0] + "px",
      numRows: numRows[0],
      heightString: calcHeight(0) + "px",
    },
    md: {
      numCols: numCols[1],
      widthAsString: calcW(1) + "px",
      widthAndMarginAsString: calcMW(1) + "px",
      marginGapsAsString: gapBetweenBlocks[1] + "px",
      numRows: numRows[1],
      heightString: calcHeight(1) + "px",
    },
    xl: {
      numCols: numCols[2],
      widthAsString: calcW(2) + "px",
      widthAndMarginAsString: calcMW(2) + "px",
      marginGapsAsString: gapBetweenBlocks[2] + "px",
      numRows: numRows[2],
      heightString: calcHeight(2) + "px",
    },
    minChildWidthAsString: squareBlockHeight + "px",
    numCols: numCols, //These are arrays!
    numRows: numRows, // {sm/base: numCol[0], md:numCol[1], xl:numCol[2] }
  };
}
