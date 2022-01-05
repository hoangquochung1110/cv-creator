import { Component } from "react";
import { FixedButton } from "./styles";

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
        <FixedButton className="edit-btn" onClick={editHandler}>Mode</FixedButton>
    )
}


export { AddBtn, RemoveBtn, EditBtn }