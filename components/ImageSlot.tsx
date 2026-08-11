type ImageSlotProps = {
  id: string;
  src?: string;
  alt?: string;
  placeholder?: string;
  radius?: number | string;
  shape?: "rect" | "rounded" | "circle" | "pill";
};

export function ImageSlot({
  src,
  alt,
  placeholder = "Drop an image",
  radius = 16,
  shape = "rounded",
}: ImageSlotProps) {
  const borderRadius =
    shape === "circle"
      ? "50%"
      : shape === "pill"
        ? "999px"
        : shape === "rect"
          ? 0
          : typeof radius === "number"
            ? `${radius}px`
            : radius;

  if (!src) {
    return (
      <div className="image-slot-empty" style={{ borderRadius }}>
        {placeholder}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className="image-slot"
      src={src}
      alt={alt ?? placeholder}
      style={{ borderRadius }}
    />
  );
}
