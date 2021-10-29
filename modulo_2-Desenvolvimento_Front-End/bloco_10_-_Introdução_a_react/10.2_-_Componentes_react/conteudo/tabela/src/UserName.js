import React, {
  Component
} from "react";
import './UserName.css'

class UserName extends Component {
  render() {
//this.props = objeto que contem todas as props
    const name = this.props.name

    return (
      <span className = 'name' > {name} </span>
    )
  }
}

export default UserName