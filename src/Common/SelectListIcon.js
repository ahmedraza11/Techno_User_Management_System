import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { blue } from '../Constants/color';

class SelectListIcon extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}

	handleToggle() {
		this.setState({
			active: !this.state.active
		})
	}

	render() {
		return (
			<TouchableOpacity onPress={() => this.handleToggle()}>
				<View styel={styles.container}>
					<Text style={[styles.selector, this.state.active ? styles.active : '']}></Text>
				</View>
			</TouchableOpacity>
		);
	};
};

export default SelectListIcon;

const styles = {
	container: {
		width: 100,
		height: 100
	},
	selector: {
		display: 'flex',
		alignItems: 'center',
		width: 15,
		height: 15,
		borderRadius: 50,
		backgroundColor: 'grey'
	},
	active: {
		backgroundColor: blue
	}
}