import { AddBtn, ModeSwitcher } from "../components/Buttons"; 
import { X, Check } from '../utils';
import ToolkitWrapper from "./Styles";
import Select from "../components/Selects";

const Toolkit = ({addSection, mode, setMode}) => {
    return(
        <ToolkitWrapper>
            <AddBtn addHandler={addSection}/>
            <Select
                options={[
                    { value: 'Roboto', label: 'Roboto' },
                    { value: 'Calibri', label: 'Calibri' },
                    { value: 'Ubuntu', label: 'Ubuntu' },
                    { value: 'Futara', label: 'Futara' }
                ]}
            />
            <ModeSwitcher
                        value={mode}
                        inactiveLabel={<X/>}
                        activeLabel={<Check/>}
                        onToggle={(mode) => {
                            setMode(!mode);
                        }}
            />
        </ToolkitWrapper>
    )
};

export default Toolkit;