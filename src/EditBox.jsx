import React, { Component } from 'react';

class EditBox extends Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (<div className='edit-box holding-cell w-100 rounded'>
                    <div className='well w-100 todoListed'>Description
                        <textarea className='update-todo-text'
                                  name='edit' 
                                  cols='auto' 
                                  rows='auto' 
                                  defaultValue={this.props.text}
                                  onChange={e => this.props.editTodoValue(e)}>
                        </textarea>
                    </div>
                    <div className='well w-100 todoListed'>Priority
                        <div>
                            <select className='update-todo-priority' 
                                    defaultValue={this.props.priority}
                                    onChange={e => this.props.editPriorityValue(e)}>
                                <option value='0' disabled>Select a Priority</option>
                                <option value='1'>High Priority</option>
                                <option value='2'>Medium Priority</option>
                                <option value='3'>Low Priority</option>
                                <option value='4'>Not Really Sure</option>
                            </select>
                            <input type='image' 
                                className='save-btn update-todo' 
                                src='./img/check-plus.png'
                                value={this.props.value}
                                onClick={e => this.props.submitEdit(e)}
                            />
                        </div>
                    </div>
                </div>)}
}
export default EditBox;