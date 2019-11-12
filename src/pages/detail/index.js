import React, { Component } from 'react'
import { connect } from 'react-redux'
class Detail extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div style={{width: 100,height:100,marginTop:"200px"}}>
                Detail: {this.props.match.params.id}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}
// export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Detail;