function Gamelog({ turns }) {
    return (
      <ol>
        {turns.map((turn, index) => (
          <li key={index}>
            Player {turn.player} selected row {turn.row}, col {turn.col}
          </li>
        ))}
      </ol>
    );
  }
  
  export default Gamelog;
  