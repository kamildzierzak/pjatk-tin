import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingRoute } from "./routes/landing";
import { AboutRoute } from "./routes/about";
import { ContactRoute } from "./routes/contact";
import { CoursesRoute as LandingCoursesRoute } from "./routes/courses";

import { LoginRoute } from "./routes/auth/login";
import { RegisterRoute } from "./routes/auth/register";

import { DashboardLayout } from "../components/layouts/dashboard-layout";
import { DashboardRoute } from "./routes/app/dashboard";
import { StudentsRoute } from "./routes/app/students";
import { TeachersRoute } from "./routes/app/teachers";
import { CoursesRoute } from "./routes/app/Courses/courses";
import { CourseRoute } from "./routes/app/Courses/course";
import { EditCourseRoute } from "./routes/app/Courses/editCourse";
import { ScheduleRoute } from "./routes/app/schedule";
import { MaterialsRoute } from "./routes/app/materials";
import { NotFoundAppRoute } from "./routes/app/404app";

import { NotFoundRoute } from "./routes/404";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Main routes */}
        <Route path="/" element={<LandingRoute />} />
        <Route path="/courses" element={<LandingCoursesRoute />} />
        <Route path="/about" element={<AboutRoute />} />
        <Route path="/contact" element={<ContactRoute />} />

        {/* Auth routes */}
        <Route path="/auth/login" element={<LoginRoute />} />
        <Route path="/auth/register" element={<RegisterRoute />} />

        {/* Dashboard routes (protected in the future)*/}
        <Route path="/app/*" element={<DashboardLayout />}>
          <Route index element={<DashboardRoute />} />

          <Route path="courses">
            <Route index element={<CoursesRoute />} />
            <Route path=":id" element={<CourseRoute />} />
            <Route path=":id/edit" element={<EditCourseRoute />} />
          </Route>
          <Route path="teachers" element={<TeachersRoute />} />
          <Route path="students" element={<StudentsRoute />} />
          <Route path="schedule" element={<ScheduleRoute />} />
          <Route path="materials" element={<MaterialsRoute />} />

          {/* Fallback Route inside /app */}
          <Route path="*" element={<NotFoundAppRoute />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<NotFoundRoute />} />
      </Routes>
    </Router>
  );
};
