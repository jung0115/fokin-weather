import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const weatherOptions = {
	Clear: {
		iconName: 'sunny',
		gradient: ["#fdc830", "#f37335"],
		title: 'Sunny',
		subtitle: "It's a nice day to go outside."
	},
	Thunderstorm: {
		iconName: 'thunderstorm',
		gradient: ['#4286f4', '#373B44'],
		title: "Thunderstorm",
		subtitle: "It's dangerous day. Don't go out."
	},
	Drizzle: {
		iconName: 'rainy-outline',
		gradient: ['#f2fcfe', '#1c92d2'],
		title: "Drizzle",
		subtitle: "If you want, take your umbrella."
	},
	Rain: {
		iconName: 'rainy',
		gradient: ['#9CECFB', '#65C7F7', '#0052D4'],
		title: "Rainy",
		subtitle: "Take your umbrella!!!"
	},
	Snow: {
		iconName: 'snow',
		gradient: ['#E0EAFC', '#CFDEF3'],
		title: "Snow",
		subtitle: "Let's make a snowman!"
	},
	Atmosphere: {
		iconName: 'ellipse',
		gradient: ['#86fde8', '#acb6e5'],
		title: "Atmosphere",
		subtitle: "Do what you want to do."
	},
	Clouds: {
		iconName: 'cloudy',
		gradient: ['#4ECDC4', '#556270'],
		title: "Cloudy",
		subtitle: "Not good and not bad. Take a rest."
	},
	Mist: {
		iconName: 'cloud-outline',
		gradient: ['#eef2f3', '#8e9eab'],
		title: "MIst",
		subtitle: "You can't see well. Drive carefully!"
	},
	Smoke: {
		iconName: 'cloud-circle-outline',
		gradient: ['#d7d2cc', '#304352'],
		title: "Smoke",
		subtitle: "You'd better not go out."
	},
	Haze: {
		iconName: 'filter-outline',
		gradient: ['#fdbb2d', '#b21f1f', '#1a2a6c'],
		title: "Haze",
		subtitle: "Perhaps you don't want to go outside."
	},
	Dust: {
		iconName: 'md-ellipsis-horizontal-outline',
		gradient: ['#9bc5c3', '#616161'],
		title: "Dust",
		subtitle: "You must wear a mask. Atmosphere is too bad."
	},
	Fog: {
		iconName: 'cloudy-outline',
		gradient: ['#EFEFBB', '#D4D3DD'],
		title: "Fog",
		subtitle: "You can't see well. Drive carefully!"
	},
	Sand: {
		iconName: 'md-ellipsis-horizontal-outline',
		gradient: ['#EFEFBB', '#D4D3DD'],
		title: "Sand",
		subtitle: "You can't see well. Drive carefully!"
	},
	Ash: {
		iconName: 'ios-remove-circle-sharp',
		gradient: ['#606c88', '#3f4c6b'],
		title: "Ash",
		subtitle: "You'd better not go out."
	},
	Squall: {
		iconName: 'at-circle-outline',
		gradient: ['#3498db', '#2c3e50'],
		title: "Squall",
		subtitle: "Get out if you want to fly."
	},
	Tornado: {
		iconName: 'aperture',
		gradient: ['#0b8793', '#360033'],
		title: "Tornado",
		subtitle: "Stay in a safe place."
	}
};

export default function Weather({temp, condition}){
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfcontainer}>
				<Ionicons
					size={92}
					name={weatherOptions[condition].iconName}
					color='white'
				/>
				<Text style={styles.temp}>{temp}&deg;</Text>
			</View>
			<View style={{...styles.halfcontainer, ...styles.textContainer}}>
				<Text style={styles.title}>{weatherOptions[condition].title}</Text>
				<Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: PropTypes.number.isRequired,
	condition: PropTypes.oneOf([
		"Clear",
		"Thunderstorm",
		"Drizzle",
		"Rain",
		"Snow",
		"Atmosphere",
		"Clouds",
		"Mist",
		"Smoke",
		"Haze",
		"Dust",
		"Fog",
		"Sand",
		"Ash",
		"Squall",
		"Tornado"
		]).isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	temp: {
		fontSize: 40,
		color: 'white'
	},
	halfcontainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	title: {
		color: "white",
		fontSize: 44,
		fontWeight: "300",
		marginBottom: 10
	},
	subtitle: {
		color: "white",
		fontSize: 24,
		fontWeight: "600"
	},
	textContainer: {
		paddingHorizontal: 20,
		alignItems: "flex-start"
	}
});