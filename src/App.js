import logo from './logo.svg';
import './App.css';
import masterData from './data.json';
import DataTable from './DataTable.js';
import DataList from './DataList.js';
import DataGallery from './DataGallery.js';
import { useState, useRef, useEffect } from 'react';
import SignIn from './Sign-in.js';

function App() {
  const [itemNo, setItemNo] = useState(0);
  const [view, setView] = useState('individual');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [viewDropdownOpen, setViewDropdownOpen] = useState(false);
  const [filterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const viewDropdownRef = useRef(null);
  const filterDropdownRef = useRef(null);

  const categories = [
    { value: 'name', label: 'Name' },
    { value: 'size', label: 'Size' },
    { value: 'department', label: 'Department' },
    { value: 'price', label: 'Price' },
    { value: 'averageRating', label: 'Rating' },
    { value: 'type', label: 'Type' }
  ];

  useEffect(() => {
    const tempData = [...masterData];

    tempData.forEach(product => {
      const { ratings } = product;
      product.averageRating = Array.isArray(ratings) && ratings.length > 0
        ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(2)
        : 0;
    });

    setData(tempData);
    setLoading(false);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (viewDropdownRef.current && !viewDropdownRef.current.contains(event.target)) {
        setViewDropdownOpen(false);
      }
      if (filterDropdownRef.current && !filterDropdownRef.current.contains(event.target)) {
        setFilterDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function sortByCategory(newCategory) {
    const sortedList = [...data].sort((a, b) => {
      return a[newCategory] > b[newCategory] ? 1 : -1;
    });

    setData(sortedList);
  }

  return (
    <div className="App-header" style={{ backgroundColor: '#a3b3d4ff' }}>
      {!loading ? (
        <div className="App">
          <h1 style={{ position: 'absolute', top: '0px', left: '0px' }}>
            <img src={logo} className="App-logo" alt="logo" />
            Junior
          </h1>

          {/* View Rendering */}
          {view === 'individual' && (
            <DataTable data={data} itemNo={itemNo} setItemNo={setItemNo} />
          )}
          {view === 'list' && <DataList data={data} />}
          {view === 'gallery' && (
            <DataGallery data={data} view={view} setView={setView} setItemNo={setItemNo} />
          )}
          {view === 'sign-in' && <SignIn />}

          {/* View Dropdown */}
          <div className="dropdown position" ref={viewDropdownRef} style={{ position: 'absolute', right: '50px', top: '5px' }}>
            <button className="dropbtn" onClick={() => setViewDropdownOpen(open => !open)}>View Options</button>
            <div className={`dropdown-content${viewDropdownOpen ? ' show' : ''}`}>
              <a href="#List" onClick={() => { setView('list'); setViewDropdownOpen(false); }}>List</a>
              <a href="#Gallery" onClick={() => { setView('gallery'); setViewDropdownOpen(false); }}>Gallery</a>
              <a href="#Individual" onClick={() => { setView('individual'); setViewDropdownOpen(false); }}>Individual</a>
              <a href="#Sign-in" onClick={() => { setView('sign-in'); setViewDropdownOpen(false); }}>Sign-in</a>
            </div>
          </div>

          {/* Filter Dropdown */}
          <div className="dropdown position" ref={filterDropdownRef} style={{ position: 'absolute', right: '200px', top: '5px' }}>
            <button className="dropbtn" onClick={() => setFilterDropdownOpen(open => !open)}>Filter</button>
            <div className={`dropdown-content${filterDropdownOpen ? ' show' : ''}`}>
              {categories.map((item, idx) => (
                <div key={idx}>
                  <a
                    href={`#${item.value}`}
                    onClick={() => {
                      setSelectedCategory(item.value);
                      sortByCategory(item.value);
                      setFilterDropdownOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading!</p>
      )}
    </div>
  );
}

export default App;