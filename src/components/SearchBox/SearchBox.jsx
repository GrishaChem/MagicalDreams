import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/contacts/filtersSlice";
import { selectContacts } from "../../redux/contacts/contactsSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div className="mb-4">
      <p>Find by headline</p>
      <input
        className="input input-bordered input-sm"
        type="text"
        name="headline"
        placeholder="Find by headline"
        id=""
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
