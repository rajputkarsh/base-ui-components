import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { getInitials, getComponentSize, getTextSize } from "../utils/common";
import { useState } from "react";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: AvatarSize;
  bgColor?: string;
}

function Avatar({
  name,
  imageUrl,
  bgColor = "#FFF",
  size = "md",
}: AvatarProps) {
  const [css] = useStyletron();

  const [shouldUseImage, setShouldUseImage] = useState(!!imageUrl);

  return (
    <Block
      className={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: getComponentSize(size),
        height: getComponentSize(size),
        backgroundColor: bgColor,
        borderRadius: "50%",
      })}
    >
      {shouldUseImage ? (
        <img
          src={imageUrl}
          className={css({
            maxWidth: getComponentSize(size),
            maxHeight: getComponentSize(size),
            borderRadius: "50%",
          })}
          onError={() => {
            setShouldUseImage(false);
          }}
        />
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