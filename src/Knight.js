import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Game';

// If we had a bunch of chess pieces,
// it might be a good idea to use the props
// parameter and return something like { pieceId: props.id }
const knightSource = {
  beginDrag(props) {
    return {};
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

const propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <div style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move'
      }}>
        ♘
      </div>
    )
  }
}

Knight.propTypes = propTypes;
export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
