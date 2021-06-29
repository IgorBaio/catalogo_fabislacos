import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types"
import { Modal as ModalNative, Animated, Easing, StyleSheet, View, TouchableWithoutFeedback,TouchableOpacity } from 'react-native';

import colors from "@utils/colors";
import { getHeightByPercent, getWidthByPercent } from "@utils/size";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Modal = ({children, isVisible, onShow, animated, onDismiss}) => {

    const [showed, setShowed] = useState(false);

    const [opacity, setOpacity] = useState(new Animated.Value(0));

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
        if(!isVisible){
            Animated.timing(opacity, {
                toValue: 0,
                duration: 600,
                easing: Easing.elastic(1.1),
                useNativeDriver: true
            }).start();
            setShowed(false);
        }else{

        }
    }, [isVisible]);

    const _onShow = () => {
        animate();
        if(onShow) onShow();
        setShowed(true);
    }

    return (
        <ModalNative
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onShow={_onShow}   
            accessible
            accessibilityViewIsModal
            >
            <TouchableOpacity activeOpacity={1} style={styles.modal} onPress={onDismiss}>
                    
                    <TouchableWithoutFeedback>
                        <Animated.View style={[
                                styles.modalContentContainerStyle,
                                animated ? {
                                    opacity,
                                    transform : [
                                        {
                                            scale : opacity.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: [0, 1]
                                            })
                                        }
                                    ]
                                } : null
                            ]}>
                                <KeyboardAwareScrollView
                                    keyboardOpeningTime={100}
                                    enableOnAndroid
                                    accessible
                                    contentContainerStyle={styles.contentContainer}
                                >
                                        {children}
                            </KeyboardAwareScrollView>
                        </Animated.View>
                    </TouchableWithoutFeedback>
            </TouchableOpacity>
        </ModalNative>
    )
}


Modal.propTypes = {
    isVisible: PropTypes.boolean,
    animated: PropTypes.boolean,
}

Modal.defaultProps = {
    animated: true,
    isVisible: false
};

export default Modal;

const styles = StyleSheet.create({
    modal: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(102, 102, 102, 0.7)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContentContainerStyle: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: colors.white,
        justifyContent: "center",
        alignItems: "center",
        width: getWidthByPercent(85),
        maxHeight: getHeightByPercent(85),
    },
    contentContainer: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingVertical: 20,
    }
});