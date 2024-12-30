import Image from "next/image";
import styles from "./Memoji.module.css";

export default function Memoji() {
  return (
    <Image
      src="/memoji.png"
      alt="memoji of Marius Calin"
      width={150}
      height={150}
    />
  );
}
