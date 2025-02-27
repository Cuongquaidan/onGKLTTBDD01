import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    Pressable,
} from "react-native";
import React, { useState } from "react";

import { useAuth } from "./context/authContext";
const Add = ({ navigation, route }) => {
    const notes = route.params?.notes;
    const note = route.params?.note;
    const { user, setUser } = useAuth();
    const [content, setContent] = useState(note?.content || "");

    const handleAdd = async () => {
        if (!content) {
            alert("Note khong duoc rong");
            return;
        }

        try {
            const response = await fetch(
                "https://6710cfdca85f4164ef2f6c45.mockapi.io/api/notes",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ content: content }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to submit job");
            }

            const data = await response.json();
            const updatedNotes = [
                ...notes,
                { id: notes.length + 1, content: content },
            ];

            // Navigate to "Manage" screen after successful submission
            navigation.navigate("Manage", { notes: updatedNotes });
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdate = async () => {
        if (!content) {
            alert("Note khong duoc rong");
            return;
        }

        try {
            console.log(note.id);
            const response = await fetch(
                `https://6710cfdca85f4164ef2f6c45.mockapi.io/api/notes/${note.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ content: content, id: note.id }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to update node");
            }

            const data = await response.json();
            const updatedNotes = notes.map((item) =>
                item.id == note.id ? { id: note.id, content } : item
            );
            console.log(updatedNotes);
            // Navigate to "Manage" screen after successful submission
            navigation.navigate("Manage", { notes: updatedNotes });
        } catch (err) {
            console.error(err);
        }
    };

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
                <Pressable onPress={() => navigation.navigate("Manage")}>
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
                    {note ? "Update note" : "ADD YOUR NOTE"}
                </Text>
                <TextInput
                    style={{
                        padding: 10,
                        width: 300,
                        borderRadius: 10,
                        borderWidth: 1,
                    }}
                    placeholder="Input your note"
                    value={content}
                    onChangeText={(value) => setContent(value)}
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
                    onPress={note ? handleUpdate : handleAdd}
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
