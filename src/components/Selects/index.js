import { SelectWrapper } from "./Style";

const Select = ({id, options, onChange}) => {
    return (
        <SelectWrapper>
            <select 
                id={id}
                onChange={onChange}>
                    {
                        options.map((option) => {
                            return (
                                <option value={option.value}>{option.label}</option>
                            )
                        })
                    }
            </select>
        </SelectWrapper>
    )
}

export default Select;