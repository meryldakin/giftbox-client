import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, TextArea, Radio, Message, Checkbox } from 'semantic-ui-react'


class AddFriendToListForm extends Component {
  constructor(){
    super()
    this.state = {
      friend_ids: [],
      event_id: 0
     }
  }

  componentDidMount(){
    this.setState({
      event_id: this.props.event.id
    })
  }

  handleChange = (friendId) =>  {
    var friendIndex = this.state.friend_ids.indexOf(friendId)

    if (friendIndex === -1) {
      // add friend
      this.setState(prevState => {
        return {friend_ids: [...prevState.friend_ids, friendId]}
      })

    } else {
      //remove friend
      this.setState(prevState => {
        return {
          friend_ids: [
            ...prevState.friend_ids.slice(0, friendIndex),
            ...prevState.friend_ids.slice(friendIndex + 1)
          ]
        }
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.onClick()
  }


  render() {
    console.log("props from freind list form", this.props)
    console.log('state from friend list form', this.state)
    let friendNames = this.props.friendships.map( friendship => {
      let fullName = `${friendship.friend.firstName} ${friendship.friend.lastName}`
      return (
        <Form.Field label={fullName} name="friend_id" value={friendship.friend.id} control={Checkbox} onChange={() => this.handleChange(friendship.friend.id)}/>
      )
    })
    const { name, date, category } = this.state
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group grouped>

          {friendNames}

          </Form.Group>
          <Form.Group>
            <Button positive icon='checkmark' labelPosition='right' content="Add Friends to List" onClick={this.close} />
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default withRouter(AddFriendToListForm)
