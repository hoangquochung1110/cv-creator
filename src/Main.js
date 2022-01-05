import Collector from "./collector/Collector";
import { useState } from "react";
import uniqid from 'uniqid';
import Resume from "./resume/Resume";
import { EditBtn } from "./components/Buttons";
import sampleCV from "./utils";

const Main = () => {
    const [collection, setCollection] = useState(sampleCV); // data collection
    const [editMode, setEditMode] = useState(true);

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

    const editModeToggler = () => {
        setEditMode((prevMode) => !prevMode)
    }



    return (
        <div className="app-container">
            { !editMode ? <Resume collection={collection}/>
                        :
                            <Collector
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
            <EditBtn editHandler={editModeToggler}/>

        </div>
    );
};


export default Main;