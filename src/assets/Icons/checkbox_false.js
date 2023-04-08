import * as React from 'react';
import Svg, {Rect} from 'react-native-svg';

export default props => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x={1}
        y={1}
        width={21}
        height={21}
        rx={6}
        fill="#fff"
        stroke="#000"
        strokeWidth={2}
      />
    </Svg>
  );
};
