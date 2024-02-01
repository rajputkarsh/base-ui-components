type AvailableSize = "sm" | "md" | "lg";

export const getComponentSize = (size: AvailableSize): string => {
  if (size === "sm") {
    return "2.5rem";
  } else if (size === "md") {
    return "3.5rem";
  } else if (size === "lg") {
    return "4.5rem";
  }

  return "2.5rem";
};

export const getTextSize = (size: AvailableSize): string => {
  if (size === "sm") {
    return "1.5rem";
  } else if (size === "md") {
    return "2rem";
  } else if (size === "lg") {
    return "2.5rem";
  }

  return "2rem";
};

export const getInitials = (str: string): string => {
  return str
    .split(/\s/)
    .map((word) => word.slice(0, 1).toUpperCase())
    .join("");
};
