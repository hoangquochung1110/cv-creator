import { WorkExpWrapper } from './styles';
import WorkExpUnit from './WorkExpUnit';

const WorkExp = ({
    workExp,
    onAddWorkExp,
    onDeleteWorkExp,
    onChangeWorkExp
}) => {
    return (
        <WorkExpWrapper>
            { workExp.map((workExpUnit) => {
                return (
                    <WorkExpUnit
                        key={workExpUnit.id}
                        id={workExpUnit.id}
                        workExpUnit={workExpUnit}
                        isDefaultUnit={workExpUnit.isDefaultUnit}
                        onAddWorkExp={onAddWorkExp}
                        onDeleteWorkExp={onDeleteWorkExp}
                        onChangeWorkExp={onChangeWorkExp}
                    />
                )

            })}
        </WorkExpWrapper>
    )
}

export default WorkExp;