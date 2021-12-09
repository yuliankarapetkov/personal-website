export interface Recommendation {
    author: {
        name: string;
        role: string;
        company: string;
        photoUrl: string;
        linkedIn: string;
        email: string;
    },
    text: string;
};
