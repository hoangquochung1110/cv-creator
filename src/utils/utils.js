import uniqid from 'uniqid';

const sampleCV = {
    'personal': {
        id: uniqid(),
        // lname: 'Adams',
        fname: 'JOHN ADAMS',
        address: 'Orange County, CA',
        email: 'ajohn@example.com',
        telephone: '84 934099412',
        github: 'example@github'
    },
    'education': [ 
        {   
            id: uniqid(),
            isDefaultUnit: true,
            studyProgram: 'Bachelor of Computer Science',
            eduName: 'University of North Carolina',
            eduPlace: 'San Jose, CA',
            eduFrom: '08/2014',
            eduTo: '01/2020',
            description: 'Courses: Algebra, Statistics, Matrix Delta, Marketing, Algorithms and Hacking'
        },
        {   
            id: uniqid(),
            isDefaultUnit: false,
            studyProgram: 'Study Program',
            eduName: 'Name of Education',
            eduPlace: 'Place of Education',
            eduFrom: 'mm/yyyy',
            eduTo: 'mm/yyyy',
            description: 'Courses taken/ Graduate thesis'
        },
        {   
            id: uniqid(),
            isDefaultUnit: false,
            studyProgram: 'Study Program',
            eduName: 'Name of Education',
            eduPlace: 'Place of Education',
            eduFrom: 'mm/yyyy',
            eduTo: 'mm/yyyy',
            description: 'Courses taken/ Graduate thesis'
        },
    ],
    'workExp': [
        {
            id: uniqid(),
            isDefaultUnit: true,
            jobTitle: 'Project Manager',
            orgName: 'Odin Tech',
            orgPlace: 'Los Angeles, CA',
            workFrom: '01/2020',
            workTo: 'Present',
            achievements: 'Kaggle Big Data: a Chinese grocery store had more than 800K transactions from November 2000 to February 2001. Write PySpark code to process and clean files of more than 1.5 million rows and to do feature selections.'
        },
        {
            id: uniqid(),
            isDefaultUnit: false,
            jobTitle: 'Jr Backend Developer',
            orgName: 'Odin Tech',
            orgPlace: 'San Jose, CA',
            workFrom: '01/2019',
            workTo: '01/2020',
            achievements: 'Implement a distributed version of SON algorithm for finding frequent itemsets in PySpark. Utilize XGboost and Item-based collaborative filtering to predict the score a user would rate a business'

        },
        {
            id: uniqid(),
            isDefaultUnit: false,
            jobTitle: 'Job title',
            orgName: 'Name of organization',
            orgPlace: 'Place of organization',
            workFrom: 'mm/yyyy',
            workTo: 'mm/yyyy',
            achievements: 'Achievements'

        }
    ],
    'skills': [
        {
            key: uniqid(), 
            isDefaultUnit: true, 
            id: uniqid(), 
            name: 'Python'
        },
        {
            key: uniqid(),
            isDefaultUnit: false,
            id: uniqid(),
            name: 'JavaScript'
        }
    
    ]
}

export default sampleCV;