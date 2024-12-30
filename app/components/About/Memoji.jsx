import Image from "next/image";
import styles from "./Memoji.module.css";

export default function Memoji() {
  return (
    <Image
      src="/memoji.png"
      alt="memoji of Marius Calin"
      width={200}
      height={200}
    />
  );
}
