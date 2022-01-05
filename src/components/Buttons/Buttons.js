import { Component } from "react";

// class SkillButton extends Component{
//     render(){
//         const { text } = this.props;
//         return (
//             <button className="skill-btn">{text}</button>
//         )
//     }
// }

class AddBtn extends Component{
    render(){
        const { addHandler } = this.props;
        return(
            <button onClick={ addHandler } type="submit">ADD</button>
        )
    }
}

class RemoveBtn extends Component{
    render(){
        const { removeHandler } = this.props;
        return(
            <button onClick={removeHandler} type="submit">REMOVE</button>
        )
    }
}

const EditBtn = ({editHandler}) => {
    return (
        <button className="edit-btn" onClick={editHandler}>Mode</button>
    )
}


export { AddBtn, RemoveBtn, EditBtn }