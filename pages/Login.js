import { View, Text, Button, StyleSheet, TextInput} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

 export default function Login ({navigation}){

    return(
        <View style={styles.container}>

            <View style={styles.innerContainer}>

                 <View style={styles.input} >
                    <View style={styles.inputBoxes}>
                        <Text style={styles.requireMsg}>Email:</Text><TextInput style={styles.inputBox} placeholder='Enter email' id='email'/>
                    </View>
                    <View style={styles.inputBoxes}>
                        <Text style={styles.requireMsg}>Password:</Text><TextInput style={styles.inputBox} placeholder='Enter password' secureTextEntry id='password'/>
                    </View>
                    <Button title="submit" onPress={() => navigation.navigate("Dashboard")}/>
                 </View>
             </View>
            
        </View>

    )
 }

 const styles = StyleSheet.create({
   container: {
     alignItems: "center",
     justifyContent: "center",
     flex: 1,
     backgroundColor: "#f5f5f5",
   },
   innerContainer: {
     backgroundColor: "white",
     width: "30vw",
     height: "80vh",
     padding: ".7em",
      borderRadius:'0.2em',
     shadowColor: "#000",
       shadowOffset: {
     width: 0,
     height: 2,
        },
     shadowOpacity: 0.25,
     shadowRadius: 3.84, 
   },

   inputBoxes: {
     flexDirection: "row",
     justifyContent: "space-between",
     marginBottom: "0.5em",
   },

   inputBox: {
      borderWidth: "0.1em",
     borderColor: "#696969",
      borderRadius: "0.2em",
     color: "#8a8a8a",
     marginRight: "11em",
   },
 });