import React from "react";
import PropTypes from 'prop-types'
import HalamanAwal from "../components/HalamanAwal";
import CatatankuList from "../components/CatatankuList";
import { getActiveNotes  } from "../utils/local-data";
import { useSearchParams } from "react-router-dom";
import CatatankuKosong from "../components/CatatankuKosong";
import Pencarian from "../components/Pencarian";

function HomePageWrapper() {
    const [seacrhParams, setSearchParams] = useSearchParams();
    const keyword = seacrhParams.get('keyword');


    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return (
        <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
    )

}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getActiveNotes(),
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
              <HalamanAwal />
            </section>
        );
    }
}

HomePage.propTypes = {
    defaultKeyword: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};
export default HomePageWrapper;