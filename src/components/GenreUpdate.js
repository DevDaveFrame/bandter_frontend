import React, {useState}  from 'react'
import { Modal, Form, Button } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {updateGenre} from '../actions/userActions'

function GenreUpdate(props) {
  const [open, setOpen] = useState(false)
  const [genreFilters, setGenreFilters] = useState([])
  let genreOptions = props.genres.map(genre => ({key: genre.id, text: genre.name, value: genre.id }))
  return (
      <Modal
      size="tiny"
      centered={true}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<span className="tags">+ Add Genre</span>}>
        <Modal.Content>
          <Form onSubmit={() => props.updateGenre(props.user, genreFilters)}>
            <Form.Dropdown 
              placeholder='Genres'
              fluid
              multiple
              search
              selection
              onChange={(e, d) => setGenreFilters(d.value)}
              value={genreFilters}
              options={genreOptions}
            />
            <Button type='submit'>TEST</Button>
          </Form>
        </Modal.Content>
      </Modal>
  )
}

const mapStateToProps = state => {
  return { 
    user: state.user,
    genres: state.genres
  };
};

export default connect(mapStateToProps, {updateGenre})(GenreUpdate)