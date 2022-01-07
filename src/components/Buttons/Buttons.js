import { Component } from "react";
import { CircleButton, FixedButton, ToggleButtonWrapper } from "./styles";
import { X, Check } from '../../utils';
import ToggleButton from 'react-toggle-button';

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

const ModeSwitcher = ({value, onToggle}) => {
    return (
        <ToggleButtonWrapper>
            <ToggleButton 
                value={value}
                inactiveLabel={<X/>}
                activeLabel={<Check/>}
                onToggle={onToggle}
            />
        </ToggleButtonWrapper>

    )

}


export { AddBtn, RemoveBtn, ModeSwitcher}