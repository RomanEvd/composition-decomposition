import CategorySearch from "./CategorySearch";
import SearchForm from "./SearchForm";


export default function Page() {
  const helpSearch = "фаза луны сегодня";
  return (
    <>
      <CategorySearch />
      <SearchForm />
      <div className='help-search'>
        <span>
          Найдется всею Например, <i className='help-search'>{helpSearch}</i>
        </span>
      </div>
    </>
  );
}