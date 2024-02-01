import { Block } from "baseui/block";
import { useStyletron } from "styletron-react";
import { getRibbonSize } from "../utils/common";

type RibbonSize = "sm" | "md" | "lg";

interface RibbonProps {
  color?: string;
  size?: RibbonSize;
}

function Ribbon({ color = "green", size = "md" }: RibbonProps) {
  const [css] = useStyletron();
  const ribbonSize = getRibbonSize(size);
  return (
    <Block
      className={css({
        position: "absolute",
        width: `calc(100% - ${ribbonSize * 2}rem)`,
        height: `calc(100% - ${ribbonSize * 2}rem)`,
        borderRadius: "50%",
        bottom: "0",
        left: "0",

        display: "inline-block",
        border: `double ${ribbonSize}rem transparent`,
        backgroundImage:
          "linear-gradient(45deg, white, white), linear-gradient(45deg, green, transparent)",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      })}
    >
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-0.4rem,0.3rem) rotate(85deg)",
        })}
      >
        #
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-0.6rem,0.6rem) rotate(78deg)",
        })}
      >
        O
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-0.75rem,0.70rem) rotate(70deg)",
        })}
      >
        p
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-0.9rem,1rem) rotate(62deg)",
        })}
      >
        e
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.02rem,1.18rem) rotate(52deg)",
        })}
      >
        n
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.13rem,1.32rem) rotate(50deg)",
        })}
      >
        T
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.2rem,1.43rem) rotate(40deg)",
        })}
      >
        o
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.23rem,1.55rem) rotate(30deg)",
        })}
      >
        C
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.28rem,1.65rem) rotate(20deg)",
        })}
      >
        o
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.3rem,1.7rem) rotate(10deg)",
        })}
      >
        l
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.3rem,1.72rem) rotate(6deg)",
        })}
      >
        l
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.3rem,1.72rem) rotate(2deg)",
        })}
      >
        a
      </span>
      <span
        className={css({
          display: "inline-block",
          fontSize: `${ribbonSize * 0.7}rem`,
          fontWeight: 600,
          transform: "translate(-1.3rem,1.72rem) rotate(1deg)",
        })}
      >
        b
      </span>
    </Block>
  );
}

export default Ribbon;
