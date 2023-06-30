export const GridOverlay = ({ rows, columns }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
    pointerEvents: 'none',
  };

  const cellStyle = {
    border: '1px solid rgba(0, 0, 0, 0.5)',
  };

  const gridCells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      gridCells.push(
        <div key={`${row}-${col}`} style={cellStyle}></div>
      );
    }
  }

  return <div style={gridStyle}>{gridCells}</div>;
};

