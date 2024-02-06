import * as React from 'react';
import { useState } from 'react';

export const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
  const [search, setSearch] = useState(postQuery);
  const [checked, setChecked] = useState(latest);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const query = form.search.value;

    const isLatest = form.latest.checked;

    const params = {};

    if (query.length) params.todo = query;
    if (isLatest) params.latest = true;

    setSearchParams(params);
  };

  return (
    <form autoComplete='off' onSubmit={handleSubmitForm}>
      <input
        type='search'
        name='search'
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <label
        style={{
          padding: '0px 1rem',
        }}
      >
        New only:
        <input
          type='checkbox'
          name='latest'
          checked={checked}
          onChange={(event) => setChecked(event.target.checked)}
        />
      </label>
      <button type='submit' value='Search'>
        Submit
      </button>
    </form>
  );
};
