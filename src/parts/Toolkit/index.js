import { AddBtn, RemoveBtn } from "../../components/Buttons";
import { OuterToolkitWrapper, InnerToolkitWrapper } from "./Styles";
import Select from "../../components/Selects";
import { useEffect } from "react";

const Toolkit = ({
    addSection,
    removeSection,
    setFontFamily,
    setFontSize,
    onClicked,
}) => {
    useEffect(() => {
        // Set default value when onload
        document.querySelector("#font-family-selector").value = "Ubuntu";
        document.querySelector("#font-size-selector").value = "20px";
    }, []);

    return (
        <OuterToolkitWrapper>
            <InnerToolkitWrapper>
                {onClicked ? (
                    <>
                        <AddBtn addHandler={addSection} />
                        <RemoveBtn removeHandler={removeSection} />
                    </>
                ) : null}
                <Select
                    id="font-family-selector"
                    options={[
                        { value: "Roboto", label: "Roboto" },
                        { value: "Calibri", label: "Calibri" },
                        { value: "Ubuntu", label: "Ubuntu" },
                        { value: "Futara", label: "Futara" },
                    ]}
                    onChange={(e) => {
                        setFontFamily(e.target.value);
                    }}
                />
                <Select
                    id="font-size-selector"
                    options={[
                        { value: "15px", label: "S" },
                        { value: "20px", label: "M" },
                        { value: "25px", label: "L" },
                    ]}
                    onChange={(e) => {
                        setFontSize(e.target.value);
                    }}
                ></Select>
            </InnerToolkitWrapper>
        </OuterToolkitWrapper>
    );
};

export default Toolkit;
