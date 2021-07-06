import React, { Children, memo, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
  Easing
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FONTS from "../../utils/fonts";
import SvgBackArrow from '../../assets/svg/SvgBackArrow'

const BottomModal = memo(({ modalVisible, setModalVisible, content, title }) => {

  const animated = true
  const [showed, setShowed] = useState(false);

  const [animationBackground, setAnimationBackground] = useState(new Animated.Value(0));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const showAnimationBackground = () => {
    Animated.timing(animationBackground, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false
    }).start()
  }

  const dismissModal = () => {
    Animated.timing(animationBackground, {
      toValue: 0,
      duration: 100,
      useNativeDriver: false
    }).start(() => {
      setAnimationBackground(new Animated.Value(0));
      setModalVisible(!modalVisible);
    });
  }

  const animate = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      easing: Easing.elastic(1.1),
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    if (!modalVisible) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 600,
        easing: Easing.elastic(1.1),
        useNativeDriver: true
      }).start();
      setShowed(false);
    } else {

    }
  }, [modalVisible]);

  const _onShow = () => {
    animate();
    if (onShow) onShow();
    setShowed(true);
  }

  const backgroundInterpolation = animationBackground.interpolate({
    inputRange: [0, 1],
    outputRange: ["#66666600", "#66666670"]
  });

  return (
    <KeyboardAvoidingView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={dismissModal}
        onShow={showAnimationBackground}
        statusBarTranslucent={true}
        accessible
        accessibilityViewIsModal
      >
        <Animated.View style={[styles.wrapperModal, {
          backgroundColor: backgroundInterpolation
        }]}>
          <TouchableOpacity activeOpacity={1} style={styles.wrapperModal} onPress={() => dismissModal(false)}>
            <View style={styles.centeredView}>
              <TouchableWithoutFeedback>
                <View style={styles.modalView} accessible accessibilityViewIsModal>
                  <KeyboardAwareScrollView
                    keyboardOpeningTime={100}
                    enableOnAndroid
                    accessible
                    contentContainerStyle={styles.contentContainer}
                  >
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => dismissModal(false)}
                    >
                      <SvgBackArrow color={'purple'} />
                      <Text style={styles.textModalClose}>{' '}Voltar</Text>
                    </Pressable>
                    <ScrollView style={styles.scrollView}>
                      <Text style={styles.textModalTitle}>{title}</Text>
                      {content}
                    </ScrollView>
                  </KeyboardAwareScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>


          </TouchableOpacity>
        </Animated.View>
      </Modal>

    </KeyboardAvoidingView>
  );
});
export default BottomModal;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 20,
  },
  contentContainer: {
    marginBottom: 25
  },
  wrapperModal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  centeredView: {
    marginTop: 100,//scaleHeight(100),
    flex: 1,
    justifyContent: 'flex-end'
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,//scaleHeight(20),
    paddingRight: 35,//scaleWidth(35),
    paddingBottom: 40,//scaleHeight(40),
    paddingLeft: 35,//scaleWidth(35),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textModalClose: {
    fontSize: 16,//scaleHeight(16),
    fontFamily: FONTS.MONTSERRAT.LIGHT,
    color: 'purple',//colors.textPurple,
    fontWeight: "300",
    marginRight: 5
  },
  textModalTitle: {
    fontFamily: FONTS.MULISH.EXTRA,
    fontSize: 18,//scaleHeight(18),
    color: 'purple',//colors.textPurple,
    fontWeight: "bold",
    marginBottom: 10,//scaleHeight(10),
  },
  textModalBody: {
    fontFamily: FONTS.MONTSERRAT.LIGHT,
    fontWeight: "300",
    color: '#666',//colors.gray,
    fontSize: 16,//scaleHeight(16),
  },
});
