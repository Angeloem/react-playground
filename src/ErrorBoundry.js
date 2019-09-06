import React , {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state = {
            hasError : false
        }
    }

    // const { hasError} = this.state
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:false})
    }

    render() {
        if(this.state.hasError){
            return <h1>Error Dear Visitor</h1>
        }
        else {
            return this.props.children
        }
    }
}

export default ErrorBoundry;
