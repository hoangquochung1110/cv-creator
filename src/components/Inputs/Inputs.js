import {Input, TextArea} from "./styles";

const TextInput = ({
    placeholder, 
    id, 
    name, 
    onChange, 
    aligned,
    width
}) => {

    const widthSetter = () => {
        // console.log(name);
        return '200px';
    }

    return (
        <Input 
            aligned={aligned} 
            type="text" 
            placeholder={placeholder} 
            id={id} 
            name={name} 
            onChange={(e) => onChange(e, id)}
            width={width}
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

export {TextInput, TelInput, EmailInput, DescriptionInput};