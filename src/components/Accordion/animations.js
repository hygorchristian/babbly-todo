import { Animated, Easing } from 'react-native';

const DURATION = 200;

export const rotate = (anim, open) => {
  Animated.timing(anim, {
    toValue: open ? 1 : 0,
    duration: DURATION,
    easing: Easing.inOut(Easing.quad),
    useNativeDriver: true,
  }).start();
};

export const rotation = (anim) => ({
  transform: [
    {
      rotate: anim.interpolate({
        inputRange: [0, 1],
        outputRange: ['90deg', '270deg'],
      }),
    },
  ],
});
