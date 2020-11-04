import React from 'react'
import postZoom  from '../api/api'  
import ShowZoom from './ShowZoom'



class Show extends React.Component {

    state = {
        displayData: null
    }


    async componentDidMount() {
        console.log("Show.js mounted")

        let file = ''
        if(this.props.zoomFile) {
            file = this.props.zoomFile
        } else if (this.props.engagementFile) {
            file = this.props.engagementFile
        }

        let res = await postZoom(file)
        console.log(typeof res)
        this.setState({displayData: res})

    }


    render() {
        // console.log("in Show: ", this.props)
        return(
            <div> { this.state.displayData && 
                <div>
                    <h1>In Show: {JSON.stringify(this.state.displayData)}</h1>
                    <ShowZoom displayData={this.state.displayData}/>
                </div>
            }

            </div>

        )
    }
}


export default Show