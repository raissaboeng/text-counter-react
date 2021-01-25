import React, {Component} from 'react';

class TextCounter extends Component{
    static defaultProps = {
        limit: 15
    }

    constructor(props){
        super(props);
        this.limit = props.limit;
        this.state = {
            totalChars: 0,
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const element = e.target,
                text = element.value;
                if(text.length <= this.limit){
                    this.setState({
                        totalChars: text.length,
                        text
                    }); 
                }
    }

    render(){
        const {state, limit} = this;
        return(
            <div>
                <h1>Text Count <span>...</span></h1>
                <div className="line"></div>
                <textarea placeholder="Digite seu texto aqui..." onChange={this.handleChange} value={state.text}/> 
                <div>
                    <strong>Total: </strong>{state.totalChars}/{limit}
                </div>
            </div>
        );
    }
        
}

export default TextCounter;