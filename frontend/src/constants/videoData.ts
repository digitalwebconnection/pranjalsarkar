const v1 = "/video/1.mp4";
const v2 = "/video/2.mp4";
const v3 = "/video/3.mp4";
const v4 = "/video/4.mp4";

export interface VideoData {
  id: number;
  title: string;
  desc: string;
  url: string;
  badge: string;
}

export const previewVideos: VideoData[] = [
  {
    id: 1,
    title: 'Live Classroom',
    desc: 'Live debate on high-stakes trade-offs under ambiguity.',
    url: v1,
    badge: 'CLASSROOM'
  },
  {
    id: 2,
    title: 'AI Co-Pilot',
    desc: 'LLM roadmap validation and strategy mockups.',
    url: v2,
    badge: 'AI WORKFLOW'
  },
  {
    id: 3,
    title: 'Exec Pitch',
    desc: 'Senior leaders calibrating style for C-suite alignment.',
    url: v3,
    badge: 'C-SUITE PITCH'
  },
  {
    id: 4,
    title: 'Peer Review',
    desc: 'Feedback circles critiquing PM decision histories.',
    url: v4,
    badge: 'PEER REVIEW'
  }
];
