import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export function Avatar({ src, alt, size = 96 }: AvatarProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full"
      priority
    />
  );
}
