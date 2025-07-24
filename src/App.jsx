import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login/login.jsx";
import Signup from "./login/Signup.jsx";
import Details from "./Main_Home/Details.jsx";
import Contact from "./Contact.jsx";
import Home from "./Main_Home/Home.jsx";
import Categorie from "./categories/category.jsx";
import ServiceSection from "./service/ServiceSection.jsx";
import EventGrid from "./categories/EventGrid.jsx";
import WeddingBooking from "./categories/wedding_gala/weddingGalaBooking.jsx";
import WeddingGala from "./categories/wedding_gala/WeddingGala.jsx";
import CorporateMeet from "./categories/corporate_meet/CorporateMeet.jsx";
import CorporateBooking from "./categories/corporate_meet/CorporateBooking.jsx";
import BirthdayBash from "./categories/birthday_Bash/BIrthdayBash.jsx";
import BirthdayBooking from "./categories/birthday_Bash/BirthdayBooking.jsx";
import EventPlanning from "./service/eventplanning/EventPlanning.jsx";
import ScheduleConsultation from "./service/eventplanning/ScheduleConsultation.jsx";
import GuestManagement from "./service/guestmanagement/GuestManagement.jsx";
import GuestManagementPage from "./service/guestmanagement/Guest-management-page.jsx";
import LiveEntertainment from "./service/live-entertainment/LiveEnterment.jsx";
import CateringServices from "./service/catering/CateringServices.jsx";
import EnquireNow from "./service/catering/EnquireNow.jsx";
import PhotographyServices from "./service/photography/PhotographyServices.jsx";
import PhotographyEnquiry from "./service/photography/PhotographyEnquiry.jsx";
import CustomThemes from "./service/themes/CustomThemes.jsx";
import ThemeEnquiry from "./service/themes/ThemeEnquiry.jsx";
import CulturalFest from "./categories/culturalFest/CulturalFest.jsx";
import FestEnquire from "./categories/culturalFest/CulturalFestEnquire.jsx";
import AwardCeremony from "./categories/awardCEREMONY/AwardCeremony.jsx";
import AwardEnquire from "./categories/awardCEREMONY/AwardEnquire.jsx";
import FoodFestival from "./categories/FoodFestival/FoodFestival.jsx";
import FoodFestivalEnquire from "./categories/FoodFestival/FoodFestivalEnquire.jsx";
import BookNowEntertainment from "./service/live-entertainment/BookNowEntertainment.jsx";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<ImageSlider />}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/detail" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categorie />} />
          <Route path="/service" element={<ServiceSection />} />
          <Route path="/" element={<EventGrid />} />
          <Route path="/wedding-gala" element={<WeddingGala />} />
          <Route path="/wedding-booking" element={<WeddingBooking />} />
          <Route path="/corporate-meet" element={<CorporateMeet />} />
          <Route path="/corporate-booking" element={<CorporateBooking />} />
          <Route path="/birthday-bash" element={<BirthdayBash />} />
          <Route path="/birthday-booking" element={<BirthdayBooking />} />
          <Route path="/event-planning" element={<EventPlanning />} />
          <Route path="/schedule-consultation" element={<ScheduleConsultation />}/>
            
            
          
          <Route path="/guest-management" element={<GuestManagement />} />
          <Route path="/guest-management-page" element={<GuestManagementPage />}/>
            
            
          
          <Route path="live-entertainment" element={<LiveEntertainment />} />
          <Route path="/catering-service" element={<CateringServices />} />
          <Route path="/enquire-now" element={<EnquireNow />} />
          <Route path="/photography" element={<PhotographyServices />} />
          <Route path="/photography-enquire" element={<PhotographyEnquiry />} />
          <Route path="/theme-page" element={<CustomThemes />} />
          <Route path="/theme-enquiry" element={<ThemeEnquiry />} />
          <Route path="/cultural-fest" element={<CulturalFest />} />
          <Route path="/cultural-fest-enquire" element={<FestEnquire />} />
          <Route path="/award-ceremony" element={<AwardCeremony />} />
          <Route path="/award-enquire" element={<AwardEnquire />} />
          <Route path="/food-festival" element={<FoodFestival />} />
          <Route path="/food-enquire" element={<FoodFestivalEnquire />} />
          <Route path="/booknow-entertainment" element={<BookNowEntertainment />}/>
            
            
          
        </Routes>

        <ToastContainer />
      </Router>
    </>
  );
};

export default App;
