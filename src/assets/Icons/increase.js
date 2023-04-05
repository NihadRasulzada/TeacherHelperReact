import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default props => {
  return (
    <Svg
      width={41}
      height={40}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M34.426 34.142c7.812-7.811 7.812-20.473 0-28.284-7.81-7.811-20.473-7.811-28.284 0s-7.811 20.473 0 28.284 20.473 7.811 28.284 0zM11.335 20c0-1.039.84-1.878 1.873-1.873H18.4v-5.192c0-1.04.84-1.879 1.872-1.873a1.874 1.874 0 011.873 1.873v5.192h5.193c1.038 0 1.878.84 1.873 1.873a1.874 1.874 0 01-1.873 1.873h-5.193v5.192c0 1.04-.84 1.879-1.873 1.873a1.874 1.874 0 01-1.872-1.872v-5.193h-5.193A1.867 1.867 0 0111.335 20z"
        fill="#000"
      />
    </Svg>
  );
};