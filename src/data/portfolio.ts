import profileImage from '@/assets/umit_profile_pic.jpg'
import type { Profile } from '@/types/portfolio'

export const profile: Profile = {
  name: 'Umit Saha',
  title: 'Software Engineer at Samsung R&D Bangladesh',
  location: 'Dhaka, Bangladesh',
  image: {
    src: profileImage,
    alt: 'Portrait of Umit Saha',
  },
  introduction:
    'I build production software with a focus on correctness, performance, and scalable design. My background in competitive programming and research shapes how I reason about algorithms, systems, and long-term technical growth.',
  about: [
    'I am a software engineer at Samsung R&D Bangladesh, where I work on production-grade systems and collaborate through design discussions and code reviews. In 2025 I completed a three-month onsite assignment in Seoul, South Korea, working with Samsung engineers.',
    'I care about writing software that is reliable under real constraints: performance, maintainability, and careful debugging. Competitive programming trained me to search for cleaner algorithms; industry work taught me to ship them as durable systems.',
    'I have been involved in competitive programming for several years, including ICPC regionals and the ICPC Asia West contest. I also mentor students in data structures and algorithms at Shohoj Coding.',
    'My research interests sit at the intersection of programming skill, assessment, and machine learning. I co-authored an IEEE conference paper on predicting industry placement from competitive programming performance.',
  ],
  resumePath: '/resume/Umit_Saha.pdf',
  social: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/umit-saha-1338b2254',
      kind: 'linkedin',
    },
    {
      label: 'Codeforces',
      href: 'https://codeforces.com/profile/umitsaha',
      kind: 'codeforces',
    },
  ],
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Competitive Programming', href: '#competitive-programming' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ],
  experience: [
    {
      id: 'srbd-se',
      role: 'Software Engineer',
      organization: 'Samsung R&D Bangladesh',
      start: 'May 2025',
      end: 'Present',
      summary: [
        'Developing and maintaining production-grade software systems.',
        'Working on performance, correctness, and scalability.',
        'Debugging complex issues and improving code quality.',
        'Collaborating through code reviews and design discussions.',
      ],
      highlight:
        'Completed a three-month onsite assignment in Seoul, South Korea, collaborating with Samsung engineers.',
    },
    {
      id: 'srbd-intern',
      role: 'Intern',
      organization: 'Samsung R&D Bangladesh',
      start: 'February 2025',
      end: 'May 2025',
      summary: [
        'Completed an internship at Samsung R&D Bangladesh before joining as a software engineer.',
      ],
    },
    {
      id: 'shohoj',
      role: 'Competitive Programming Mentor',
      organization: 'Shohoj Coding',
      start: 'December 2025',
      end: 'Present',
      summary: ['Mentoring students in data structures and algorithms.'],
    },
    {
      id: 'scale-ai',
      role: 'AI Trainer',
      organization: 'Scale AI / RemoTasks',
      start: 'June 2023',
      end: 'August 2023',
      summary: [
        'Solved data structures and algorithms problems for AI training datasets.',
        'Wrote solutions and test cases.',
      ],
    },
  ],
  education: [
    {
      id: 'bsc',
      school: 'Institute of Information Technology (IIT), Jahangirnagar University',
      credential: 'B.Sc. in Information and Communication Technology',
      detail: 'CGPA 3.57 / 4.00',
      period: 'Graduated 2025',
    },
    {
      id: 'hsc',
      school: 'Notre Dame College, Dhaka',
      credential: 'Higher Secondary Certificate (Science)',
      detail: 'GPA 5.00 / 5.00',
      period: '2017 – 2019',
    },
  ],
  achievements: [
    {
      id: 'problems',
      title: '4000+ problems solved',
      detail:
        'Cumulative problem-solving practice across competitive programming platforms.',
      source: 'self-reported',
    },
    {
      id: 'west',
      title: 'ICPC Asia West 2025',
      detail: 'Participant.',
      source: 'self-reported',
    },
    {
      id: 'srbd-finalist',
      title: 'SRBD Code Contest finalist',
      detail: 'Finalist in 2023 and 2024.',
      source: 'self-reported',
    },
    {
      id: 'srbd-onsite',
      title: 'SRBD onsite contest, 2024',
      detail: '3rd position.',
      source: 'self-reported',
    },
  ],
  contests: [
    { id: 'icpc-2021', contest: 'ICPC Asia Dhaka Regional Contest', year: '2021', result: 'Rank 25' },
    { id: 'icpc-2022', contest: 'ICPC Asia Dhaka Regional Contest', year: '2022', result: 'Rank 25' },
    { id: 'icpc-2023', contest: 'ICPC Asia Dhaka Regional Contest', year: '2023', result: 'Rank 38' },
    { id: 'icpc-2024', contest: 'ICPC Asia Dhaka Regional Contest', year: '2024', result: 'Rank 21' },
    {
      id: 'ncpc-2023',
      contest: 'NCPC Final',
      year: '2023',
      result: 'Rank 15',
      href: 'https://bapsoj.org/contests/ncpc-2023-onsite-hosted-by-ju/standings',
    },
    {
      id: 'buet-2023',
      contest: 'BUET CSE Fest IUPC',
      year: '2023',
      result: 'Rank 7',
      href: 'https://toph.co/c/buet-inter-university-2023/standings/kiosk',
    },
    { id: 'kuet-2025', contest: 'KUET CSE Fest IUPC', year: '2025', result: 'Rank 18' },
  ],
  platforms: {
    problemsSolvedNote:
      'Self-reported cumulative total across competitive programming platforms.',
  },
  onlineJudgeProfiles: [
    {
      id: 'codeforces',
      platform: 'Codeforces',
      username: 'umitsaha',
      profileUrl: 'https://codeforces.com/profile/umitsaha',
      description: 'Primary competitive programming profile.',
      rating: '1687',
      maxRating: '1847',
      rank: 'Expert',
      problemsSolved: '2626',
      statistic: 'Jahangirnagar University · Bangladesh',
      verified: true,
      featured: true,
      accent: '#ef4444',
    },
    {
      id: 'codechef',
      platform: 'CodeChef',
      username: 'umitsaha',
      profileUrl: 'https://www.codechef.com/users/umitsaha',
      description: 'Competitive programming contests and practice.',
      rating: '2043',
      maxRating: '2090',
      rank: '5 Star',
      problemsSolved: '36',
      statistic: 'Jahangirnagar University · Bangladesh',
      verified: true,
      accent: '#b77942',
    },
    {
      id: 'atcoder',
      platform: 'AtCoder',
      username: 'umitsaha',
      profileUrl: 'https://atcoder.jp/users/umitsaha',
      description: 'Algorithm contests and rated matches.',
      rating: '1436',
      maxRating: '1458',
      rank: '3 Kyu',
      statistic: 'Codeforces ID: umitsaha',
      verified: true,
      accent: '#2f80ed',
    },
    {
      id: 'vjudge',
      platform: 'VJudge',
      username: 'umitsaha',
      profileUrl: 'https://vjudge.net/user/umitsaha',
      description: 'Virtual Judge / multi-OJ platform.',
      problemsSolved: '800',
      statistic: '836 attempted · 76 months registered',
      verified: true,
      accent: '#22c55e',
    },
    {
      id: 'lightoj',
      platform: 'LightOJ',
      username: 'umitsaha',
      profileUrl: 'https://lightoj.com/user/umitsaha',
      description: 'Online judge practice profile.',
      problemsSolved: '327',
      statistic: '879 submissions · Jahangirnagar University',
      verified: true,
      accent: '#f59e0b',
    },
  ],
  projects: [
    {
      id: 'code-to-career',
      title: 'From Code to Career',
      summary:
        'Machine learning research on predicting industry placement from Codeforces performance data.',
      details: [
        'Built a machine learning model to predict industry placement using Codeforces performance data.',
        'Analyzed competitive programming metrics, rating progression, and problem-solving behavior.',
        'Published as an IEEE conference paper (QPAIN 2025).',
      ],
      tags: ['Python', 'Machine Learning', 'Codeforces data', 'Research'],
      category: 'Research',
      links: [
        {
          label: 'IEEE Xplore',
          href: 'https://ieeexplore.ieee.org/document/11171661',
        },
        {
          label: 'arXiv',
          href: 'https://arxiv.org/abs/2508.00772',
        },
      ],
    },
  ],
  publication: {
    title:
      'From Code to Career: Assessing Competitive Programmers for Industry Placement',
    venue: 'IEEE QPAIN 2025',
    year: '2025',
    authors: [
      'Md Imranur Rahman Akib',
      'Fathima Binthe Muhammed',
      'Umit Saha',
      'Md Fazlul Karim Patwary',
      'Mehrin Anannya',
      'Md Alomgeer Hussein',
      'Md Biplob Hosen',
    ],
    overview:
      'This paper studies how competitive programming activity on Codeforces relates to industry placement potential. The work analyzes performance metrics and problem-solving behavior, then trains classification models to estimate job-readiness levels.',
    doi: '10.1109/QPAIN66474.2025.11171661',
    ieeeXploreUrl: 'https://ieeexplore.ieee.org/document/11171661',
    arxivUrl: 'https://arxiv.org/abs/2508.00772',
    documentId: '11171661',
  },
  skills: [
    {
      title: 'Languages',
      items: ['C++', 'C', 'Python', 'C#', 'Kotlin'],
    },
    {
      title: 'Desktop & services',
      items: ['WPF', 'WCF'],
    },
    {
      title: 'Computer science',
      items: [
        'Data Structures and Algorithms',
        'Competitive Programming',
        'Algorithmic Optimization',
      ],
    },
    {
      title: 'Machine learning',
      items: ['Basic Machine Learning'],
    },
  ],
}
