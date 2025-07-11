import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
export default function TrashIcon(){
    return(
        <>
        <Svg width={35} height={35} viewBox="0 0 35 35" fill="none">
    <Defs>
      <ClipPath id="clip0">
        <Rect width="35" height="35" fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0)">
      <Path
        d="M17.5 35C27.165 35 35 27.165 35 17.5C35 7.83502 27.165 0 17.5 0C7.83502 0 0 7.83502 0 17.5C0 27.165 7.83502 35 17.5 35Z"
        fill="white"
      />
      <Path
        d="M20.118 25.068H14.884C14.2273 25.0573 13.6011 24.7894 13.1398 24.3219C12.6785 23.8545 12.419 23.2247 12.417 22.568L11.594 13H23.482L22.66 22.563C22.655 23.2322 22.3844 23.8721 21.9077 24.3418C21.431 24.8116 20.7872 25.0728 20.118 25.068Z"
        stroke="#FF5790"
        strokeMiterlimit={10}
      />
      <Path
        d="M15.4519 16.0361V22.0321"
        stroke="#FF5790"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M19.551 16.0361V22.0321"
        stroke="#FF5790"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
      <Path
        d="M12.581 13C12.5501 12.6366 12.5912 12.2707 12.7019 11.9231C12.8126 11.5756 12.9907 11.2533 13.2261 10.9747C13.4614 10.6961 13.7494 10.4666 14.0735 10.2993C14.3976 10.1321 14.7515 10.0304 15.115 10H19.96C20.6811 10.0786 21.3426 10.4368 21.8026 10.9977C22.2625 11.5586 22.4842 12.2775 22.42 13H12.581Z"
        stroke="#FF5790"
        strokeMiterlimit={10}
      />
      <Path
        d="M10 13H25"
        stroke="#FF5790"
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </G>
  </Svg>
        </>
    )
}