import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      duty: '',
      tasks: []
    }
  }

  addTask = (e) => {
    e.preventDefault();
    
    if (this.state.duty) {
      let todos = { text: this.state.duty, id: Date.now() };

      this.state.tasks.push(todos);

      this.setState({ tasks: this.state.tasks });

    }
    this.setState({ duty: '' });
  }

  changeDuty = e => {
    this.setState({ duty: e.target.value });
  }

  removeTodo = id => {
    const filtered = this.state.tasks.filter(task => {
      return task.id !== id;
    });
    this.setState({ tasks: filtered });
  }
  
  render() {
    return (
      <div className="main">
        <div className="form">
          <form onSubmit={this.addTask}>
            <input 
              type="input" 
              className="form__field" placeholder="Enter Task"
              value={this.state.duty}
              onChange={this.changeDuty}
              />
          </form>
        </div>
        <div className="todo">
          {this.state.tasks.length ?
            '' : <p></p>
          }
          {this.state.tasks.map(task => (
            <p key={task.id}>
              {task.text}
              <i 
                className="material-icons icon" 
                key={task.id}
                onClick={() => this.removeTodo(task.id)}
                >
                delete
              </i>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
