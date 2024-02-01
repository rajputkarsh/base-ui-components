import { Block } from "baseui/block";
import { useStyletron } from "styletron-react";

function Ribbon() {
  const [css] = useStyletron();
  return (
    <Block
      className={css({
        position: "absolute",
        width: "100%",
        height: "100%",
      })}
    >
      <img
        className={css({
          width: "100%",
          height: "100%",
        })}
        src="./ribbon.png"
      />
    </Block>
  );
}

export default Ribbon;
