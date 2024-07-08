import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useLocation } from 'react-router-dom';


function SearchBar({searchText, setSearchText, setSearchResults}) {
  const {pathname} = useLocation()


  const handle_Clear_Text = () => {
    setSearchText("")
    setSearchResults([])
  }

  return (
    <div
      style={{ border: "3px solid purple" }}
      className={`flex border border-gray-300  ${
        pathname === "/explore"
          ? "w-[95%] md:w-[85%] xl:w-[30rem]"
          : " xl:w-[17rem]"
      }  p-3 rounded-lg bg-gray-100 shadow-lg`}
    >
      <SearchOutlinedIcon style={{ color: "GrayText" }} />

      <input
        // style={{border: '3px solid red'}}
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="outline-none w-[95%] ml-1 text-gray-400 font-bold text-lg bg-gray-100 cursor"
      />

      {searchText.length > 0 && (
        <CloseIcon
          style={{ cursor: "pointer", color: "GrayText" }}
          onClick={handle_Clear_Text}
        />
      )}
    </div>
  );
}

export default SearchBar