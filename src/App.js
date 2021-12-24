import React from 'react';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
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
            <Header />
            <Main previewMode={previewMode}/>
            <EditBtn editHandler={editModeHandler}/>
            <PreviewBtn previewHandler={previewModeHandler} />
            <Footer />
        </>
    );
};

export default App;
