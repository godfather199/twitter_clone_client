import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';


function SearchBar({searchText, setSearchText, setSearchResults}) {
  const handle_Clear_Text = () => {
    setSearchText("")
    setSearchResults([])
  }

  return (
    <div className="flex border-2 border-black w-[14rem]">
      <SearchOutlinedIcon />

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className=""
      />

      {searchText.length > 0 && (
        <CloseIcon
          style={{ cursor: "pointer" }}
          onClick={handle_Clear_Text}
        />
      )}
    </div>
  );
}

export default SearchBar