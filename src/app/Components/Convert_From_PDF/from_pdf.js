 "use client";
 // components/ConvertFromPDF/ConvertFromPDF.js
// components/ConvertFromPDF/ConvertFromPDF.js
// components/ConvertFromPDF/ConvertFromPDF.js
// components/ConvertFromPDF/ConvertFromPDF.js
import React, { useRef, useState } from 'react';
import BoxItem from '../BoxItem/boxItem';
import styles from './from_pdf.module.css';  // Adjust the path accordingly

const ConvertFromPDF = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const totalItems = 3; // Adjust the total number of items as needed

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
    scrollContainer(-1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
    scrollContainer(1);
  };

  const scrollContainer = (direction) => {
    const container = containerRef.current;
    const itemWidth = container.clientWidth;
    container.scrollLeft += direction * itemWidth;
  };

  return (
    <div className="outer">
      <div className={`${styles.top} mx-30`}>
        <div className={styles.heading}>
          <h2 className="text-2xl font-bold">Convert from PDF</h2>
        </div>

        <div className={styles.carouselContainer}>
          <div className={`${styles.carousel} relative`} ref={containerRef}>
            <div className={styles.scrollContainer} style={{ width: `${totalItems * 100}%`, transform: `translateX(-${currentIndex * (100 / totalItems)}%)` }}>
              <BoxItem
                name="PPT to PDF"
                description="Convert Powerpoint to PDF online"
                imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
                className={styles.boxItem}  
              />
              <BoxItem
                name="JPG to PDF"
                description="Convert Powerpoint to PDF online"
                imageSrc="https://images.hipdf.com/images2022/icons/jpg-pdf.svg"
                className={styles.boxItem}  
              />
              <BoxItem
                name="Word to PDF"
                description="
                The best Word to PDF converter online"
                imageSrc="https://images.hipdf.com/images2022/icons/word-pdf.svg"
                className={styles.boxItem}  
              />
               <BoxItem
                name="TXT to PDF"
                description="Convert Powerpoint to PDF online"
                imageSrc="https://images.hipdf.com/images2022/icons/Image-in-TXT.svg"
                className={styles.boxItem}  
              />
               <BoxItem
                name="RTF to PDF"
                description="
                Convert RTF file to PDF online for free"
                imageSrc="https://images.hipdf.com/images2022/icons/Image-in-RTX.svg"
                className={styles.boxItem}  
              />
               <BoxItem
                name="PUB to PDF"
                description="Convert Powerpoint to PDF online"
                imageSrc="https://images.hipdf.com/images2022/icons/Excel-PUB.svg"
                className={styles.boxItem}  
              />
              {/* Add more BoxItem components as needed */}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className={styles.buttonLeft}
            onClick={handlePrev}
          >
            &#8249;
          </button>

          <button
            className={styles.buttonRight}
            onClick={handleNext}
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConvertFromPDF;

// import React, { useRef, useState } from 'react';
// import BoxItem from '../BoxItem/boxItem';
// import styles from './from_pdf.module.css';  // Adjust the path accordingly

// const ConvertFromPDF = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const totalItems = 3; // Adjust the total number of items as needed

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
//     scrollContainer(-1);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
//     scrollContainer(1);
//   };

//   const scrollContainer = (direction) => {
//     const container = containerRef.current;
//     const itemWidth = container.clientWidth;
//     container.scrollLeft += direction * itemWidth;
//   };

//   return (
//     <div className="outer">
//       <div className={`${styles.top} mx-30`}>
//         <div className={styles.heading}>
//           <h2 className="text-2xl font-bold">Convert from PDF</h2>
//         </div>

//         <div className={styles.carouselContainer}>
//           <div className={`${styles.carousel} relative`} ref={containerRef} >
//             <div className={styles.scrollContainer} style={{ width: `${totalItems * 100}%`, transform: `translateX(-${currentIndex * (60 / totalItems)}%)` }}>
//               <BoxItem
//                 name="PPT to PDF"
//                 description="Convert Powerpoint to PDF online."
//                 imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
//                 className={boxItemStyles.boxItem}
              
//               />
//               <BoxItem
//                 name="PPT to PDF"
//                 description="Convert Powerpoint to PDF online."
//                 imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
                
//               />
//                <BoxItem
//                 name="PPT to PDF"
//                 description="Convert Powerpoint to PDF online."
//                 imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
                
//               />
//                <BoxItem
//                 name="PPT to PDF"
//                 description="Convert Powerpoint to PDF online."
//                 imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
                
//               />
//                <BoxItem
//                 name="PPT to PDF"
//                 description="Convert Powerpoint to PDF online."
//                 imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
                
//               />
//                <BoxItem
//                 name="PPT to PDF"
//                 description="Convert Powerpoint to PDF online."
//                 imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
                
//               />
//               {/* Add more BoxItem components as needed */}
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             className={styles.buttonLeft}
//             onClick={handlePrev}
//           >
//             &#8249;
//           </button>

//           <button
//             className={styles.buttonRight}
//             onClick={handleNext}
//           >
//             &#8250;
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConvertFromPDF;


// import React, { useRef, useState } from 'react';
// import BoxItem from '../BoxItem/boxItem';
// import styles from './from_pdf.module.css';  // Adjust the path accordingly

// const ConvertFromPDF = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   const totalItems = 2; // Adjust the total number of items as needed

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
//     scrollContainer(-1);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
//     scrollContainer(1);
//   };

//   const scrollContainer = (direction) => {
//     const container = containerRef.current;
//     const itemWidth = container.clientWidth;
//     container.scrollLeft += direction * itemWidth;
//   };

//   return (
//     <div className="outer">
//     <div className={`${styles.top} mx-30`}>
//       <div className={styles.heading}>
//         <h2 className="text-2xl font-bold">Convert from PDF</h2>
//       </div>

//       <div className={`${styles.carousel} relative`} ref={containerRef}>
//         <div className={styles.scrollContainer} style={{ width: `${totalItems * 100}%`, transform: `translateX(-${currentIndex * (60 / totalItems)}%)` }}>
//           <BoxItem 
//             name="PPT to PDF"
//             description="Convert Powerpoint to PDF online."
//             imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
            

//           />
//           <BoxItem
//             name="PPT to PDF"
//             description="Convert Powerpoint to PDF online."
//             imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
//           />
//            <BoxItem
//             name="PPT to PDF"
//             description="Convert Powerpoint to PDF online."
//             imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
//           /> <BoxItem
//           name="PPT to PDF"
//           description="Convert Powerpoint to PDF online."
//           imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
//         /> <BoxItem
//         name="PPT to PDF"
//         description="Convert Powerpoint to PDF online."
//         imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
//       /> <BoxItem
//       name="PPT to PDF"
//       description="Convert Powerpoint to PDF online."
//       imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
//     /> <BoxItem
//     name="PPT to PDF"
//     description="Convert Powerpoint to PDF online."
//     imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
//   /> <BoxItem
//   name="PPT to PDF"
//   description="Convert Powerpoint to PDF online."
//   imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
// />
//           {/* Add more BoxItem components as needed */}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//          style={{
//             position: 'absolute',
//             top: '58%',
//             left: '10px',
//             transform: 'translate(100%, -30%)',
//             backgroundColor: 'white',
//             color: 'black',
//             border: '2px solid black',
//             borderRadius: '50%',
//             padding: '10px',
//             cursor: 'pointer',
//             width:  '44px',
//           }}
//         onClick={handlePrev}
//       >
//         &#8249;
//       </button>

//       <button
//           style={{
//             position: 'absolute',
//              top: '56%',
//             right: '10px',
//             transform: 'translate(-130%, 20%)',
//             backgroundColor: 'white',
//             color: 'black',
//             border: '2px solid black',
//             borderRadius: '50%',
//             padding: '10px',
//             cursor: 'pointer',
//             width:  '44px',
//           }}
//         onClick={handleNext}
//       >
//         &#8250;
//       </button>
//     </div>
//      </div>
//   );
// };

// export default ConvertFromPDF;


// // // components/ConvertFromPDF/ConvertFromPDF.js

// // import React, { useState } from 'react';
// // import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
// // import BoxItem from '../BoxItem/boxItem';
// // import styles from './from_pdf.module.css';  // Adjust the path accordingly

// // const ConvertFromPDF = () => {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const totalItems = 2; // Adjust the total number of items as needed

// //   const handlePrev = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalItems - 1 : prevIndex - 1));
// //   };

// //   const handleNext = () => {
// //     setCurrentIndex((prevIndex) => (prevIndex === totalItems - 1 ? 0 : prevIndex + 1));
// //   };

// //   return (
// //     <div className={`${styles.top} mx-30`}>
// //       <div className={styles.heading}>
// //         <h2 className="text-2xl font-bold">Convert from PDF</h2>
// //       </div>

// //       <div className="relative overflow-hidden">
// //         <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
// //           <BoxItem
// //             name="PPT to PDF"
// //             description="Convert Powerpoint to PDF online."
// //             imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
// //           />
// //           <BoxItem
// //             name="PPT to PDF"
// //             description="Convert Powerpoint to PDF online."
// //             imageSrc="https://images.hipdf.com/images2022/icons/PPT-PDF.svg"
// //           />
         
// //           {/* Add more BoxItem components as needed */}
// //         </div>


// //         {/* Navigation Arrows */}
// //         <button
// //           className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-black rounded-full p-2 text-white"
// //           onClick={handlePrev}
// //         >
// //           <ChevronLeftIcon className="h-6 w-6" />
// //         </button>
        
// //         <button
// //           className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-black rounded-full p-2 text-white"
// //           onClick={handleNext}
// //         >
// //           <ChevronRightIcon className="h-6 w-6" />
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ConvertFromPDF;
