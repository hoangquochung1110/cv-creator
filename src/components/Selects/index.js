import { SelectWrapper } from "./Style";

const Select = ({options}) => {
    return (
        <SelectWrapper>
            <select>
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