import { SelectWrapper } from "./Styles";
import uniqid from "uniqid";

const Select = ({ id, options, onChange }) => {
    return (
        <SelectWrapper id={id} onChange={onChange}>
            {options.map((option) => {
                return (
                    <option key={uniqid()} value={option.value}>
                        {option.label}
                    </option>
                );
            })}
        </SelectWrapper>
    );
};

export default Select;
