import { Image } from "sanity";

interface SanityMeta {
  _type: string;
  _id: string;
  _rev: string;
  _createdAt: Date;
  _updatedAt: Date;
}

interface Quote {
  _type: string;
  quote: string;
  author: string;
}

export interface Block {
  _key: string;
  _type: "block";
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: {
    text: string;
  }[];
  markDefs: any[];
  listItem?: "bullet" | "number";
  level?: number;
}

/** ✅ New Call to Action Type */
interface CallToAction {
  text: string;
  link: string;
}

/** ✅ New Partner Logos Type */
type PartnerLogo = Image;

/** ✅ New Section Type */
interface Section {
  title: string;
  description: string;
}

/** ✅ New Success Story Type */
interface SuccessStory {
  name: string;
  position: string;
  story: string;
  image: Image;
}

/** ✅ New News & Publications Type */
interface NewsItem {
  title: string;
  date: string;
  description: string;
  link: string;
}

/** ✅ New Statistics Type */
interface Statistic {
  value: string;
  description: string;
}

/** ✅ New Contact Section Type */
interface ContactSection {
  title: string;
  description: string;
  image: Image;
}

/** ✅ Updated HomePage Type to Match `home.ts` Schema */
export interface HomePage extends SanityMeta {
  title: string;
  description: string;
  image: Image;
  cta: CallToAction;
  partners: PartnerLogo[];
  sections: Section[];
  successStories: SuccessStory[];
  news: NewsItem[];
  statistics: Statistic[];
  contact: ContactSection;
}

export interface AboutPage extends SanityMeta {
  title: string;
  image: Image;
  content_p1: Block[];
  quote: Quote;
  video: string;
  description: string;
  content_p2: Block[];
}

export interface SortableItem extends SanityMeta {
  sortOrder: number;
}

export interface ContactPerson extends SortableItem {
  position: string;
  email: string;
  image: Image;
  phone: string;
  name: string;
}

interface TimelineItem {
  date: string;
  title: string;
  description: Block[];
}

interface InformationBox {
  title: string;
  text: string;
}

interface Step {
  title: string;
  text: string;
}

interface OutroTextItem {
  title: string;
  text: string;
  url: string;
}

export interface SanityBase {
  _type: string;
  _key: string;
}

export interface IntroSection extends SanityBase {
  _type: "introSection";
  title: string;
  content: Block[];
}

export interface ProcessSection extends SanityBase {
  _type: "processSection";
  title: string;
  introText: Block[];
  timeline: TimelineItem[];
}

export interface ContentSection extends SanityBase {
  _type: "contentSection";
  title: string;
  introText: Block[];
  informationBoxes: InformationBox[];
}

export interface StepsSection extends SanityBase {
  _type: "stepsSection";
  title: string;
  steps: Step[];
  outroText: OutroTextItem[];
}

type Subsection = IntroSection | ProcessSection | ContentSection | StepsSection;

interface FAQItem {
  _key: string;
  title: string;
  content: Block[];
}

export interface ApplyPage extends SanityMeta {
  title: string;
  subsections: Subsection[];
  FAQ: FAQItem[];
}

interface Course {
  courseCode: string;
  title: string;
  credits: string;
  url: string;
}

interface Semester {
  title: string;
  topic: string;
  courses: Course[];
}

interface BostonInfo {
  title: string;
  topic: string;
  text: string;
  url: string;
}

interface ProgramProgression {
  title: string;
  section: {
    title: string;
    text: string;
  }[];
}
export interface ProgramStructurePage extends SanityMeta {
  title: string;
  introTitle: string;
  intro: string;
  readMoreLink: string;
  semesters: Semester[];
  bostonInfo: BostonInfo;
  programProgression: ProgramProgression;
}

export interface AlumniOrganizationPage extends SanityMeta {
  video: string;
  content: Block[];
  image: Image;
}

export interface FacultyMember extends SortableItem {
  name: string;
  title: string;
  image: Image;
  bio: Block[];
  sortOrder: number;
}

export interface Startup {
  name: string;
  description?: Block[];
  url?: string;
  logo: Image;
  linkedin?: string;
  mail?: string;
  isInHouse: boolean;
}

export interface Student {
  _type: string;
  name: string;
  description: string;
  linkedin: string | null;
  current: boolean;
  image: Image;
  year: number;
}
