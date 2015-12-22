import React, { Component, PropTypes } from 'react';

const propTypes = {
  black: PropTypes.bool
}

class Square extends Component {
  render() {
    const { black, children } = this.props;
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    const styles = {
      backgroundColor: fill,
      color: stroke,
      width: '100%',
      height: '100%',
    }

    return (
      <div style={styles}>
        {children}
      </div>
    )
  }
}

Square.propTypes = propTypes;

export default Square;
