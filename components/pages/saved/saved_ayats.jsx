import { useEffect, useState } from "react";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import useStore from "../../../store/store";
import AntDesign from "@expo/vector-icons/AntDesign";

export const SavedAyat = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const [text, setText] = useState("");
    const folder = useStore((state) => state.folder);
    const addFolder = useStore((state) => state.addFolder);
    const getFolder = useStore((state) => state.getFolder);
    const deleteFolder = useStore((state) => state.deleteFolder);

    useEffect(() => {
        getFolder();
    }, [folder]);

    const handleAddFolder = () => {
        if (text) {
            addFolder(text);
            setText("");
            // getFolder();
        } else {
            return false;
        }
    };

    const handleNavigateToSavedAyat = (name) => {
        navigation.navigate("ayatfolder", { folderName: name });
    };

    return (
        <View style={styles.main}>
            <SafeAreaView>
                <View style={styles.container}>
                    <Text style={styles.pageTitle}>Закладка</Text>
                    <View style={styles.addFolder}>
                        <Feather name="folder-plus" size={28} color="#F2BB4A" />
                        <TextInput
                            onChangeText={setText}
                            cursorColor={"#F2BB4A"}
                            value={text}
                            maxLength={100}
                            style={{
                                fontFamily: "Medium",
                                color: "#F2BB4A",
                                fontSize: 16,
                                flexGrow: 1,
                            }}
                            placeholderTextColor="#F2BB4A"
                            placeholder="Добавить новую закладку"
                        />
                        <TouchableOpacity onPress={handleAddFolder}>
                            <AntDesign name="pluscircle" size={28} color="#F2BB4A" />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <View
                            style={{
                                gap: 16,
                            }}
                        >
                            {folder.map((item, index) => {
                                return (
                                    <View
                                        key={index}
                                        style={{
                                            display: "flex",
                                            width: "100%",
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={() => handleNavigateToSavedAyat(item.name)}
                                            style={{ width: "90%" }}
                                            key={index}
                                        >
                                            <View style={styles.folderLeftSide}>
                                                <Feather name="folder" size={25} color="#F2BB4A" />
                                                <View style={{ gap: 5 }}>
                                                    <Text style={styles.folderName}>{item.name}</Text>
                                                    <Text style={styles.amountOfAyats}>
                                                        {item?.ayat?.length} аятов
                                                    </Text>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => deleteFolder(item.name)}>
                                            <Feather name="trash" size={24} color="#F2BB4A" />
                                        </TouchableOpacity>
                                    </View>
                                );
                            })}
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        width: "100%",
        backgroundColor: "#2E0A30",
        height: "100%",
    },
    container: {
        paddingHorizontal: 12,
        paddingTop: 20,
        gap: 25,
    },
    pageTitle: {
        color: "white",
        fontFamily: "Bold",
        fontSize: 24,
    },
    addFolder: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        gap: 10,
    },
    modalContent: {
        flexDirection: "column",
        width: "95%",
        gap: 20,
        backgroundColor: "#461151",
        padding: 20,
        borderRadius: 10,
    },
    content: {
        marginTop: 20,
    },
    input: {
        color: "white",
        fontFamily: "Medium",
        textAlign: "left",
        borderBottomWidth: 0.5,
        borderStyle: "solid",
        borderBottomColor: "#fff",
        paddingVertical: 10,
        fontSize: 16,
        width: "100%",
        alignSelf: "center",
    },
    folderLeftSide: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    folderName: {
        color: "#fff",
        fontFamily: "Medium",
        fontSize: 16,
    },
    amountOfAyats: {
        color: "#fff",
        fontSize: 14,
    },
});
