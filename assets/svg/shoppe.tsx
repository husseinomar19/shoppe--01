import React from 'react';
import { View } from 'react-native';
import Svg, { Path, G, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeBlend } from 'react-native-svg';

export default function ShoppeIcon() {
  return (
   <View className='flex justify-center items-center w-fit rounded-full' >
    <Svg width="200" height="200" viewBox="0 0 150 150" fill="none">
      <G filter="url(#filter0_d_2020_2175)">
        <Path d="M75 139C112.003 139 142 109.003 142 72C142 34.9969 112.003 5 75 5C37.9969 5 8 34.9969 8 72C8 109.003 37.9969 139 75 139Z" fill="white" />
      </G>
      <Path d="M108.486 114.231L34 115.068L47.1998 42.127L99.6855 45.1256L108.486 114.231Z" fill="#8BC6FF" />
      <Path d="M115.4 118H45.8379L46.2287 114.931L108.486 114.231L99.9912 47.5261L108.486 46.6151L115.4 118Z" fill="#0051FF" fillOpacity="0.6" />
      <Path d="M46.229 114.932L54.1874 52.4361L99.9915 47.5264L108.486 114.231L46.229 114.932Z" fill="#0051FF" fillOpacity="0.6" />
      <Path d="M91.353 40.1611H86.9023C86.9023 34.8054 82.5437 30.4489 77.185 30.4489C71.8273 30.4489 67.4678 34.8054 67.4678 40.1611H63.0171C63.0171 32.3531 69.373 26.0002 77.185 26.0002C84.9971 26.0002 91.353 32.3531 91.353 40.1611Z" fill="#5982DA" />
      <Defs>
        <Filter id="filter0_d_2020_2175" x="0" y="0" width="150" height="150" filterUnits="userSpaceOnUse">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <FeOffset dy="3" />
          <FeGaussianBlur stdDeviation="4" />
          <FeColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.160784 0" />
          <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2020_2175" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2020_2175" result="shape" />
        </Filter>
      </Defs>
    </Svg>
   </View>
  );
}