import {
    View,
    Text,
    SafeAreaView,
    Pressable,
    Image,
    TextInput,
} from "react-native";
import React from "react";
const notes = [
    {
        id: 1,
        content: "Play football",
    },
    {
        id: 2,
        content: "Play game",
    },
];
const Manage = ({ navigation, route }) => {
    return (
        <SafeAreaView style={{ padding: 20, alignItems: "center" }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                }}
            >
                <Pressable onPress={() => navigation.navigate("Home")}>
                    {"<--"}
                </Pressable>
                <View style={{ flexDirection: "row", gap: 10 }}>
                    <Image
                        source={require("./assets/note.png")}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 999,
                            overflow: "hidden",
                            borderWidth: 1,
                        }}
                    ></Image>
                    <View>
                        <Text style={{ fontWeight: 600 }}>Hi Name</Text>
                        <Text>have a great day a head</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 50, alignItems: "center", gap: 30 }}>
                <TextInput
                    style={{
                        padding: 10,
                        width: 300,
                        borderRadius: 10,
                        borderWidth: 1,
                    }}
                    placeholder="Search"
                ></TextInput>
                <View style={{ gap: 20 }}>
                    {notes.map((note) => (
                        <View
                            key={note.id}
                            style={{
                                width: 300,
                                borderRadius: 10,
                                borderWidth: 1,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: 10,
                                backgroundColor: "#ddd",
                            }}
                        >
                            <Text style={{ fontWeight: 700 }}>
                                {note.content}
                            </Text>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <Text style={{ color: "red" }}>Delete</Text>
                                <Text style={{ color: "orange" }}>Update</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <Pressable
                    style={{
                        backgroundColor: "#00BDD6",
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: 10,
                    }}
                >
                    <Text style={{ fontSize: 40, color: "white" }}>+</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default Manage;
