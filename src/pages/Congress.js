import { Link } from 'react-router-dom'


function Congress() {
    return (
        <>
            <div>
                <Link to='/senate' >Senate</Link>
            </div>
            <div>
                <Link to='/house' >House</Link>
            </div>
        </>
    )
}

export default Congress