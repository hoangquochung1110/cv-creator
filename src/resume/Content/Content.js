import Personal from "./Qualification/Personal";
import Qualification from "./Qualification";
import ContentWrapper from "./styles";

const Content = ({collection}) => {
    return (
        <ContentWrapper>
            <Personal personal={collection.personal} />
            <Qualification 
                education={collection.education} 
                workExp={collection.workExp} 
                skills={collection.skills}
            />
        </ContentWrapper>
    )
}

export default Content;