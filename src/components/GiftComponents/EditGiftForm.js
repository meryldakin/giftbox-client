import React, { Component } from 'react'
import { withRouter } from 'react-router'
import Dropzone from 'react-dropzone';
import request from 'superagent';

import { Form, Button, Dropdown } from 'semantic-ui-react'

const CLOUDINARY_UPLOAD_PRESET = 'enh1i5c6';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/meryl/upload';

class EditGiftForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: "",
      event_list_id: "",
      image: "",
      link: "",
      friend_id: 0,
      exchange_id: 0,
      gift_id: "",
      celebration_id: "",
      current_user_id: props.current_user_id

     }
  }

  componentDidMount(){
    this.setState({
      item: this.props.gift.item,
      event_list_id: this.props.event.id,
      image: this.props.gift.image,
      link: this.props.gift.link,
      friend_id: this.props.friend.id,
      exchange_id: this.props.exchange_id,
      gift_id: this.props.gift.id,
      celebration_id: this.props.celebration.id
    })
  }

  onImageDrop = (files) => {
    this.setState({
      image: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state, this.state.friend_id)
    this.props.onClick()
  }

  handleImageUpload = (file) => {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          image: response.body.secure_url
        });
      }
    });
  }


  render() {
    const { item, category, event_list_id, image, link } = this.state

    let eventList = this.props.events.map( event => {
      return ( Object.assign({}, { key: event.id, value: event.id, text: event.name }) )
    })

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>

            <Form.Input placeholder='Item' name='item' value={item} onChange={this.handleChange} />
            <Form.Input placeholder='Link or Store' name='link' value={link} onChange={this.handleChange}  />
            <Dropdown placeholder='Select Event List' name='event_list_id' fluid search selection options={eventList} onChange={this.handleChange}/>
            <br/>
            <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <div>
              {this.state.image === '' ? null :
              <div>
                <p>{this.state.image.name}</p>
                <img src={this.state.image} />
              </div>}
            </div>
            <br/>
            <Button color="blue" icon='checkmark' labelPosition='right' content="Save Gift" onClick={this.close} />

        </Form>
      </div>
    )
  }
}

export default withRouter(EditGiftForm)
