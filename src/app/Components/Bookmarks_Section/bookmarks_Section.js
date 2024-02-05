import BoxItem from "../BoxItem/boxItem";
import styles from "./bookmarks.module.css";

const BookmarkSection = () => {
  return (
    <div className={styles.top}>
      <div className={styles.heading}>
        <h2>Your Bookmarks</h2>
      </div>
      <div className={styles.cards}>
        <BoxItem
          name="Edit PDF"
          description="The best Word to PDF converter online"
          imageSrc="https://images.hipdf.com/images2022/icons/editPDF.svg"
          className={styles.boxItem}
        />
        <BoxItem
          name="Crop PDF"
          description="Convert Powerpoint to PDF online"
          imageSrc="https://images.hipdf.com/images2022/icons/Crop-PDF.svg"
          className={styles.boxItem}
        />
        <BoxItem
          name="Replace Text"
          description="Convert RTF file to PDF online for free"
          imageSrc="https://images.hipdf.com/images2022/icons/replace-text-pdf.svg"
          className={styles.boxItem}
        />
        <BoxItem
          name="Rotate PDF"
          description="Convert Powerpoint to PDF online."
          imageSrc="https://images.hipdf.com/images2022/icons/Rotate-PDF.svg"
          className={styles.boxItem}
        />
        {/* Add more BoxItem components as needed */}
      </div>
    </div>
  );
};

export default BookmarkSection;
