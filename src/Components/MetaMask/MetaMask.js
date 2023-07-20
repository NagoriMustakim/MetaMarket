import React, { Component } from 'react';
import createLogo from './index'

class MetamaskLogo extends Component {
  componentDidMount() {
    this.viewer = createLogo({
      pxNotRatio: true, // ratio
      width: 150, // set custome  width
      height: 150, // set custome  height
      followMouse: true // mouse event 
    });
    this.el.appendChild(this.viewer.container);
  }

  componentWillUnmount() {
    this.viewer.stopAnimation();
  }

  render() {
    return (
      <div
        ref={el => (this.el = el)}
      />
    );
  }
}

export default MetamaskLogo;