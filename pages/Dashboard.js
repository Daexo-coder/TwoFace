import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
import {
  Ionicons,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";

export default function Dashboard() {
  return (
    <View style={styles.container2}>
      <View style={styles.innerContainer2}>
        <View style={styles.topview}>
          <Text style={styles.facebook}>facebook</Text>
          <View style={styles.icons}>
            <Ionicons
              style={styles.iconstyle}
              name="home"
              size={19}
              color="white"
            />
            <Ionicons
              style={styles.iconstyle}
              name="people-sharp"
              size={19}
              color="white"
            />
            <Entypo
              style={styles.iconstyle}
              name="message"
              size={19}
              color="white"
            />
            <Ionicons
              style={styles.iconstyle}
              name="notifications-circle"
              size={19}
              color="white"
            />
            <FontAwesome5
              style={styles.iconstyle}
              name="tv"
              size={19}
              color="white"
            />
            <MaterialCommunityIcons
              style={styles.iconstyle}
              name="town-hall"
              size={19}
              color="white"
            />
          </View>
        </View>
        <View style={styles.headerBox}>

          <View style={styles.statuss}>
            <Image source={require("../person1.jpg")} style={styles.photo} />
          </View>
          <View style={styles.statuss}>
            <Image source={require("../person2.jpg")} style={styles.photo} />
          </View>
          <View style={styles.statuss}>
            <Image source={require("../person3.jpg")} style={styles.photo} />
          </View>
          <View style={styles.statuss}>
            <Image source={require("../person4.jpg")} style={styles.photo} />
          </View>
          <View style={styles.statuss}>
            <Image source={require("../person5.avif")} style={styles.photo} />
          </View>
          <View style={styles.statuss}>
            <Image source={require("../person6.jpg")} style={styles.photo} />
          </View>
          <View style={styles.statuss}>
            <Image source={require("../person7.avif")} style={styles.photo} />
          </View>
        </View>

        <Text style={styles.smallpost}>
          Welcome to my timeline, i love music, dancing, partying, football,
          acting all i can say is i love to have fun.
        </Text>

        <View style={styles.post}>
          <Text style={styles.textPost}>Ke rata lijo!!!</Text>
        </View>
        <View style={styles.icons}>
          <AntDesign
            style={styles.iconstyle}
            name="like2"
            size={24}
            color="white"
          />
          <EvilIcons
            style={styles.iconstyle}
            name="comment"
            size={24}
            color="white"
          />
          <FontAwesome5
            style={styles.iconstyle}
            name="share"
            size={24}
            color="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  innerContainer2: {
    backgroundColor: "#162936",
    width: "25vw",
    height: "80vh",
    padding: ".7em",
    borderRadius: "0.2em",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  headerBox: {
    height: "30%",
    width: "100%",
    borderWidth: "0.01em",
    borderColor: "black",
    padding: ".3em",
    overflowY: "hidden",
    overflowX: "scroll",
    flexDirection: "row",
  },
  profilePhoto: {
    borderWidth: "0.01em",
    borderColor: "black",
    height: "50%",
    width: "22%",
    borderRadius: "100%",
  },

  post: {
    borderWidth: "0.01em",
    borderColor: "#8a8a8a",
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".3em",
  },
  textPost: {
    textAlign: "center",
    textDecorationColor: "lowercase",
    fontWeight: "bold",
    fontSize: "2em",
    color: "white",
  },

  headerstyles: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },

  profilestyles: {
    height: "100%",
    width: "100%",
    objectFit: "contain",
    borderRadius: "100%",
  },

  statuss: {
    height: "90%",
    width: "25%",
    borderWidth: ".03em",
    borderColor: "blue",
    margin: 0,
    borderRadius: "1em",
    marginRight: ".3em",
  },

  photo: {
    width: "100%",
    height: "100%",
    borderRadius: "1em",
  },
  topview: {
    width: "100%",
    height: "10%",
    borderWidth: ".1em",
    borderColor: "white",
  },

  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconstyle: {
    padding: 0,
    marginTop: ".08em",
  },

  facebook: {
    fontSize: "2em",
    fontFamily: "klavika",
    margin: 0,
    color: "white",
  },
  smallpost: {
    color: "white",
  },
});
