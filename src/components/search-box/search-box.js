import react from "react";

const SearchBox = (props) => {

  return(
    <div className="ma2">
      <input className="pa2 ba b--green bg-lightest-blue" 
             type='search'
             placeholder='Search robots'
             onChange={props.onChange}/>
    </div>
  );
};

export default SearchBox;