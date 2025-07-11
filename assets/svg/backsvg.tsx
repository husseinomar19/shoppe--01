import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

export default function BackgroundSvg() {
  return (
    <View className='absolute right-0 left-0 z-0'>
      <Svg width="100%" height="428" viewBox="0 0 375 308" fill="none">
        <Defs>
          <ClipPath id="clip0_0_12780">
            <Rect width="659.329" height="513.444" fill="white" transform="translate(-131.968 -205.674)" />
          </ClipPath>
        </Defs>
        <G clipPath="url(#clip0_0_12780)">
          <Path
            d="M149.237 157.191C116.216 286.524 -45.9048 161.1 -68.0053 64.9774C-90.1057 -31.1454 -61.2453 -117.739 24.2087 -152.265C109.663 -186.791 179.467 -129.479 217.161 -54.0902C254.856 21.299 182.259 27.8587 149.237 157.191Z"
            fill="#F2F5FE"
          />
          <Path
            d="M405.963 64.974C463.48 -13.2608 527.361 119.326 527.361 186.372C527.361 253.419 473.009 307.771 405.963 307.771C338.916 307.771 275.716 256.724 284.564 186.372C293.413 116.02 348.446 143.209 405.963 64.974Z"
            fill="#004BFE"
          />
        </G>
      </Svg>
    </View>
  );
}
