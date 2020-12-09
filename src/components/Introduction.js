import '../css/Introduction.css';

function Introduction(props){
    return (
        <div className='introduction-container'>
            <div className='name-container'>
                <div className='name'>
                    <h1>{props.header}</h1>
                </div>
                <div className='name-subheader'>
                    <p>{props.subheader}</p>
                </div>
                <div className='name-links'>
                    <a href="https://www.linkedin.com/in/andrew-ngo-ba043716b/" target='_blank' rel="noreferrer" className="fa fa-linkedin"></a>
                    <a href="https://github.com/anngo14" target='_blank' rel="noreferrer" className="fa fa-github"></a>
                </div>
            </div>
        </div>
    )
}

export default Introduction