import uniqid from 'uniqid';

export const sampleCV = {
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
            description: 'Courses taken/ Graduate thesis.'
        },
        {   
            id: uniqid(),
            isDefaultUnit: false,
            studyProgram: 'Study Program',
            eduName: 'Name of Education',
            eduPlace: 'Place of Education',
            eduFrom: 'mm/yyyy',
            eduTo: 'mm/yyyy',
            description: 'Courses taken/ Graduate thesis.'
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
            achievements: 'Achievements.'

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

export const Check = () => (
    <svg width="14" height="10" viewBox="0 0 14 11" xmlns="http://www.w3.org/2000/svg">
      <title>
        switch-check
      </title>
      <path
        d="M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0"
        fill="#000" fillRule="evenodd"
      />
    </svg>
  );
  
  export const X = () => (
    <svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
      <title>
        switch-x
      </title>
      <path
        d="M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12"
        fill="#000" fillRule="evenodd"
      />
    </svg>
  );
