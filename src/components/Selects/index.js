import { SelectWrapper } from "./Style";

const Select = ({id, options, onChange}) => {
    return (
        <SelectWrapper
            id={id}
            onChange={onChange}
        >
                {
                    options.map((option) => {
                        return (
                            <option value={option.value}>{option.label}</option>
                        )
                    })
                }
        </SelectWrapper>
    )
}

export default Select;