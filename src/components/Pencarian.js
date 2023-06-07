import PropTypes from 'prop-types';
import React from 'react';

function Pencarian({ keyword, keywordChange }) {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Cari judul ..."
        value={keyword}
        onChange={(cari) => keywordChange(cari.target.value)}
      />
    </section>
  );
}

Pencarian.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default Pencarian;
