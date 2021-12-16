import WorkExpUnit from './Units/WorkExpUnit';

const WorkExp = ({
    workExp,
    onAddWorkExp,
    onDeleteWorkExp
}) => {
    return (
        <div className="workexp-wrapper">
            { workExp.map((workExpUnit) => {
                return (
                    <WorkExpUnit
                        key={workExpUnit.id}
                        id={workExpUnit.id}
                        isDefaultUnit={workExpUnit.isDefaultUnit}
                        onAddWorkExp={onAddWorkExp}
                        onDeleteWorkExp={onDeleteWorkExp}
                    />
                )

            })}
        </div>
    )
}

export default WorkExp;