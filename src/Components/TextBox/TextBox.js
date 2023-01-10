import './TextBox.css';

const TextBox = (props) => {


    const handleChange = (event) => {
        props.setData(event.target.value)
    }
    return(
        <div className='text-box'>
            <div className='text-box-inner'>
                <textarea onChange={handleChange} value={props.data}></textarea>
            </div>
        </div>
    )
}

export default TextBox