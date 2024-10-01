import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            options: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/rtmandal', { withCredentials: true })
        .then(response =>{
            this.setState({options:response.data})
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <select>
                    <option value="">Select an option</option>
                    {
                        this.state.options.map((option,index) => (
                            <option key={index} value={option.mcode}>{option.mname}</option>
                        ))
                    }
                </select>
            </div>
        )
    }
}

export default PostList