import '../css/Introduction.css';

function Introduction(props){
    return (
        <div className='introduction-container'>
            <div className='left-bg'></div>
            <div className='top-bg'></div>
            <div className='right-bg'></div>
            <div className='left-bg-circle'></div>
            <div className='right-bg-circle'></div>
            <div className='name-container'>
                <div className='name'>
                    <h1>{props.header}</h1>
                </div>
                <div className='name-subheader'>
                    <p>{props.subheader}</p>
                </div>
                <div className='name-links'>
                    <a href="https://www.linkedin.com/in/andrew-ngo-ba043716b/" target='_blank' rel="noreferrer" className="fa fa-linkedin">{null}</a>
                    <a href="https://github.com/anngo14" target='_blank' rel="noreferrer" className="fa fa-github">{null}</a>
                </div>
            </div>
        </div>
    )
}

export default Introduction