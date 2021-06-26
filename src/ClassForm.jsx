import React, { Component } from 'react';

class ClassForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type="text" name="name" value={this.state.name} onChange={this.nameChange}>
                        </input>
                    </div>
                    <div>
                        <label>description</label>
                        <br />
                        <textarea name="description" value={this.state.description} onChange={this.nameChange}>
                        </textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default ClassForm;
