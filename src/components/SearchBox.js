import React, {Fragment} from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue'
        type='search'
        placeholder='search robots'
        onChange={searchChange} // everytime search box changes, on change, run searchchange
          // trigger event so call on parent
      />
    </div>
  );
}

export default SearchBox;