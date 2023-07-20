import React, { Component } from 'react';
import ModelViewer from '@metamask/logo'

class MetamaskLogo extends Component {
    componentDidMount() {
        this.viewer = ModelViewer({
            pxNotRatio: true,
            width: 100,
            height: 100,
            followMouse: true,
            slowDrift: false,
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