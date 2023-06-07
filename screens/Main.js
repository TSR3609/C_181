import {React,Component} from 'react';
import {StyleSheet,Text,View,SafeAreaView,Platform,Image,ScrollView,TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera'
import * as FaceDetector from 'expo-face-detector'
export default class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasCameraPermission:null,
            faces:[]
        };
        this.onFacesDetected = this.onFacesDetected.bind(this)
    }
    async componentDidMount(){
            const{status} = await Camera.requestPermissionsAsync();
            this.setState({hasCameraPermission:status === "granted"});
    }
    onFacesDetected({faces}){
        this.setState({faces:faces})
    }
}
return(
    <View style = {styles.middleContainer}>
        <Camera style={{flex:1}} type={Camera.Constants.Type.Front} FaceDetectorSettings = {{mode:FaceDetector.Constants.Mode.fast,detectLandmarks:FaceDetector.Constants.Landmarks.all,runClassification:FaceDetector.Constants.Classification.all}}
        onFacesDetected = {this.onFacesDetected}
        onFacesDetectionError = {this.onFacesDetectionError}
        />
    </View>
)