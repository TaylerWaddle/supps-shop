const SearchBar = () => {
  return (
    <div className="flex w-full justify-end">
      <input
        placeholder="Search Products"
        className="block h-12 w-96 rounded-full border-0 bg-white py-1.5 pl-3 text-gray-900 shadow-md placeholder:text-gray-400 focus:outline-none focus:outline-zinc-300 sm:text-sm"
      ></input>
    </div>
  );
};

export default SearchBar;
