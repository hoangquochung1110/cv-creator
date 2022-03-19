import Collector from "./collector";
import { useState } from "react";
import uniqid from 'uniqid';
import Resume from "./resume";
import { sampleCV } from './utils';
import styled from "styled-components";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Toolkit from "./toolkit";

const Main = () => {
    const [collection, setCollection] = useState(sampleCV); // data collection
    const [font, setFont] = useState('Ubuntu');
    const [section, setSection] = useState({"name": null, "id": null});

    const changePersonalHandler = (e, id) => {
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
                studyProgram: 'Study Program',
                eduName: 'Name of Education',
                eduPlace: 'Place of Education',
                eduFrom: 'mm/yyyy',
                eduTo: 'mm/yyyy',
                description: 'Courses taken/ Graduate thesis.'
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
                jobTitle: 'Job Title',
                orgName: 'Name of Organization',
                orgPlace: 'Place of Organization',
                workFrom: 'mm/yyyy',
                workTo: 'mm/yyyy',
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

    const setTargetSection = (e, section, sectionID) => {
        setSection({"name": section, "id": sectionID});
    }

    const addSection = () => {
        if (section.name !== null && section.id !== null){
            switch (section.name){
                case "education":
                    addEducationHandler();
                    break;
                case "workExperience":
                    addWorkExpHandler();
                    break;
                case "skill":
                    addSkillsHandler();
                    break;
                default:
                    console.log("Error !!!");
                    break;
            }
            // reset section to null after adding
            setSection({"name": null, "id": null})
        }
    }

    const removeSection = (e) => {
        if (section.name !== null && section.id !== null){
            switch (section.name){
                case "education":
                    deleteEducationHandler(section.id);
                    break;
                case "workExperience":
                    addWorkExpHandler();
                    break;
                case "skill":
                    addSkillsHandler();
                    break;
                default:
                    console.log("Error !!!");
                    break;
            }
        }
    }

    return (
        <>
            <Header/>
            <AppWrapper>
                <Toolkit 
                    addSection={addSection}
                    removeSection={removeSection}
                    setFont={setFont}
                />
                <Resume 
                    collection={collection} 
                    font={font}
                    setSection={setTargetSection}
                />            
            </AppWrapper>
            <Footer/>
        </>
    );
};

const AppWrapper = styled.div``;

export default Main;