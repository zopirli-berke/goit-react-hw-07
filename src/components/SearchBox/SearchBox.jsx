import css from "./SearchBox.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux-temp/contactsSelectors";
import { changeFilter } from "../../redux-temp/filtersSlice";
import { useId } from "react";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const searchId = useId();

  const handlerFilterChange = (event) =>
    dispatch(changeFilter(event.target.value));

  return (
    <div>
      <div className={css.searchBox}>
        <label htmlFor={searchId}>Find contacts by name</label>
        <input
          id={searchId}
          type="text"
          value={filter}
          className={css.searchInput}
          onChange={handlerFilterChange}
        />
      </div>
    </div>
  );
}
