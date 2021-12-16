const Personal = ({personal}) => {
    return(
        <div className="resume-personal">
        <div className="resume-personal-base">
            <h2>{personal.lname} {personal.fname}</h2>
            <h6>{personal.jobtitle}</h6>
        </div>
        <div className="resume-personal-contact">
            <h6>{personal.address}</h6>
            <h6>{personal.email}</h6>
            <h6>{personal.telephone}</h6>
        </div>

    </div>
    )
}

export default Personal;