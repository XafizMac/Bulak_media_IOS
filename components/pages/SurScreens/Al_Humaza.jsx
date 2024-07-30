import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import SurSample from "../../molecules/sur-sample/SurSample";
import { useLanguageState } from "../../../states/language/useLanguageState";

const arabicText = `بِسْمِ اللّهِ الرَّحْمنِ الرَّحِيمِ
(1). وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ
(2). الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ
(3). يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ
(4). كَلَّا لَيُنبَذَنَّ فِي الْحُطَمَةِ
(5). وَمَا أَدْرَاكَ مَا الْحُطَمَةُ
(6). نَارُ اللَّهِ الْمُوقَدَةُ
(7). الَّتِي تَطَّلِعُ عَلَى الْأَفْئِدَةِ
(8). إِنَّهَا عَلَيْهِم مُّؤْصَدَةٌ
(9). فِي عَمَدٍ مُّمَدَّدَةٍ`;

const rusText = `БисмиЛЛааҳир - Рохмаанир - Рохиим.
(1). Уайлул-ликулли ҳумазатил - лумазаҳ
(2). 'Аллазии жама-ъа маала у-уа ъаддадаҳ
(3). Йахсабу 'анна маалаҳуу 'ахладаҳ
(4). Калла ла-йумбазанна фил-Хутомаҳ
(5). Уа маааа'адроока мал-Хутомаҳ
(6). Наару-ЛЛооҳил-мууқодаҳ
(7). 'Аллятии таттоли-ъу ъалаль -'аф-'идаҳ
(8). 'Иннаҳаа ъалайхим-му'содаҳ
(9). Фии ъамадим-мумаддадаҳ`;

const meaningKgText = `(1). Тили жана кыймыл-аракети менен кайбат кылуучуга азап болсун!
(2). Ал мал-дүйнө топтоп, аны санады
(3). Топтогон мал-дүйнөсү аны түбөлүктүү кылат деп ойлойт
(4). Жок! (Андай болбойт) ал сөзсүз "быркыратуучуга" (тозокко) ыргытылат
(5). "Быркыратуучу" эмне экенин билесиңерби?
(6). Ал Аллахтын жагылган оту
(7). Ал (денени көзөп өтүп) жүрөктөргө чейин жетет
(8). Албетте, ал алардын үстүнө жабылат
(9). Тартылган устундардын ичинде (болушат)`;

const meaningRusText = `(1). Горе всякому хулителю и обидчику,
(2). который копит состояние и подсчитывает его,
(3). думая, что богатство увековечит его
(4). О нет! Он будет ввергнут в Огонь сокрушающий
(5). Откуда ты мог знать, что такое Огонь сокрушающий?
(6). Это – разожженный Огонь Аллаха,
(7). который вздымается над сердцами
(8). Он сомкнется над ними
(9). высокими столбами`;

export default function Al_Humaza() {
  const { lang } = useLanguageState();

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <SurSample
            title={lang === "kg" ? "ХУМАЗА СҮРӨӨСҮ" : "аль-Хумаза"}
            arabicText={arabicText}
            rusText={rusText}
            meaningText={lang === "kg" ? meaningKgText : meaningRusText}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: "100%",
    backgroundColor: "#2E0A30",
  },
  container: {
    paddingHorizontal: 12,
    paddingBottom: 130,
    paddingTop: 20,
  },
});
