import Collector from "./collector";
import { useState } from "react";
import uniqid from 'uniqid';
import Resume from "./resume/Resume";
import { ModeSwitcher } from "./components/Buttons";
import { FontSelector } from "./components/Inputs";
import { X, Check, sampleCV} from './utils';
import styled from "styled-components";

const Main = () => {
    const [collection, setCollection] = useState(sampleCV); // data collection
    const [mode, setMode] = useState(false);
    const [font, setFont] = useState('Ubuntu');

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
                eduName: 'Name of Educational Institute',
                eduPlace: 'Place of Educational Institute',
                eduFrom: 'mm/yyyy',
                eduTo: 'mm/yyyy',
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



    return (
        
        <AppWrapper>
            <Customizer>
                <FontSelector 
                    options={[
                        { value: 'Roboto', label: 'Roboto' },
                        { value: 'Calibri', label: 'Calibri' },
                        { value: 'Ubuntu', label: 'Ubuntu' },
                        { value: 'Futara', label: 'Futara' }
                    ]}
                    onChange={(e) => setFont(e.value)}
                    
                />
                <ModeSwitcher
                    value={mode}
                    inactiveLabel={<X/>}
                    activeLabel={<Check/>}
                    onToggle={(mode) => {
                        setMode(!mode);
                    }}
                />
            </Customizer>

            { !mode ?   <Resume 
                            collection={collection} 
                            font={font}
                        />
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

        </AppWrapper>
    );
};

const Customizer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    column-gap: .5rem;
`

const AppWrapper = styled.div``;

export default Main;