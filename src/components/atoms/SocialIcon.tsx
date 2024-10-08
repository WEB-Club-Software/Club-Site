import { FC } from "react";
import { SizeProps } from "../../interface/misc.interfaces";
import Image from "next/image";
import Link from "next/link";

interface baseProps {
  src: string;
  alt: string;
  href?: string;
}

type Props = baseProps & SizeProps;

const defaultLink = "#";

const SocialIcon: FC<Props> = ({
  src,
  alt,
  width,
  height,
  size,
  href = defaultLink,
}) => {
  return (
    <Link
      href={href}
      className={`${href != defaultLink ? "opacity-100" : "opacity-50"}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width || size}
        height={height || size}
      />
    </Link>
  );
};
export default SocialIcon;
