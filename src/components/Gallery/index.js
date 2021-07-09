import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Card } from "react-native-paper";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#363636",
    flex: 1,
  },
  drawerMenuIcon: {
    top: "-50%",
    right: "-90%",
  },
  textImage: {
    paddingHorizontal: "10%",
    top: 5,
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    textDecorationLine: "underline",
  },
});

export default ({ DATA }) => {
  return (
    <>
      {DATA.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <View style={{ flexDirection: "row" }}>
              <Card
                style={{
                  marginBottom: 10,
                  marginLeft: 5,
                  marginRight: 5,
                  elevation: 4,
                  backgroundColor: "#626262",
                  flex: 1,

                  marginHorizontal: 30,
                }}
              >
                <Card.Content>
                  <Card.Cover
                    source={item.uri}
                    style={[
                      {
                        width: 125,
                        height: 150,
                        resizeMode: "contain",
                        marginHorizontal: 5,
                      },
                      parseInt(index + 1, 10) <= DATA.length - 1 &&
                      parseInt(index, 10) % 2 === 0 &&
                      item?.uri
                        ? {
                            aspectRatio: 1.0,
                          }
                        : {
                            aspectRatio: 1.5,
                            alignSelf: "center",
                          },
                    ]}
                  />
                  <Text style={styles.textImage}>{item.name}</Text>
                </Card.Content>
              </Card>
              {parseInt(index + 1, 10) < DATA.length && DATA[index + 1]?.uri ? (
                <Card
                  style={{
                    marginBottom: 10,
                    marginLeft: 5,
                    marginRight: 5,
                    elevation: 4,
                    backgroundColor: "#626262",
                    flex: 1,
                    marginHorizontal: 30,
                  }}
                >
                  <Card.Content>
                    <Card.Cover
                      source={DATA[index + 1]?.uri}
                      style={{
                        width: 125,
                        height: 150,
                        aspectRatio: 1.0,
                        resizeMode: "contain",
                        marginHorizontal: 5,
                        alignSelf: "center",
                      }}
                    />
                    <Text style={styles.textImage}>{DATA[index + 1].name}</Text>
                  </Card.Content>
                </Card>
              ) : (
                false
              )}
            </View>
          );
        }

        return false;
      })}
    </>
  );
};
