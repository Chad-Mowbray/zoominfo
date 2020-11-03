import React from 'react'
import postZoom  from '../api/api'  



class Show extends React.Component {

    state = {
        displayData: null
    }


    async componentDidMount() {

        let file = ''
        if(this.props.zoomFile) {
            file = this.props.zoomFile
        } else if (this.props.engagementFile) {
            file = this.props.engagementFile
        }

        let res = await postZoom(file)
        this.setState({displayData: res})

    }


    render() {
        console.log("in Show: ", this.props)
        return(
        <h1>In Show: {JSON.stringify(this.state.displayData)}</h1>
        )
    }
}


export default Show