import {Routes , Route} from "react-router-dom";
import Header from "../Component/Header";
import Exam from "./All_Courses/Exam";
import HomepageSection from "../Component/HomepageSection";

function HomePage(){


    return(

        <>
        <HomepageSection />
        <Exam/>
        <HomepageSection />

        </>
    )

}
export default HomePage