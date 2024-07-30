import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Shahada } from "../components/pages/shahada/Shahada.jsx";
import { Tasbihat } from "../components/pages/tasbihat/Tasbihat.jsx";
import { Sur } from "../components/pages/sur/Sur.jsx";
import Prayer from "../components/pages/dua/Prayer.jsx";
import { Javshan } from "../components/pages/javshan/Javshan.jsx";
import Tafrijia from "../components/pages/tafrijia/Tafrijia.jsx";
import { Fajr } from "../components/pages/fajr/Fajr.jsx";
import { Zuhr } from "../components/pages/zuhr/Zuhr.jsx";
import { Asr } from "../components/pages/asr/Asr.jsx";
import { Isha } from "../components/pages/isha/Isha.jsx";
import { Magrib } from "../components/pages/magrib/Magrib.jsx";
import React from "react";
import { Bab } from "../components/pages/javshan/Bab/Bab.jsx";
// Импорт Суры
import Al_Fatiha from "../components/pages/SurScreens/Al_Fatiha.jsx";
import Al_Asr from "../components/pages/SurScreens/Al_Asr.jsx";
import Al_Masad from "../components/pages/SurScreens/Al_Masad.jsx";
import Al_Ihlas from "../components/pages/SurScreens/Al_Ihlas.jsx";
import Al_Nasr from "../components/pages/SurScreens/An_Nasr.jsx";
import Al_Kafirun from "../components/pages/SurScreens/Al_Kafirun.jsx";
import Al_Kavsar from "../components/pages/SurScreens/Al_Kavsar.jsx";
import Al_Maun from "../components/pages/SurScreens/Al_Maun.jsx";
import AlFalak from "../components/pages/SurScreens/Al_Falak.jsx";
import AnNas from "../components/pages/SurScreens/AnNas.jsx";
import Al_Humaza from "../components/pages/SurScreens/Al_Humaza.jsx";
import Al_Fil from "../components/pages/SurScreens/Al_Fil.jsx";
import Kuraysh from "../components/pages/SurScreens/Kuraysh.jsx";

const Stack = createNativeStackNavigator();
const screens = [
  { name: "Shahada", title: "ШАХАДА", component: Shahada },
  { name: "Tasbihat", title: "ТАСБИХАТ", component: Tasbihat },
  { name: "Sur", title: "СУРЫ", component: Sur },
  { name: "Prayer", title: "МОЛИТВЫ", component: Prayer },
  { name: "Javshan", title: "ЖАВШАН", component: Javshan },
  { name: "Tafrijia", title: "ТАФРИЖИЯ", component: Tafrijia },
  { name: "Fajr", title: "ФАДЖР", component: Fajr },
  { name: "Zuhr", title: "ЗУХР", component: Zuhr },
  { name: "Asr", title: "АСР", component: Asr },
  { name: "Magrib", title: "МАГРИБ", component: Magrib },
  { name: "Isha", title: "ИША", component: Isha },
  { name: "al-Fatiha", title: "СУРЫ", component: Al_Fatiha },
  { name: "al-Asr", title: "СУРЫ", component: Al_Asr },
  { name: "al-Falak", title: "СУРЫ", component: AlFalak },
  { name: "Bab", title: "ЖАВШАН", component: Bab },
  { name: "anNas", title: "СУРЫ", component: AnNas },
  { name: "alHumaza", title: "СУРЫ", component: Al_Humaza },
  { name: "al-Fil", title: "СУРЫ", component: Al_Fil },
  { name: "Kuraysh", title: "СУРЫ", component: Kuraysh },
  { name: "al-Maun", title: "СУРЫ", component: Al_Maun },
  { name: "al-Kavsar", title: "СУРЫ", component: Al_Kavsar },
  { name: "al-Kafirun", title: "СУРЫ", component: Al_Kafirun },
  { name: "an-Nasr", title: "СУРЫ", component: Al_Nasr },
  { name: "al-Masad", title: "СУРЫ", component: Al_Masad },
  { name: "al-Ihlas", title: "СУРЫ", component: Al_Ihlas },
];

function MenuNavigate() {
  return (
    <Stack.Navigator>
      {screens.map((item, index) => {
        return (
          <Stack.Screen
            name={item.name}
            key={index}
            component={item.component}
            options={{
              headerShadowVisible: true,
              title: item.title,
              headerStyle: {
                backgroundColor: "#2E0A30",
              },
              headerTitleAlign: "center",
              headerTitleStyle: { color: "white" },
              headerTintColor: "white",
            }}
          />
        );
      })}
    </Stack.Navigator>
  );
}

export default MenuNavigate;