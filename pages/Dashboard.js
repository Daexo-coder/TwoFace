import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Modal,
  Button,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";

export default function Dashboard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [comment, setComment] = useState("");
  const [count, setCount] = useState(0);

  const sendComment = () => {
    console.log("Comment sent:", comment);
    setCount(count + 1);
    setComment("");
    setModalVisible(false);
  };

  const [modalVisible2, setModalVisible2] = useState(false);
  const [comment2, setComment2] = useState("");
  const [count2, setCount2] = useState(0);

  const sendComment2 = () => {
    console.log("Comment sent:", comment2);
    setCount2(count2 + 1);
    setComment2("");
    setModalVisible2(false);
  };

  const [modalVisible3, setModalVisible3] = useState(false);
  const [comment3, setComment3] = useState("");
  const [count3, setCount3] = useState(0);

  const sendComment3 = () => {
    console.log("Comment sent:", comment3);
    setCount3(count3 + 1);
    setComment3("");
    setModalVisible3(false);
  };

  const [likes, setLikes] = useState(0);
  const increaseLikes = () => setLikes(likes + 1);

  const [likes2, setLikes2] = useState(0);
  const increaseLikes2 = () => setLikes2(likes2 + 1);

  const [likes3, setLikes3] = useState(0);
  const increaseLikes3 = () => setLikes3(likes3 + 1);

  const screenHeight = Dimensions.get("window").height;

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.slide}>
          <View style={styles.topview}>
            <Text style={styles.facebook}>facebook</Text>
            <View style={styles.icons}>
              <Ionicons name="home" size={19} color="white" />
              <Ionicons name="people-sharp" size={19} color="white" />
              <Entypo name="message" size={19} color="white" />
              <Ionicons name="notifications-circle" size={19} color="white" />
              <FontAwesome5 name="tv" size={19} color="white" />
              <MaterialCommunityIcons
                name="town-hall"
                size={19}
                color="white"
              />
            </View>
          </View>

          <View style={styles.headerBox}>
            <View style={styles.status}>
              <Image source={require("../person1.jpg")} style={styles.photo} />
            </View>
            <View style={styles.status}>
              <Image source={require("../person2.jpg")} style={styles.photo} />
            </View>
            <View style={styles.status}>
              <Image source={require("../person3.jpg")} style={styles.photo} />
            </View>
            <View style={styles.status}>
              <Image source={require("../person4.jpg")} style={styles.photo} />
            </View>
            <View style={styles.status}>
              <Image source={require("../person5.avif")} style={styles.photo} />
            </View>
            <View style={styles.status}>
              <Image source={require("../person6.jpg")} style={styles.photo} />
            </View>
            <View style={styles.status}>
              <Image source={require("../person7.avif")} style={styles.photo} />
            </View>
          </View>

          {/* Section 1 */}
          <View style={styles.section}>
            <View style={styles.personProfile}>
              <View style={styles.personPhoto}>
                <Image
                  source={require("../personProfile1.jpg")}
                  style={styles.personImageStyles}
                />
              </View>
              <View style={styles.personName}>
                <Text style={styles.names}>Biufa Styles</Text>
                <Text style={styles.timePosted}>19 Mar 2023</Text>
              </View>
              <Text style={styles.threeDots}>...</Text>
            </View>

            <Text style={styles.smallPost}>
              Welcome to my timeline, I love music, dancing, partying, football,
              acting—all I can say is I love to have fun.
            </Text>

            <View style={styles.post}>
              <Text style={styles.textPost}>Ke rata lijo!!!</Text>
            </View>
            <View style={styles.icons2}>
              <TouchableOpacity style={styles.button} onPress={increaseLikes}>
                <AntDesign name="like2" size={24} color="white" />
                <Text style={styles.smallPost}>{likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible(true)}
              >
                <EvilIcons name="comment" size={24} color="white" />
                <Text style={styles.smallPost}>{count}</Text>
              </TouchableOpacity>

              <Modal
                visible={modalVisible}
                onRequestClose={() => {
                  setModalVisible(false);
                }}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <TextInput
                      placeholder="Add your comment..."
                      value={comment}
                      onChangeText={setComment}
                      style={styles.modalInput}
                    />
                    <Button title="Send" onPress={sendComment} />
                  </View>
                </View>
              </Modal>

              <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="share" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Section 2 */}
          <View style={styles.section}>
            <View style={styles.personProfile}>
              <View style={styles.personPhoto}>
                <Image
                  source={require("../person2.jpg")}
                  style={styles.personImageStyles}
                />
              </View>
              <View style={styles.personName}>
                <Text style={styles.names}>ABG P Lichaba</Text>
                <Text style={styles.timePosted}>09 May 2021</Text>
              </View>
              <Text style={styles.threeDots}>...</Text>
            </View>

            <Text style={styles.smallPost}>
              At times, times are just time. Not much we can do, but we can just
              be happy.
            </Text>

            <View style={styles.imagePostContainer}>
              <Image
                source={require("../post2.jpg")}
                style={styles.imagePost}
              />
            </View>
            <View style={styles.icons2}>
              <TouchableOpacity style={styles.button} onPress={increaseLikes2}>
                <AntDesign name="like2" size={24} color="white" />
                <Text style={styles.smallPost}>{likes2}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible2(true)}
              >
                <EvilIcons name="comment" size={24} color="white" />
                <Text style={styles.smallPost}>{count2}</Text>
              </TouchableOpacity>

              <Modal
                visible={modalVisible2}
                onRequestClose={() => {
                  setModalVisible2(false);
                }}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <TextInput
                      placeholder="Add your comment..."
                      value={comment2}
                      onChangeText={setComment2}
                      style={styles.modalInput}
                    />
                    <Button title="Send" onPress={sendComment2} />
                  </View>
                </View>
              </Modal>
              <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="share" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Section 3 */}
          <View style={styles.section}>
            <View style={styles.personProfile}>
              <View style={styles.personPhoto}>
                <Image
                  source={require("../person4.jpg")}
                  style={styles.personImageStyles}
                />
              </View>
              <View style={styles.personName}>
                <Text style={styles.names}>Biufa Styles</Text>
                <Text style={styles.timePosted}>19 Mar 2023</Text>
              </View>
              <Text style={styles.threeDots}>...</Text>
            </View>

            <Text style={styles.smallPost}>What a meme!!!</Text>

            <View style={styles.imagePostContainer}>
              <Image
                source={require("../post3.jpg")}
                style={styles.imagePost}
              />
            </View>
            <View style={styles.icons2}>
              <TouchableOpacity style={styles.button} onPress={increaseLikes3}>
                <AntDesign name="like2" size={24} color="white" />
                <Text style={styles.smallPost}>{likes3}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setModalVisible3(true)}
              >
                <EvilIcons name="comment" size={24} color="white" />
                <Text style={styles.smallPost}>{count3}</Text>
              </TouchableOpacity>

              <Modal
                visible={modalVisible3}
                onRequestClose={() => {
                  setModalVisible3(false);
                }}
              >
                <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <TextInput
                      placeholder="Add your comment..."
                      value={comment3}
                      onChangeText={setComment3}
                      style={styles.modalInput}
                    />
                    <Button title="Send" onPress={sendComment3} />
                  </View>
                </View>
              </Modal>
              <TouchableOpacity style={styles.button}>
                <FontAwesome5 name="share" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "rgb(17, 18, 19)",
    width: "100%",
  },
  slide: {
    flex: 1,
  },
  topview: {
    width: "100%",
    height: 60,
    backgroundColor: "black",
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "rgba(250, 245, 245, 0.726)",
    paddingTop: 5,
  },
  facebook: {
    fontSize: 24,
    color: "white",
    textAlign: "center",
  },
  headerBox: {
    height: 100,
    flexDirection: "row",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  status: {
    width: 70,
    height: 80,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "blue",
    borderRadius: 10,
  },
  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  section: {
    padding: 20,
  },
  personProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  personPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  personImageStyles: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  personName: {
    flex: 1,
  },
  names: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  timePosted: {
    color: "#8a8a8a",
    fontSize: 12,
  },
  threeDots: {
    fontSize: 24,
    color: "white",
  },
  smallPost: {
    color: "white",
    marginBottom: 10,
  },
  post: {
    backgroundColor: "#333",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  textPost: {
    color: "white",
    fontSize: 16,
  },
  icons2: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.315)",
    borderRadius: 10,
    padding: 5,
  },
  imagePostContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  imagePost: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  modalInput: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});
