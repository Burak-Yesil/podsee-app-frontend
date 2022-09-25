import { Dimensions, StyleSheet } from "react-native";

export const Colors = {
	primary: '#55BE96',
	pistachio: '#B2D3C2',
	//primary: "#6840D9",
	primaryLight: "#7FFFD4",
	//primaryLight: "#8F67FF",
	primaryDark: "#3C0095",
	// BLUE
	accent1Light: "#8ED6FF",
	accent1Dark: "#0085BE",
	// PINK
	accent2Light: "#FF61C0",
	accent2Dark: "#BC0063",
	//Others
	urgent: "#ed7286",
	yellow: "#ffc107",
	white: "#fff",
	black: "#000",
};

export const Dim = {
	width: Dimensions.get("window").width,
	height: Dimensions.get("window").height,
	// sm: 5,
	// md: 10,
	// lg: 15,
	// xl: 20,
	// xxl: 40,
};
export const global = StyleSheet.create({
    container:{
        // put reused styles here stuff here 
    }
})