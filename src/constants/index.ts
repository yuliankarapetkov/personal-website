import type { Recommendation } from '../models';

export const RECOMMENDATIONS: { [key: string]: Recommendation } = {
	ian: {
		id: 'ian',
		author: {
			name: 'Ian McLoughlin',
			role: 'CEO',
			company: 'Stim',
			photoUrl: '/images/recommendations/ian.jpeg',
			linkedIn: 'https://www.linkedin.com/in/ian-mcloughlin/',
			email: 'ian@stim.io'
		},
		text: `Yulian worked at stim.io as a lead senior front-end developer. He is an incredible senior engineer who writes quality code with full test coverage, and is an all around great person.

He single handedly wrote every line of code for the stim payments platform and our front-end wallet app. Bug free, full test coverage, and quick development with a clear understanding of business requirements. He also led interactions with multiple partners to coordinate api integrations from banking to payments.

Beyond his technical skills, he has become a critical part of our company culture here at stim. A great person, a leader, and a friend. 

Due to market conditions and difficulty fundraising we were forced to part ways, but we hope to rehire him the second we are able.`
	},
	jackson: {
		id: 'jackson',
		author: {
			name: 'Jackson Holiday Wheeler',
			role: 'CTO',
			company: 'PlayPilot',
			photoUrl: '/images/recommendations/jackson.jpg',
			linkedIn: 'https://www.linkedin.com/in/jackson-holiday-wheeler/',
			email: 'jackson@playpilot.com'
		},
		text: `Yulian is an excellent developer. His positive attitude and solution-oriented way of approaching the world has made working with him for the past 2 years one of the best professional experiences I’ve had in my career. He excels at solving problems quickly and creating robust solutions that stand the test of time. Moreover, he has superb communication skills: he expresses himself clearly and succinctly, and he is particularly skilled at clarifying complex specifications. I wholeheartedly recommend him!`
	},
	david: {
		id: 'david',
		author: {
			name: 'David Mühle',
			role: 'CEO',
			company: 'PlayPilot',
			photoUrl: '/images/recommendations/david.jpg',
			linkedIn: 'https://www.linkedin.com/in/davidmuhle/',
			email: 'david@playpilot.com'
		},
		text: `Yulian is a very gifted guy who is extremely good at programming. He has lots of integrity and I would dare to say he is a frontend genius. On top of that, he's a team player and he is customer-focused. Yulian is a professional, helpful, and very positive person. He has been an essential part of the PlayPilot success and he will always be welcome back. It is a true pleasure and honor to recommend Yulian to anyone who wants to hire him.`
	},
	michael: {
		id: 'michael',
		author: {
			name: 'Michael Horton',
			role: 'CEO',
			company: 'Slate',
			photoUrl: '/images/recommendations/michael.jpg',
			linkedIn: 'https://www.linkedin.com/in/mshorto/',
			email: 'michael@slatehq.com'
		},
		text: `Yulian is a skilled developer as well as a great communicator. We hired Yulian to lead the front-end development of the initial version of our web product and he did an amazing job. He was knowledgeable, skilled and detail oriented. He got the job done in a very reasonable timetable and was a pleasure to work with the entire time.`
	},
	lucas: {
		id: 'lucas',
		author: {
			name: 'Lucas Introne',
			role: 'CTO',
			company: 'Pikkop',
			photoUrl: '/images/recommendations/lucas.jpg',
			linkedIn: 'https://www.linkedin.com/in/lintrone/',
			email: 'lucas@entronic.com'
		},
		text: `Yulian won me over with his attitude and communication, and backed it up with solid skills and clean code that's easy to understand and maintain. He is intelligent, proactive, reliable, a fast learner, and pays attention to detail. Whether working independently, as part of a team, or as a leader, Yulian always rose to the occasion. Certainly a top talent, I recommend him without reservation, and can't look forward to hiring him again.`
	},
	loic: {
		id: 'loic',
		author: {
			name: 'Loic Le Pichoux',
			role: 'CEO',
			company: 'KLEAR',
			photoUrl: '/images/recommendations/loic.jpg',
			linkedIn: 'https://www.linkedin.com/in/loiclepichoux/',
			email: 'loic@klearlending.com'
		},
		text: `Yuli has strongly contributed to the building from scratch of Klear, the first Bulgarian Peer-to-Peer lending platform.
                Yuli is a smart person, very respectful of the projects which are assigned to him and at the same time always active to suggest improvements to achieve the best possible result.
                He is a very serious person, curious and a great team player.
                It was a pleasure to work with Yuli!`
	}
};
