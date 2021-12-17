import CollectorContainer from "./Collector/CollectorContainer";
import { useState } from "react";
import uniqid from 'uniqid';
import Resume from "./Resume/Resume";

const Main = ({previewMode}) => {
    const [collection, setCollection] = useState(emptyCollection);

    const changePersonalHandler = (e, id) => {
        console.log(id);
        setCollection((prevCollection) => {
            const newPersonal = prevCollection.personal;
            newPersonal[id] = e.target.value;
            return {
                ...prevCollection,
                personal: newPersonal
            }
        })
    }

    const addEducationHandler = () => {
        setCollection((prevCollection) => ({
            ...prevCollection,
            education: [...prevCollection.education, {
                id: uniqid(),
                studyProgram: '',
                eduName: '',
                eduPlace: '',
                eduFrom: '',
                eduTo: '',
            }]
        }))
    }

    const deleteEducationHandler = (id) => {
        setCollection((prevCollection) => {
            const newEducation = prevCollection.education
            .filter((educationUnit) => educationUnit.id !== id)
            return {...prevCollection, education: [...newEducation]};
        })
    }

    const changeEducationHandler = (e, id) => {
        console.log(e.target.name, id, e.target.value);
        setCollection((prevCollection) => {
            const newEducation = prevCollection.education.map((educationUnit) => {
                if(educationUnit.id === id){
                    educationUnit[e.target.name] = e.target.value;
                } 
                return educationUnit;
            });

            return {
                ...prevCollection,
                education: [...newEducation]
            }                
        })
    }

    const addWorkExpHandler = () => {
        setCollection((prevCollection) => ({
            ...prevCollection,
            workExp: [...prevCollection.workExp, {
                id: uniqid(),
                jobTitle: '',
                orgName: '',
                orgPlace: '',
                workFrom: '',
                workTo: '',
            }]
        }))
    }

    const deleteWorkExpHandler = (id) => {
        setCollection((prevCollection) => {
            const newWorkExp= prevCollection.workExp
            .filter((newWorkExpUnit) => newWorkExpUnit.id !== id)
            return {...prevCollection, workExp: [...newWorkExp]};
        })
    }

    const changeWorkExpHandler = (e, id) => {
        setCollection((prevCollection) => {
            const newWorkExp = prevCollection.workExp.map((workExpUnit) => {
                if(workExpUnit.id === id){
                    workExpUnit[e.target.name] = e.target.value;
                } 
                return workExpUnit;
            });

            return {
                ...prevCollection,
                workExp: [...newWorkExp]
            }                
        })
    }

    const addSkillsHandler = () => {
        const newKey = uniqid();
        setCollection((prevCollection) => ({
            ...prevCollection,
            'skills': [...prevCollection.skills, {
                key: newKey,
                isDefaultUnit: false,
                id: newKey
            }]
            
        }))
    }

    const deleteSkillsHandler = (id) => {
        setCollection((prevCollection) => {
            const newSkills = prevCollection.skills.filter(
                (skillsUnit) => skillsUnit.id !== id);
            return {...prevCollection, skills: [...newSkills]};
        })
    }

    const changeSkillsHandler = (e, id) => {
        setCollection((prevCollection) => {
            const newSkills = prevCollection.skills.map((skillsUnit) => {
                if(skillsUnit.id === id) return {...skillsUnit, name: e.target.value}
                return {...skillsUnit};
            })
            return {...prevCollection, skills: [...newSkills]};
        })
        
    }



    return (
        <div className="app-container">
            { previewMode ? <Resume collection={collection}/>
                        :
                            <CollectorContainer 
                                collection={collection} 
                                onChangePersonal={changePersonalHandler}
                                onAddEducation={addEducationHandler}
                                onDeleteEducation={deleteEducationHandler}
                                onChangeEducation={changeEducationHandler}
                                onAddWorkExp={addWorkExpHandler}
                                onDeleteWorkExp={deleteWorkExpHandler}
                                onChangeWorkExp={changeWorkExpHandler}
                                onAddSkills={addSkillsHandler}
                                onDeleteSkills={deleteSkillsHandler}
                                onChangeSkills={changeSkillsHandler}
                            />
            }              

                {/* <div className="line-breaker"></div> */}

        </div>
    );
};

const emptyCollection = {
    'personal': {
        id: uniqid(),
        lname: 'Adams',
        fname: 'John',
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

export default Main;