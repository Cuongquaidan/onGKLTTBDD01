import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    Pressable,
} from "react-native";
import React from "react";

import { useAuth } from "./context/authContext";
const Add = () => {
    const { user, setUser } = useAuth();
    return (
        <SafeAreaView style={{ padding: 20, alignItems: "center" }}>
            <View
                style={{
                    flexDirection: "row-reverse",
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
                        <Text style={{ fontWeight: 600 }}>Hi {user}</Text>
                        <Text>have a great day a head</Text>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 50, alignItems: "center", gap: 30 }}>
                <Text style={{ fontWeight: 700, fontSize: 25 }}>
                    ADD YOUR JOB
                </Text>
                <TextInput
                    style={{
                        padding: 10,
                        width: 300,
                        borderRadius: 10,
                        borderWidth: 1,
                    }}
                    placeholder="Input your job"
                ></TextInput>

                <Pressable
                    style={{
                        backgroundColor: "#00BDD6",
                        width: 160,
                        height: 50,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingBottom: 10,
                    }}
                >
                    <Text style={{ fontSize: 30, color: "white" }}>Finish</Text>
                </Pressable>

                <Image
                    source={require("./assets/note.png")}
                    style={{ width: 200, height: 200, marginTop: 50 }}
                ></Image>
            </View>
        </SafeAreaView>
    );
};

export default Add;
