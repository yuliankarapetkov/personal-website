import type { Recommendation } from './Recommendation';

export interface Job {
    company: string;
    location: string;
    duration: string;
    role: string;
    description: string;
    recommendation?: Recommendation;
    technologies: string[];
}
