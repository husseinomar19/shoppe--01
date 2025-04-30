import Svg, { G, Path, ClipPath, Defs, Rect } from 'react-native-svg';
export default function AddCart()
{
    return(
        <>
                         <Svg width={29} height={25} viewBox="0 0 29 25" fill="none">
            <Defs>
              <ClipPath id="clip0">
                <Rect width="21.9834" height="24.426" fill="white" transform="translate(7.01697)" />
              </ClipPath>
              <ClipPath id="clip1">
                <Rect width="18" height="18" fill="white" transform="translate(0 7)" />
              </ClipPath>
              <ClipPath id="clip2">
                <Rect width="6.65998" height="6.65998" fill="white" transform="translate(5.75195 12.752)" />
              </ClipPath>
            </Defs>
        
            <G clipPath="url(#clip0)">
              <Path
                d="M24.8363 1L28.0004 5.21777V21.9834C28.0004 22.7801 27.3546 23.4257 26.558 23.4258H9.45935C8.66272 23.4257 8.01697 22.7801 8.01697 21.9834V5.21777L11.181 1H24.8363Z"
                stroke="#004CFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M9.01697 4.88477H27.0004"
                stroke="#004CFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M22.8933 9.77002C22.8933 12.468 20.7061 14.6552 18.0081 14.6552C15.3101 14.6552 13.1229 12.468 13.1229 9.77002"
                stroke="#004CFF"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
        
            <G clipPath="url(#clip1)">
              <Path
                d="M9 8C13.4183 8 17 11.5817 17 16C17 20.4183 13.4183 24 9 24C4.58172 24 1 20.4183 1 16C1 11.5817 4.58172 8 9 8Z"
                fill="white"
                stroke="#004BFE"
                strokeWidth={2}
              />
              <G clipPath="url(#clip2)">
                <Path
                  d="M9.08191 12.752V19.4119"
                  stroke="#004BFE"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <Path
                  d="M12.4119 16.082H5.75195"
                  stroke="#004BFE"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </G>
            </G>
          </Svg>
        </>
    )
}