import { cn } from "@/lib/utils";
import Image from "next/image";
import { getImage } from "@/lib/get-image";

type Props = {
  url: string;
  alt?: string;
  containerClass?: string;
};

export default async function DynamicImages({
  url,
  alt,
  containerClass,
}: Props) {
  const { base64, img } = await getImage(url);
  return (
    <div className={cn("relative w-full h-full", containerClass)}>
      <Image
        src={img.src}
        alt={alt || ""}
        placeholder="blur"
        blurDataURL={base64}
        fill // Ensures the image fills the container
        objectFit="cover" // Ensure the image covers the container without distortion
        quality={80} // Optimize for performance
        sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 100vw"
        priority
      />
    </div>
  );
}
