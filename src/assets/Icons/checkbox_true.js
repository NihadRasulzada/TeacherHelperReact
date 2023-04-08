import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';

export default props => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#pattern0)" d="M0 0H27V24H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use
            xlinkHref="#image0_44_59"
            transform="matrix(.00781 0 0 .00879 0 -.063)"
          />
        </Pattern>
        <Image
          id="image0_44_59"
          width={128}
          height={128}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAcISURBVHic7Z1riFVVFMd/4zgPM03DtHz1wKaIqIgitT4EpRRGhWUgJRk9LDC1jISywJ6UQSWVGdFDekD2NCpNVIwCCQrKXqBYkQ1hb01xxmamD2skH9d799p377vPuWf9YH+ZOfvstc/633P2c20wDMMwDMMwDMMwDMMwDKP+aYh8/xagDRgGDI5cVr3xJ/ALsBHoSGyLipHAPOBjoBPosVRV6ux9lrcDIxR+qDlHAy9iTo8thheA0W4uqQ0NwGxgB+kfUFHSP8CNLs6JTSvwOukfSFHTYqCpopci0QqsrmCgpfhpBQlE0ID98rOUnirvrvDMCWS4pXBpRlmPHQSfcYDRwDdAf58CjWhsB8YAWzWZGj0KWgSc6ZHPiEsL0hZYqcmkfQOMBDaTsOVplKUDOA5od83QR1nAlZjzs0wL4iNntAK4WHm9UXsu0lys+QS0AtuwN0DW6QQG4jiBpHkDjMGcnweakXaAExoBZHomytiHka4XagRg/f78MMD1Qo0AfMYMjDQ4+0rbCzDqDBNAwTEBFBwTQMExARQcE0DBMQEUHBNAwTEBFJy+qQ0oAL8Da4E/gCOBc5HZukxgAohHF7AAWAjs2uvvA3v/PieFUftjAohDNzANeLXE/7YBtyBvhntraVQprA0Qnh7gJko7f28eAL6Kb055TADhmQc843BdN7A0si0VMQGE5X7km+/K17EMccUEEI4ngPnKPC0xDNFgAgjDUmCWR75xoQ3RYgKonreAa5HGn4bBwDXhzdFhAqiOVcBU4F9lvkYk0seQ0AZpMQH4sx6YjD6AUwPwNBnZZGMC8GMDMAkJ1aJlIXBdWHP8MQHo2QRMRMb2tdwDzA1rTnWYAHRsASYg8fu0zALuCmtO9ZgA3PkVcf4PHnmvBh4Lak0gTABu/A1cAHznkXcy8Czxo7J6YQKozE5ky/XnHnknAK+Q4VlXE0B5OoHLkFCtWsYjg0TJh3vLYQI4OF3AVUgcPi2nAu+Rgw21JoDS9AA3AMs88rYhgZoGBbUoEiaA0swFnvPINxoZHh4W1px4mAAO5A7gUY98Q4EPyVgk70qYAPblceBBj3yDkNf+CWHNiY8J4H+eRxZrahmA/PJPC2tObTABCG8A16Of0+8HLCfHkVNNAPAuMqffpczXBLyGbPTILUUXwFrgCmC3Ml8f5HgcVVDGLFJkAXwKXMK+u3ZcaEDi808NblECsjRG3Y00ptYhu2fagMuJE59wA3AhEmJdy0N4xubPO1OId9jBZuCMEmW2IA88ZFkbgaM8n8GdEZ9ByDTFs35liSWA34BjK5Q9P1BZPwHHeNZ/ZqT6F14ArrtkH66ynK3AiX5VZxrSS0jt2LoUwFDH8vespvUp4y/gdM96X4r0ElI7tS4FoG2E9QFeVpaxAzhHX10Azkd6CakdGk0AqbuB/dD1RLqB6cjgjQudyJIsnwUd44C3yfiCjmpJLYBG9L/O3cjgzZoK13Uhx6eoDlHqJTcLOmpJrDbASvwWTA5AdueUumc3/vvu2pBl36lf4zX5BGiIOQ6wwNOmw4EvS9xvtuf9RgM/VlGPrKTcCaAHuM3TrqHAt3vd527P+xyBHIiZ2nmFFUA3MiXrwyhkw8Yiz/yHAZ8FqENWUi4F0INss/Y1fjh+bYn+wCcR65RpAaTuBexPI9LPn+SRtx2pvIZmZOXveI/y6oKsCQBkocUy4i+0aAReQmYFC0sWBQAyQPQO8ZZaNQBLiPStzBNZFQBISNVYiy0fQeL6FJ4sCwDiLLe+D7g14P1yTdYFANLPXwUcHeBes5BFHUYveRAASD+/2i1X08lokIaU5EUAAMcjbYLBHnkzHaQhJXkSAMApwPvAoYo8E5EgDXb0bQnyJgCAscg8favDteOBN6nzOf1qyKMAAM5D4vE3l7lmLPABNqdflrwKAGSt3hrks7A3zcDNwGoydDZPVsnSxhAfzga+QE7e2AQcApyFzO4ZDuRdAHs4uTcZSvL8CTACYAIoOCaAgmMCKDgmgIJjAig4JoCCYwIoOCaAgqMRgDaMmpEOZ19pBOBzQpaRBue4CxoBtHsYYqRhi+uFmiVSrUj4tia1OUYt6US2zne6XKx5A+xCgisa2WY9js4HfS9gufJ6o/a4hs8B9KtkRwDfY5+BrLIbiYPo3F7TvgF+RlbYGtlkKcrGus86+VFIJA3N0mwjPjuBk5AQN874rJXfhgRe9NnDb8RjJpUjpwVlMekjYViS9GQFX0WhCdm5m7ryRU8rSNgo74uctJX6IRQ1LSEjPbIZSLsg9QMpStqOnGyaKYYgBy52kP4B1WvqQHY5j3T0SRKGI0EfP8LEEMrp65DjbIcr/OBE7P3yzcAYxPBBNSivXuhBPqntyJY357F9wzAMwzAMwzAMwzAMwzCMA/kPhzqGZenB18sAAAAASUVORK5CYII="
        />
      </Defs>
    </Svg>
  );
};
