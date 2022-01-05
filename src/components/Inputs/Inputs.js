import Input from "./styles";

const TextInput = ({ placeholder, id, name, onChange }) => {
    return (
        <Input type="text" placeholder={placeholder} id={id} name={name} onChange={(e) => onChange(e, id)}/>
    )
}

const TelInput = ({ placeholder, id, name, pattern, onChange }) => {
    return (
        <Input type="tel" placeholder={placeholder} id={id} name={name} pattern={pattern} onChange={(e) => onChange(e, id)}/>
    )
}



const EmailInput = ({ placeholder, id, name, onChange }) => {
    return (
        <Input type="email" placeholder={placeholder} id={id} name={name} onChange={(e) => onChange(e, id)}/>
    )
}

const TextArea = ({ placeholder, id, name, onChange}) => {
    return (
        <textarea rows="2" placeholder={placeholder} id={id} name={name} onChange={(e) => onChange(e, id)}/>
    )
}

export {TextInput, TelInput, EmailInput, TextArea};