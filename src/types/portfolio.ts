export type SocialLink = {
  label: string
  href: string
  kind: 'github' | 'linkedin' | 'email' | 'codeforces' | 'other'
}

export type NavItem = {
  label: string
  href: string
}

export type ExperienceItem = {
  id: string
  role: string
  organization: string
  location?: string
  start: string
  end: string
  summary: string[]
  highlight?: string
}

export type EducationItem = {
  id: string
  school: string
  credential: string
  detail: string
  period: string
}

export type Achievement = {
  id: string
  title: string
  detail: string
  href?: string
}

export type ContestResult = {
  id: string
  contest: string
  year: string
  result: string
  href?: string
}

export type Project = {
  id: string
  title: string
  summary: string
  details: string[]
  tags: string[]
  category: 'Research' | 'Engineering'
  links: { label: string; href: string }[]
}

export type Publication = {
  title: string
  venue: string
  year: string
  authors: string[]
  overview: string
  doi?: string
  ieeeXploreUrl?: string
  arxivUrl?: string
  documentId?: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type OnlineJudgeProfile = {
  id: string
  platform: string
  username: string
  profileUrl: string
  description: string
  rating?: string
  maxRating?: string
  rank?: string
  problemsSolved?: string
  statistic?: string
  verified: boolean
  featured?: boolean
  accent: string
}

export type Profile = {
  name: string
  title: string
  location: string
  introduction: string
  about: string[]
  image?: {
    src: string
    alt: string
  }
  email?: string
  resumePath: string
  social: SocialLink[]
  nav: NavItem[]
  experience: ExperienceItem[]
  education: EducationItem[]
  achievements: Achievement[]
  contests: ContestResult[]
  platforms: {
    problemsSolvedNote: string
  }
  onlineJudgeProfiles: OnlineJudgeProfile[]
  projects: Project[]
  publication: Publication
  skills: SkillGroup[]
}
