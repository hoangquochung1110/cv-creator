const TextInput = ({ placeholder, id, name, onChange }) => {
    return (
        <input type="text" placeholder={placeholder} id={id} name={name} onChange={(e) => onChange(e, id)}/>
    )
}

const TelInput = ({ placeholder, id, name, pattern, onChange }) => {
    return (
        <input type="tel" placeholder={placeholder} id={id} name={name} pattern={pattern} onChange={(e) => onChange(e, id)}/>
    )
}

// const MonthInput = ({ placeholder, id, name }) => {
//     return (
//         <input type="month" placeholder={placeholder} id={id} name={name} min="1980-01"/>
//     )
// }

const EmailInput = ({ placeholder, id, name, onChange }) => {
    return (
        <input type="email" placeholder={placeholder} id={id} name={name} onChange={(e) => onChange(e, id)}/>
    )
}

export {TextInput, TelInput, EmailInput};