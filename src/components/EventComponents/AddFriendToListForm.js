import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Form, Button, Dropdown } from 'semantic-ui-react'


class AddFriendToListForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      friend_ids: [],
      event_id: 0,
      current_user_id: props.current_user_id
     }
  }

  componentDidMount(){
    this.setState({
      event_id: this.props.event.id
    })
  }

  handleChange = (e, {name, value}) =>  {
    console.log(e, {name, value})
      this.setState(prevState => {
        return {friend_ids: value}
      })
    console.log(this.state)
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.onClick()
  }


  render() {

    let friendNames = this.props.friendships.map( friendship => {
      let fullName = `${friendship.friend.firstName} ${friendship.friend.lastName}`
      return ( Object.assign({}, { key: friendship.friend.id, value: friendship.friend.id, text: fullName }) )

    })
    const { name, date, category } = this.state
    return (

        <Form onSubmit={this.handleSubmit}>
          <Form.Select>
          <Dropdown placeholder='Search and select friends to add to list' name="friend_ids" fluid multiple search selection options={friendNames} onChange={this.handleChange}/>
          </Form.Select>
          <Button color="blue" icon='checkmark' labelPosition='right' content="Add Friends to List" onClick={this.close} />
        </Form>

    )
  }
}

export default withRouter(AddFriendToListForm)
