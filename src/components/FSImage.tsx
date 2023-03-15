import { useEffect, useState } from "react";
import { readBinaryFile } from "@tauri-apps/api/fs";
import { Image } from "@chakra-ui/react";
import clsx from "clsx";
import { ClassNames } from "@emotion/react";

const createImageUrl = ({
  mediaPath,
  link,
}: {
  link: string;
  mediaPath: string;
}) => {
  const withoutPrefix = link.split("./")[1];
  return mediaPath + "/" + withoutPrefix;
};

export const FSImage = ({
  link,
  mediaPath,
  className,
}: {
  link: string;
  mediaPath: string;
  className: string;
}) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const path = createImageUrl({ link, mediaPath });
    readBinaryFile(path).then((l) =>
      setImage(URL.createObjectURL(new Blob([l], { type: "image/png" })))
    );
  }, []);
  return <img src={image} className={className} />;
};
