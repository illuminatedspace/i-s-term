import React from 'react'

import TextInput from './TextInput'

class CommandLine extends React.Component {
  state = {
    lines: ['hello world', 'print hello', ''],
  }

  addLine = line => {
    console.log('MACHOP!')
    this.setState({ lines: this.state.lines.concat(line) })
  }

  render() {
    return (
      <div>
        {this.state.lines.map((line, index) => (
          <p key={index}>{`> ${line}`}</p>
        ))}
        <TextInput addLine={this.addLine} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default CommandLine
