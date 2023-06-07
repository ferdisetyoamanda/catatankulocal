import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, deleteNote, getNote, unarchiveNote, } from '../utils/local-data';
import { showFormattedDate } from '../utils';
import HalamanDetailCatatanku from '../components/HalamanDetailCatatanku';
import HalamanTidakAda from './HalamanTidakAda';

function DetailHalamanWrapper() {
    const { id } = useParams();
    const navigate = useNavigate();
  
    
  
    const onUnarchiveHandler = (id) => {
      unarchiveNote(id);
      navigate('/');
    };
  
    const onDeleteHandler = (id) => {
      deleteNote(id);
      navigate('/');
    };
    const onArchiveHandler = (id) => {
        archiveNote(id);
        navigate('/');
    };
  
    return (
      <DetailHalaman
        id={id}
        onArchiveHandler={onArchiveHandler}
        onUnarchiveHandler={onUnarchiveHandler}
        onDeleteHandler={onDeleteHandler}
      />
    );
}

class DetailHalaman extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        notes: getNote(props.id),
      };
    }
  
    render() {
        return this.state.notes === undefined ? (
        <HalamanTidakAda />
        ) : (
        <section className="detail-page">
          <h3 className="detail-page__title">{this.state.notes.title}</h3>
          <p className="detail-page__createdAt">
            {showFormattedDate(this.state.notes.createdAt)}
          </p>
          <div className="detail-page__body">{this.state.notes.body}</div>
          <HalamanDetailCatatanku
            id={this.state.notes.id}
            title={this.state.notes.title}
            deleteNote={this.props.onDeleteHandler}
            archived={this.state.notes.archived}
            archiveNote={this.props.onArchiveHandler}
            unArchiveNote={this.props.onUnarchiveHandler}
            
          />
        </section>
      );
    }
}
DetailHalaman.propTypes = {
    id: PropTypes.string.isRequired,
    onDeleteHandler: PropTypes.func.isRequired,
    onArchiveHandler: PropTypes.func.isRequired,
    onUnarchiveHandler: PropTypes.func.isRequired,
    
};

export default DetailHalamanWrapper;