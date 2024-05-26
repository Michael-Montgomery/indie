import users from "./users";


let opportunitiesList = [
    {
        company: {
            name: 'The Boeing Company',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            benefits: {
                unlimitedPTO: true,
                annualBonus: true,
                equity: true,
                fitnessProgram: true,
                fourDayWorkweek: true
            }

        },
        opportunity: {
            postDate: new Date('2022-03-25 11:13:00'),
            title: 'Senior Software Engineer',
            payRangeMinInThousands: 93,
            payRangeMaxInThousands: 134,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            signOnBonus: true,
            application: {
                external: true,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: [ {
                firstName: 'James',
                lastName: 'Williams',
                email: 'mrwilliams@gmail.com',
                phone: 3218908653,
                state: 'FL'
            },
            {
                firstName: 'Randall',
                lastName: 'Gellar',
                email: 'mrwilliams@gmail.com',
                phone: 3218908653,
                state: 'FL'
            }]
        }
    },
    {
        company: {
            name: 'Apple Inc',
            description: '',
            benefits: {
                unlimitedPTO: false,
                annualBonus: true,
                equity: true,
                fitnessProgram: true,
                fourDayWorkweek: true
            }

        },
        opportunity: {
            postDate: new Date('2024-04-17 11:13:00'),
            title: 'Senior Software Engineer',
            payRangeMinInThousands: 87,
            payRangeMaxInThousands: null,
            description: '',
            signOnBonus: true,
            application: {
                external: false,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: users
        }
    },
    {
        company: {
            name: 'Google',
            description: '',
            benefits: {
                unlimitedPTO: true,
                annualBonus: true,
                equity: true,
                fitnessProgram: true,
                fourDayWorkweek: true
            }

        },
        opportunity: {
            postDate: new Date('2024-04-20 11:13:00'),
            title: 'Software Developer',
            payRangeMinInThousands: 99,
            payRangeMaxInThousands: 117,
            description: '',
            signOnBonus: true,
            application: {
                external: true,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: users
        }
    },
    {
        company: {
            name: 'OmniCorp',
            description: '',
            benefits: {
                unlimitedPTO: true,
                annualBonus: false,
                equity: true,
                fitnessProgram: false,
                fourDayWorkweek: true
            }

        },
        opportunity: {
            postDate: new Date('2024-07-07 11:13:00'),
            title: 'Senior Software Engineer',
            payRangeMinInThousands: 140,
            payRangeMaxInThousands: null,
            description: '',
            signOnBonus: true,
            application: {
                external: true,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: users
        }
    },
     {
        company: {
            name: 'The Boeing Company',
            description: 'jgfj gjfs gkjfsklg jfkslg jfkslg jfklsgjfk lgjf dkljfdklg',
            benefits: {
                unlimitedPTO: true,
                annualBonus: true,
                equity: true,
                fitnessProgram: true,
                fourDayWorkweek: true
            }

        },
        opportunity: {
            postDate: new Date('2024-04-23 11:13:00'),
            title: 'Senior Software Engineer',
            payRangeMinInThousands: 88,
            payRangeMaxInThousands: 99,
            description: '',
            signOnBonus: true,
            application: {
                external: true,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: users
        }
    },
    {
        company: {
            name: 'Apple Inc',
            description: '',
            benefits: {
                unlimitedPTO: true,
                annualBonus: true,
                equity: true,
                fitnessProgram: true,
                fourDayWorkweek: true
            }

        },
        opportunity: {
            postDate: new Date('2024-04-22 11:13:00'),
            title: 'Senior Software Engineer',
            payRangeMinInThousands: 185,
            payRangeMaxInThousands: 217,
            description: '',
            signOnBonus: true,
            application: {
                external: true,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: users
        }
    },
    {
        company: {
            name: 'Google',
            description: '',
            benefits: {
                unlimitedPTO: true,
                annualBonus: true,
                equity: true,
                fitnessProgram: true,
                fourDayWorkweek: true
            }

        },
        opportunity: {
            postDate: new Date('2024-04-18 11:13:00'),
            title: 'Software Developer',
            payRangeMinInThousands: 295,
            payRangeMaxInThousands: 360,
            description: '',
            signOnBonus: true,
            application: {
                external: true,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: users
        }
    },
    {
        company: {
            name: 'OmniCorp',
            description: '',
            benefits: {
                unlimitedPTO: true,
                annualBonus: false,
                equity: true,
                fitnessProgram: false,
                fourDayWorkweek: true
            }

        },
        opportunity: {
            postDate: new Date('2024-04-11 11:13:00'),
            title: 'Senior Software Engineer',
            payRangeMinInThousands: 93,
            payRangeMaxInThousands: 134,
            description: '',
            signOnBonus: true,
            application: {
                external: true,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: []
        }
    },
    {
        company: {
            name: 'Northrop Grumman',
            description: "At Northrop Grumman, our employees have incredible opportunities to work on revolutionary systems that impact people's lives around the world today, and for generations to come. Our pioneering and inventive spirit has enabled us to be at the forefront of many technological advancements in our nation's history - from the first flight across the Atlantic Ocean, to stealth bombers, to landing on the moon. We look for people who have bold new ideas, courage and a pioneering spirit to join forces to invent the future, and have fun along the way. Our culture thrives on intellectual curiosity, cognitive diversity and bringing your whole self to work — and we have an insatiable drive to do what others think is impossible. Our employees are not only part of history, they're making history.",
            benefits: {
                unlimitedPTO: false,
                annualBonus: true,
                equity: false,
                fitnessProgram: false,
                fourDayWorkweek: true
            },
            
        },
        opportunity: {
            postDate: new Date('2024-04-11 11:13:00'),
            title: 'Senior Software Engineer',
            payRangeMinInThousands: 122,
            payRangeMaxInThousands: 149,
            description: "At Northrop Grumman, our employees have incredible opportunities to work on revolutionary systems that impact people's lives around the world today, and for generations to come. Our pioneering and inventive spirit has enabled us to be at the forefront of many technological advancements in our nation's history - from the first flight across the Atlantic Ocean, to stealth bombers, to landing on the moon. We look for people who have bold new ideas, courage and a pioneering spirit to join forces to invent the future, and have fun along the way. Our culture thrives on intellectual curiosity, cognitive diversity and bringing your whole self to work — and we have an insatiable drive to do what others think is impossible. Our employees are not only part of history, they're making history.",
            signOnBonus: true,
            application: {
                external: true,
                externalUrl: 'https://jobs.netflix.com/jobs/332319698'
            },
            applicants: users
        }
    }
];

export default opportunitiesList;