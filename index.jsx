import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Clicktainer extends Component {

	componentWillMount() {
		document.body.addEventListener('click', this.handleClick.bind(this))
	}

	componentWillUnmount() {
		document.body.removeEventListener('click', this.handleClick.bind(this))
	}

	handleClick(e) {
		const inside = ReactDOM.findDOMNode(this.wrapper);
		const btnR = ReactDOM.findDOMNode(this.props.btnRef);

		if ((inside && !inside.contains(e.target)) && (btnR && !btnR.contains(e.target))) {
			this.props.onOutsideClick();
		}
	}

	render() {
		return (
			<div style={{display: 'inline-block'}} ref={(inside) => this.wrapper = inside}>
				{this.props.children}
			</div>
		);
	}
}
