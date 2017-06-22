import React, { Component } from 'react'
import Dropzone from 'react-dropzone';
import request from 'superagent';

import { withRouter } from 'react-router'
import { Form, Button, Dropdown} from 'semantic-ui-react'

const CLOUDINARY_UPLOAD_PRESET = 'enh1i5c6';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/meryl/upload';

class AddGiftForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      item: "",
      category: "",
      event_list_id: 0,
      link: "",
      friend_id: 0,
      image: '',
      current_user_id: props.current_user_id}
  }

  componentDidMount(){
    this.setState({
      friend_id: this.props.friend.id,
      current_user_id: this.props.current_user_id
    })
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.onClick()
  }

  onImageDrop = (files) => {
    this.setState({
      image: files[0]
    });

    this.handleImageUpload(files[0]);
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
            <Form.Field>

            <Dropdown placeholder='Select Event List' name='event_list_id' fluid search selection options={eventList} onChange={this.handleChange}/>
            <br/>
            <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>

            </Form.Field>
            <div>
              {this.state.image === '' ? null :
              <div>
                <p>{this.state.uploadedFile.name}</p>
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

export default withRouter(AddGiftForm)
