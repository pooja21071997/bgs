import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Facilities } from './pages/facilities/facilities';
import { CounsellingCenter } from './pages/facilities/counselling-center/counselling-center';
import { EducationalFacilities } from './pages/facilities/educational-facilities/educational-facilities';
import { SportsFacilities } from './pages/facilities/sports-facilities/sports-facilities';
import { DayScholarSchool } from './pages/facilities/day-scholar-school/day-scholar-school';
import { TransportFacilities } from './pages/facilities/transport-facilities/transport-facilities';
import { Academics } from './pages/academics/academics';
import { Achievements } from './pages/achievements/achievements';
import { ContactUs } from './pages/contact-us/contact-us';
import { Gurukul } from './pages/gurukul/gurukul';
import { SkillDevelopment } from './pages/skill-development/skill-development';
import { Admissions } from './pages/admissions/admissions';

export const routes: Routes = [
    { path: '', component: Home },

  { path: 'home', component: Home },
  { path: 'about', component: About },
  {
    path: 'facilities',
    component: Facilities,
    children: [
      { path: 'educational-facilities', component: EducationalFacilities },
      { path: 'counselling-center', component: CounsellingCenter },
      { path: 'sports-facilities', component: SportsFacilities },
      { path: 'day-scholar-school', component: DayScholarSchool },
      { path: 'transport-facilities', component: TransportFacilities },
      { path: '', redirectTo: 'educational-facilities', pathMatch: 'full' }
    ]
  },
  { path: 'academics', component: Academics },
  { path: 'gurukul', component: Gurukul },
  { path: 'skill-development', component: SkillDevelopment },
  { path: 'admissions', component: Admissions },
  { path: 'achievements', component: Achievements },
  { path: 'contact-us', component: ContactUs },

  

  { path: '**', redirectTo: '' }

];
