const Personal = ({personal}) => {
    return(
        <div className="resume-personal">
        <div className="resume-personal-base">
            <h2>{personal.lname} {personal.fname}</h2>
        </div>
        <div className="resume-personal-contact">
            <h6>
                {personal.address} | {personal.email} | {personal.github} | {personal.telephone}
            </h6>
            
        </div>

    </div>
    )
}

export default Personal;