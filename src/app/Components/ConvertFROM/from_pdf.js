import BoxItem from "../BoxItem/boxItem";
import styles from "./from_pdf.module.css"


const ConvertFRPDF = () => {
    return (
      <div className={styles.top}>
                console.log('error is here);

        <div className={styles.heading}>
          <h2>Convert from PDF</h2>
        </div>
        <div className={styles.cards}>
       
        <BoxItem
                name="RTF to PDF"
                description="
                Convert RTF file to PDF online for free."
                imageSrc="https://images.hipdf.com/images2022/icons/Image-in-RTX.svg"
                className={styles.boxItem}  
              />
               <BoxItem
                name="PUB to PDF"
                description="Convert Powerpoint to PDF online."
                imageSrc="https://images.hipdf.com/images2022/icons/Excel-PUB.svg"
                className={styles.boxItem}  
              />
              <BoxItem
                name="Word to PDF"
                description="
                The best Word to PDF converter online."
                imageSrc="https://images.hipdf.com/images2022/icons/word-pdf.svg"
                className={styles.boxItem}  
              />
               <BoxItem
                name="JPG to PDF"
                description="Convert Powerpoint to PDF online."
                imageSrc="https://images.hipdf.com/images2022/icons/jpg-pdf.svg"
                className={styles.boxItem}  
              />
               <BoxItem
                name="TXT to PDF"
                description="Convert Powerpoint to PDF online."
                imageSrc="https://images.hipdf.com/images2022/icons/Image-in-TXT.svg"
                className={styles.boxItem}  
              />
          {/* Add more BoxItem components as needed */}
        </div>
      </div>
    );
  };
  
  export default ConvertFRPDF;