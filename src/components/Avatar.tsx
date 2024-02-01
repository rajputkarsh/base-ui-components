import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { getInitials, getComponentSize, getTextSize } from "../utils/common";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  name: string;
  imgUrl?: string;
  size?: AvatarSize;
  bgColor?: string;
}

function Avatar({ name, imgUrl, bgColor = "#FFF", size = "md" }: AvatarProps) {
  const [css] = useStyletron();

  const shouldUseImage = !!imgUrl;

  return (
    <Block
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: getComponentSize(size),
        height: getComponentSize(size),
        backgroundColor: bgColor,
        borderRadius: "50%",
      }}
    >
      {shouldUseImage ? (
        <img src={imgUrl} />
      ) : (
        <span
          className={css({
            color: "#FFF",
            fontWeight: 600,
            fontSize: getTextSize(size),
          })}
        >
          {getInitials(name)}
        </span>
      )}
    </Block>
  );
}

export default Avatar;
