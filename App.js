import { StatusBar } from 'expo-status-bar'; //앱 상태바
import React from 'react';
import {Alert} from 'react-native'; //팝업을 위해
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = '0e41caab424d6f3d1e1dd7234921c3dc'; //날씨 API 받아오기 위함

export default class extends React.Component {
	state = {
		isLoading: true
	};
	getWeather = async(latitude, longitude) => {
		const {
			data: {
				main: { temp },
				weather
			}
		} = await axios.get(
			`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric` //날씨 API 받아오기
		);
		this.setState({
			isLoading: false,
			condition: weather[0].main,
			temp
		});
	};
	getLocation = async() => {
		try {
			await Location.requestPermissionsAsync();
			const { 
				coords: {latitude, longitude}
			} = await Location.getCurrentPositionAsync();
			this.getWeather(latitude, longitude);
		} catch (error) {
			Alert.alert("Can't find you.", "So sad"); //팝업 경고창
		}
	};
	componentDidMount(){
		this.getLocation();
	}
	render() {
		const { isLoading, temp, condition } = this.state;
		return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
	}
}