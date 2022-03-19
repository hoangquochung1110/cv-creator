import { AddBtn, RemoveBtn } from "../components/Buttons"; 
import { OuterToolkitWrapper, InnerToolkitWrapper} from "./Styles";
import Select from "../components/Selects";

const Toolkit = ({addSection, removeSection, setFont}) => {
    return(
        <OuterToolkitWrapper>
            <InnerToolkitWrapper>
                <AddBtn addHandler={addSection}/>
                <RemoveBtn removeHandler={removeSection}/>
                <Select
                    options={[
                        { value: 'Roboto', label: 'Roboto' },
                        { value: 'Calibri', label: 'Calibri' },
                        { value: 'Ubuntu', label: 'Ubuntu' },
                        { value: 'Futara', label: 'Futara' }
                    ]}
                    onChange={(e) => {
                        console.log("switch font to: ", e.target.value);
                        setFont(e.target.value);
                    }}
                />
            </InnerToolkitWrapper>
        </OuterToolkitWrapper>
    )
};

export default Toolkit;