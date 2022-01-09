import {FontSelectorWrapper, Input, TextArea} from "./styles";
import Select from 'react-select'

const TextInput = ({
    placeholder, 
    id, 
    name, 
    onChange, 
    aligned,
}) => {

    return (
        <Input 
            aligned={aligned} 
            type="text" 
            placeholder={placeholder} 
            id={id} 
            name={name} 
            onChange={(e) => onChange(e, id)}
        />
    )
}

const TelInput = ({ 
    placeholder, 
    id, 
    name, 
    pattern, 
    onChange 
}) => {
    return (
        <Input 
            type="tel" 
            placeholder={placeholder} 
            id={id} name={name} 
            pattern={pattern} 
            onChange={(e) => onChange(e, id)}
        />
    )
}



const EmailInput = ({
    placeholder, 
    id, 
    name, onChange
}) => {
    return (
        <Input 
            type="email" 
            placeholder={placeholder} 
            id={id} 
            name={name} 
            onChange={(e) => onChange(e, id)}
        />
    )
}

const DescriptionInput = ({ 
    placeholder, 
    id, 
    name, 
    onChange
}) => {
    return (
        <TextArea 
            rows="3" 
            placeholder={placeholder} 
            id={id} 
            name={name} 
            onChange={(e) => onChange(e, id)}
        />
    )
}

const FontSelector = ({options, onChange}) => {
    return (
        <FontSelectorWrapper>
            <Select 
                options={options} 
                onChange={onChange}
            />
        </FontSelectorWrapper>
    )
}


export {TextInput, TelInput, EmailInput, DescriptionInput, FontSelector};