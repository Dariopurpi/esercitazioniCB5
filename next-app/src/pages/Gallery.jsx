import Image from "next/image";

import styles from "../styles/gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <div className={styles.galleryTitle}>
        <h2>Gallery</h2>
      </div>
      <div className={styles.galleryImage}>
        <Image
          src="https://picsum.photos/800/600?1"
          alt="image"
          width="600"
          height="300"
        />
        <Image
          src="https://picsum.photos/800/600?2"
          alt="image"
          width="600"
          height="300"
        />
        <Image
          src="https://picsum.photos/800/600?3"
          alt="image"
          width="600"
          height="300"
        />
        <Image
          src="https://picsum.photos/800/600?4"
          alt="image"
          width="600"
          height="300"
        />
        <Image
          src="https://picsum.photos/800/600?5"
          alt="image"
          width="600"
          height="300"
        />
        <Image
          src="https://picsum.photos/800/600?6"
          alt="image"
          width="600"
          height="300"
        />
      </div>
    </div>
  );
};

export default Gallery;
