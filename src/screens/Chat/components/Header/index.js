import React, { memo } from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  Image,
} from "react-native";
import { scaleHeight, scaleWidth } from "../../../../utils/size";
import ROUTES from "../../../../utils/routes";
import { useNavigation } from "@react-navigation/native";
import { Title } from "react-native-paper";
import commonStyles from "../../../../../commonStyles";

const HeaderLogo = memo((props) => {
  const { title, children, linkToHome, image, nome } = props;

  const { navigate } = useNavigation();

  const onPress = () => {
    if (linkToHome) {
      navigate(ROUTES.Home);
    }
  };

  return (
    <Pressable onPress={() => {}}>
      <View style={styles.container}>
        {/* <SvgLogo style={styles.logo} /> */}
        {/* <SvgBackArrow color={commonStyles.colors.textButtons} style={{marginHorizontal:10}} /> */}
        <Image
          style={{
            height: 50,
            width: 50,
            borderRadius: 75,
            marginLeft:'20%',
            marginRight: 15
          }}
          source={image}
        />
        <Title style={{ color: commonStyles.colors.textButtons }}>{nome}</Title>
      </View>
    </Pressable>
  );
});

export default HeaderLogo;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // top:40,
    borderBottomWidth:2,
    height: scaleHeight(60),
  },
  logo: {
    marginLeft: Platform.OS === "ios" ? 0 : scaleWidth(-50),
  },
});
