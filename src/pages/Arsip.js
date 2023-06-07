import PropTypes from 'prop-types';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import CatatankuKosong from '../components/CatatankuKosong';
import Pencarian from '../components/Pencarian';
import CatatankuList from '../components/CatatankuList';
import { getArchivedNotes } from '../utils/local-data';
function ArsipWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();
  
    const keyword = searchParams.get('keyword');
  
    function changeSearchParams(keyword) {
      setSearchParams({ keyword });
    }
  
    return (
      <ArsipCatatan defaultKeyword={keyword} keywordChange={changeSearchParams} />
    );
}

class ArsipCatatan extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        notes: getArchivedNotes(),
        keyword: props.defaultKeyword || '',
      };
    }
  
    onKeywordChangeHandler = (keyword) => {
      this.setState({
        keyword,
      });
  
      this.props.keywordChange(keyword);
    };
  
    render() {
        const hasil = this.state.notes.filter((note) => {
            return note.title
            .toLowerCase()
            .includes(this.state.keyword.toLowerCase());
        });
        return (
        <section className="homepage">
            <h4>Cari Catatan</h4>
            <Pencarian
            keyword={this.state.keyword}
            keywordChange={this.onKeywordChangeHandler}
            />
            <h2>List Catatan</h2>
            {hasil.length !== 0 ? (
            <CatatankuList notes={hasil} />
            ) : (
            <CatatankuKosong />
            )}
        </section>
        );
    }
}
  
ArsipCatatan.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};

export default ArsipWrapper;