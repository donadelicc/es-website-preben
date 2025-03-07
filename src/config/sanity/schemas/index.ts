import startup from "./startup";
import student from "./student";
import pages from "./pages";
import modules from "./modules";
import posts from "./posts";
import author from "./author";
import contact from "./contact";
import partners from "./partners";
import facultyMembers from "./facultyMembers";
import notifications from "./notifications";
import apply from './pages/apply'   

export const schemas = [
  startup,
  student,
  posts,
  author,
  contact,
  partners,
  facultyMembers,
  notifications,
  ...pages,
  ...modules,
  apply,
];
