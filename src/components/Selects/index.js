import { SelectWrapper } from "./Style";

const Select = ({options, onChange}) => {
    return (
        <SelectWrapper>
            <select onChange={onChange}>
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