import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { getInitials, getComponentSize, getTextSize } from "../utils/common";
import { useState } from "react";
import Ribbon from "./Ribbon";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: AvatarSize;
  bgColor?: string;
  openToCollab?: boolean;
  storyline?: boolean;
}

function Avatar({
  name,
  imageUrl,
  bgColor = "#FFF",
  size = "md",
  openToCollab = false,
  storyline = false,
}: AvatarProps) {
  const [css] = useStyletron();

  const [shouldUseImage, setShouldUseImage] = useState(!!imageUrl);

  let storyLineStyle = {};
  if (storyline) {
    storyLineStyle = {
      border: `double 0.1rem transparent`,
      backgroundImage:
        "linear-gradient(45deg, red, red), linear-gradient(right, purple, red)",
      backgroundOrigin: "border-box",
      backgroundClip: "content-box, border-box",
      padding: "0.1rem",
    };
  }

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
        position: "relative",
        ...storyLineStyle,
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
            color: openToCollab ? "green" : "white",
            zIndex: 10,
            fontWeight: 600,
            fontSize: getTextSize(size),
          })}
        >
          {getInitials(name)}
        </span>
      )}

      {openToCollab && <Ribbon />}
    </Block>
  );
}

export default Avatar;
