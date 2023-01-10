import './DisplayBox.css';
import ReactMarkdown from 'react-markdown';
const DisplayBox = (props) => {
    return (
        <div className='text-box'>
            <div className='text-box-inner'>
                <section>
                    <ReactMarkdown children={props.data}/>
                </section>
            </div>
        </div>
    )
}

export default DisplayBox