import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Share
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import useStore from "../../../store/store";
import { BottomModal, ModalContent } from "react-native-modals";
import Entypo from '@expo/vector-icons/Entypo';
import Checkbox from 'expo-checkbox';

const Ayah = ({ arabicText, index, meaningText, translation, info }) => {
  const [saveAyah, setSaveAyah] = useState(false);
  const addAyat = useStore((state) => state.addAyat);
  const [saveSurModalVisible, setSaveSurModalVisible] = useState(false)
  const getFolders = useStore((state) => state.getFolder);
  const folder = useStore((state) => state.folder);
  const [isChecked, setChecked] = useState(false);
  
  // play 
  const playAyat = async () => {

  }
  // share
  const shareAyat = async () => {
    try {
      const message =
        `Сура - ${info.namaLatin}
Аят - ${index + 1}

${arabicText}

${meaningText}

Скачать приложение Булак Медиа👇
https://github.com/Xafizmac`;

      const shareOptions = {
        message,
      };
      await Share.share(shareOptions);
    }
    catch (err) {
      console.log(err);
    }
  }

  // add
  const saveAyat = () => {
    setSaveSurModalVisible(true);
    // addAyat("Название");
  }

  // delete
  const deleteAyat = async () => {
    try {

    }
    catch (e) { }
  }

  return (
    <View style={styles.button}>
      <View style={styles.content}>
        <View style={styles.numberCirlce}>
          <Text style={styles.number}>{index + 1}</Text>
        </View>
        <View style={styles.specificIcons}>
          <TouchableOpacity onPress={() => playAyat()}>
            <Entypo name="controller-play" size={24} color="#F2BB4A" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => shareAyat()}>
            <AntDesign name="sharealt" size={24} color="#F2BB4A" />
          </TouchableOpacity>
          {!saveAyah ? (
            <Pressable onPress={() => saveAyat()}>
              <MaterialIcons name="bookmark-border" size={28} color="#F2BB4A" />
            </Pressable>
          ) : (
            <Pressable onPress={deleteAyat}>
              <MaterialIcons name="bookmark" size={28} color="#F2BB4A" />
            </Pressable>
          )}
        </View>
      </View>
      <View style={{ flexDirection: "column", gap: 12 }}>
        <Text style={styles.arabic}>{arabicText}</Text>
        {translation && <Text style={styles.rus}>{meaningText}</Text>}
      </View>

      <BottomModal
        swipeDirection={["up", "down"]}
        visible={saveSurModalVisible}
        swipeThreshold={200}
        modalTitle={
          <View style={styles.bottomModal}>
            <Text style={styles.modalTitle}>Сохранить</Text>
            <TouchableOpacity onPress={() => setSaveSurModalVisible(false)}>
              <AntDesign name="close" size={28} color="white" />
            </TouchableOpacity>
          </View>
        }
        onTouchOutside={() => setSaveSurModalVisible(false)}
      >
        <ModalContent style={styles.modalContent}>
          <View style={styles.modalContentView}>
            {folder.map((item, index) => {
              return (
                <View style={styles.list} key={index}>
                  <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? '#F2BB4A' : undefined}
                    disabled={false}
                    style={styles.checkbox} />
                  <Text>{item.name}</Text>
                  <Text>{item.ayat.length}</Text>
                </View>
              )
            })}
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default Ayah;

const styles = StyleSheet.create({
  button: {
    flexDirection: "column",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(123, 128, 173, .35)",
    paddingBottom: 30,
  },
  content: {
    backgroundColor: "#461151",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 13,
  },
  numberCirlce: {
    width: 30,
    height: 30,
    backgroundColor: "#F2BB4A",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
  },
  number: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 20,
  },
  arabic: {
    fontFamily: "ArabicMedium",
    color: "white",
    fontSize: 28,
    textAlign: "right",
  },
  rus: {
    color: "white",
    fontFamily: "Medium",
    fontSize: 18,
  },
  specificIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  bottomModal: {
    width: "100%",
    backgroundColor: "#5D2559",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  modalTitle: {
    color: "white",
    fontFamily: "Bold",
    fontSize: 18,
    flexDirection: "column",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#5D2559",
    // height: 'auto',
    width: "100%"
  },
  modalContentView: {
    paddingVertical: 12,
    flexDirection: "column",
    gap: 16,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center"
  },
  checkbox: {
    width: 25,
    height: 25,
    borderRadius: "20%",
    borderColor: "#F2BB4A"
  },
});
