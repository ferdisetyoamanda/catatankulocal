import React, { Component  } from "react";
import PropTypes from 'prop-types'
import { TiTickOutline } from 'react-icons/ti';

export class HalamanTambahMasuk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }

  onChangeHandler = (tambah) => {
    this.setState(() => {
      return {
        title: tambah.target.value,
      };
    });
  };

  onInputHandler = (tambah) => {
    this.setState(() => {
      return {
        body: tambah.target.innerHTML,
      };
    });
  };

  onClickHandler = (tambah) => {
    this.props.addNote(this.state);
  };

  render() {
    return (
      <>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Judul Catatan"
            value={this.state.title}
            onChange={this.onChangeHandler}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Isi Catatan Bukan Kenangan..."
            contentEditable="true"
            onInput={this.onInputHandler}
          ></div>
        </div>
        <div className="add-new-page__action">
          <button
            className="action"
            type="button"
            title="Simpan"
            onClick={this.onClickHandler}
          >
            <TiTickOutline />
          </button>
        </div>
      </>
    );
  }
}

HalamanTambahMasuk.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default HalamanTambahMasuk;