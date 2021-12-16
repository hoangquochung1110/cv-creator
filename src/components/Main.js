import CollectorContainer from "./Collector/CollectorContainer";
import { useState } from "react";
import uniqid from 'uniqid';
import Resume from "./Resume/Resume";

const Main = () => {
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
                <CollectorContainer 
                    collection={collection} 
                    onChangePersonal={changePersonalHandler}

                    onAddEducation={addEducationHandler}
                    onDeleteEducation={deleteEducationHandler}
                    onChangeEducation={changeEducationHandler}

                    onAddWorkExp={addWorkExpHandler}
                    onDeleteWorkExp={deleteWorkExpHandler}

                    onAddSkills={addSkillsHandler}
                    onDeleteSkills={deleteSkillsHandler}
                    onChangeSkills={changeSkillsHandler}
                />
                <div className="line-breaker"></div>
                <Resume collection={collection} />
        </div>
    );
};

const emptyCollection = {
    'personal': {
        id: uniqid(),
        lname: 'Adams',
        fname: 'John',
        jobtitle: 'Software Developer',
        address: 'Orange County, CA',
        email: 'ajohn@example.com',
        telephone: '84 934099412'
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
        },
        // {
        //     id: uniqid(),
        //     isDefaultUnit: false,
        //     jobTitle: 'Jr Backend Developer',
        //     orgName: 'Odin Tech',
        //     orgPlace: 'San Jose, CA',
        //     workFrom: '01/2019',
        //     workTo: '01/2020',
        // }
    ],
    'skills': [{key: uniqid(), isDefaultUnit: true, id: uniqid(), name: 'Sample'}]
}

export default Main;