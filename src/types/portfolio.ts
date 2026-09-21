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
  source: 'self-reported' | 'live'
}

export type ContestResult = {
  id: string
  contest: string
  year: string
  result: string
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
    codeforcesHandle: string
    codeforcesMaxRating: number
    codeforcesRank: string
    codechefStars: number
    problemsSolvedLabel: string
    problemsSolvedNote: string
  }
  projects: Project[]
  publication: Publication
  skills: SkillGroup[]
}
