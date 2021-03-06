import React, {useState} from 'react'
import {Modal, Form, Button} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updateInstrument} from '../actions/userActions'

function InstrumentUpdate(props) {
  const [open, setOpen] = useState(false)
  const [instrumentFilters, setInstrumentFilters] = useState([])
  let instrumentOptions = props.instruments.map(instrument => ({key: instrument.id, text: instrument.name, value: instrument.id }))
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateInstrument(props.user, instrumentFilters);
    setOpen(false);
  }
  
  return (
    <Modal
    size="tiny"
      centered={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<span className="tags">+ Add Instrument</span>}>
      <Modal.Content>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Dropdown 
              placeholder='Instruments'
              fluid
              multiple
              search
              selection
              onChange={(e, d) => setInstrumentFilters(d.value)}
              value={instrumentFilters}
              options={instrumentOptions}
            />
            <Button type='submit'>ADD</Button>
          </Form>
      </Modal.Content>
    </Modal>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    instruments: state.instruments
  };
};

export default connect(mapStateToProps, {updateInstrument})(InstrumentUpdate)
