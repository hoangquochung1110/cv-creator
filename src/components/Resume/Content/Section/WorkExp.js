import WorkExpUnit from './WorkExpUnit';

const WorkExp = ({workExp}) => {
    return (
        <div className='resume-workexp'>
                { workExp.map((workExpUnit) => {
                    return (
                        <WorkExpUnit key={workExpUnit.id} workExpUnit={workExpUnit} />
                    )
                })}
        </div>
    )
}

export default WorkExp;