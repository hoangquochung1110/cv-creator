import React from 'react';
import Main from './components/Main';
import { EditBtn, PreviewBtn } from './components/Collector/Buttons/Buttons';
import { useState } from "react";

const App = () => {
    const [previewMode, setPreviewMode] = useState(false);

    const editModeHandler = () => {
        setPreviewMode(false);
    }

    const previewModeHandler = () => {
        setPreviewMode(true);
    }
    return (
        <>
            <Main previewMode={previewMode}/>
            <EditBtn editHandler={editModeHandler}/>
            <PreviewBtn previewHandler={previewModeHandler} />
        </>
    );
};

export default App;
