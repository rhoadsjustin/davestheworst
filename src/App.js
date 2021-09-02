import React from "react";
import {
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  StatusBar,
} from "react-native";

const logoUri = require("./dave.jpeg");

const DATA = [
  {
    title: "w/ Silky",
    data: [
      "Houston is making the playoffs",
      "Cowboys going 17-0",
      "Even Kuz would be the new catch phrase",
    ],
  },
  {
    title: "w/ JRhoads",
    data: [
      "Saints making the playoffs",
      "Jameis will have more TD's than Dak",
      "Bishop Sycamore is a good football team",
    ],
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Link(props) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

function App() {
  return (
      <ScrollView style={styles.app}>
        <View style={styles.headerImage}>
          <Image
            accessibilityLabel="React logo"
            source={{ uri: logoUri }}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>Dave's the worst</Text>
        </View>
        <SafeAreaView style={styles.container}>
          <Text style={styles.sectionTitle}>Burger Bets</Text>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    backgroundColor: 'rgb(134, 147,151)'
  },
  headerImage: {
    padding: 20,
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  logo: {
    height: 150,
  },
  headerTitle: {
    fontSize: 40,
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  sectionTitle: {
    fontSize: 32,
    alignSelf: "center",
    paddingBottom: 10
  },
  item: {
    backgroundColor: "#rgb(255, 255, 255)",
    padding: 20,
    marginVertical: 8,
    borderRadius: 10
  },
  header: {
    padding: 20,
    fontSize: 32,
    backgroundColor: "rgb(0, 51, 141)",
    borderRadius: 10
  },
  title: {
    fontSize: 24,
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center",
  },
  link: {
    color: "#1B95E0",
  },
  code: {
    fontFamily: "monospace, monospace",
  },
});

export default App;
