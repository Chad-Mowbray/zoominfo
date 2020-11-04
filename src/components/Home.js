import React from 'react'
import { Link } from 'react-router-dom';



class Home extends React.Component {



    render() {
        return(
           
            <div>
                <h1>Hello</h1>
                <h3><Link to={process.env.PUBLIC_URL + "/upload/zoom"}>Upload your Zoom .csv</Link></h3>
                <h3><Link to={process.env.PUBLIC_URL + "/upload/engagement"}>Upload your Engagement .csv</Link></h3>
            </div>
   
        )
    }
}

export default Home