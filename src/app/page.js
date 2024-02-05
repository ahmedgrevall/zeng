import Image from "next/image";
import TopNavbar from "./Components/Navbar/navbar";
import CategoriesRow from "./Components/CategoryBar/categoryBar";

import Footer from "./Components/Footer/footer";
import Bookmarks_Section from "./Components/Bookmarks_Section/bookmarks_Section.js";
 import ConvertFromPDF from "./Components/Convert_From_PDF/from_pdf";
import ConvertToPDF from "./Components/Convert_To/from_pdf";

import ConvertFRPDF from "./Components/ConvertFROM/from_pdf";

 

export default function Home() {
 
  return (
<div>
<TopNavbar />
<CategoriesRow/>

<Bookmarks_Section/>
   <ConvertFromPDF/>
      

<ConvertToPDF/>
<ConvertFRPDF/>
      
  <Footer/>
</div>
   
  )
}
