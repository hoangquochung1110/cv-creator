import { Component } from "react";
import { ToggleButtonWrapper, AddRemoveBtnWrapper } from "./Styles";
import { X, Check } from "../../utils";
import ToggleButton from "react-toggle-button";

class AddBtn extends Component {
    render() {
        const { addHandler } = this.props;
        return (
            <AddRemoveBtnWrapper onClick={addHandler} type="submit">
                <Check />
            </AddRemoveBtnWrapper>
        );
    }
}

class RemoveBtn extends Component {
    render() {
        const { removeHandler } = this.props;
        return (
            <AddRemoveBtnWrapper onClick={removeHandler} type="submit">
                <X />
            </AddRemoveBtnWrapper>
        );
    }
}

const ModeSwitcher = ({ value, onToggle }) => {
    return (
        <ToggleButtonWrapper>
            <ToggleButton
                value={value}
                inactiveLabel={<X />}
                activeLabel={<Check />}
                onToggle={onToggle}
            />
        </ToggleButtonWrapper>
    );
};

export { AddBtn, RemoveBtn, ModeSwitcher };
