import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Square from './Square';
import Knight from './Knight';
import BoardSquare from './BoardSquare';
import { moveKnight, canMoveKnight } from './Game';

const propTypes = {
  knightPosition: PropTypes.arrayOf(
    PropTypes.number.isRequired
  ).isRequired
}

class Board extends Component {
  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = (x === knightX && y === knightY) ?  <Knight /> : null;

    return (
      <div key={i}
           style={{width: '12.5%', height: '12.5%'}}>
        <BoardSquare x={x}
                     y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    const styles = {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    }

    return (
      <div style={styles}>
        {squares}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(Board);
