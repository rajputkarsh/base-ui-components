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
  showRibbon?: boolean;
  storyline?: boolean;
}

function AvatarComponent({
  name,
  imageUrl,
  bgColor = "#FFF",
  size = "md",
  showRibbon = false,
}: Exclude<AvatarProps, "storyline">) {
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
        backgroundColor: shouldUseImage ? "transparent" : bgColor,
        borderRadius: "50%",
        position: "relative",
        border: `${
          !shouldUseImage && showRibbon ? "0.05rem solid green" : "none"
        } `,
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
            color: showRibbon ? "green" : "white",
            zIndex: 10,
            fontWeight: 600,
            fontSize: getTextSize(size),
          })}
        >
          {getInitials(name)}
        </span>
      )}

      {showRibbon && <Ribbon />}
    </Block>
  );
}

function Avatar({
  name,
  imageUrl,
  bgColor = "#FFF",
  size = "md",
  showRibbon = false,
  storyline = false,
}: AvatarProps) {
  const [css] = useStyletron();
  if (storyline) {
    return (
      <Block
        className={css({
          borderRadius: "50%",
          border: `double 0.05rem transparent`,
          backgroundImage:
            "linear-gradient(45deg, red, red), linear-gradient(right, purple, red)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          padding: "0.1rem",
        })}
      >
        <AvatarComponent
          name={name}
          imageUrl={imageUrl}
          bgColor={bgColor}
          size={size}
          showRibbon={showRibbon}
        />
      </Block>
    );
  }

  return (
    <AvatarComponent
      name={name}
      imageUrl={imageUrl}
      bgColor={bgColor}
      size={size}
      showRibbon={showRibbon}
    />
  );
}

export default Avatar;
