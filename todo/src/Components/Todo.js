import React, {Component} from 'react';
import { toggleComplete } from '../actions';
import { connect } from 'react-redux';

class TodoItems extends Component {

    toggleComplete(event){
        this.props.toggleComplete(this.props.index);
    }

    render() {
        return(
            <li>
                <input 
                    type="checkbox"
                    onChange={this.toggleComplete}
                    />
                {this.props.todo.value}
            </li>
        );
    }

}

export default connect(null, {toggleComplete})(TodoItems);
