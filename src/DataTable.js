import { useState, useRef, useEffect } from 'react';
import DataItem from './DataItem';

function DataTable({data, itemNo, setItemNo}) {
  const [, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  function nextPage() {
    if (itemNo + 1 < data.length) {
      setItemNo(itemNo + 1);
    }
  }
  function previousPage() {
    if (itemNo !== 0) {
      setItemNo(itemNo - 1);
    }
  }
  function FirstPage() {
    setItemNo(0);
  }
  function LastPage() {
    setItemNo(data.length - 1);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <DataItem product={data[itemNo]} />
      <button style={{position: "relative", top:"0px"}}onClick={() => FirstPage()}>First</button>
      <button style={{position: "relative", top:"0px"}}onClick={() => previousPage()}>Previous</button>
      <button style={{position: "relative", top:"0px"}}onClick={() => nextPage()}>Next</button>
      <button style={{position: "relative", top:"0px"}}onClick={() => LastPage()}>Last</button>

    </div>
  );
}

export default DataTable;