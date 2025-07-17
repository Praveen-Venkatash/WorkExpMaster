import { useState, useRef, useEffect } from 'react';
import DataTable from './DataTable';

function DataGallery({data, view, setView, setItemNo }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const imagestyle = {
    width: '250px',
    height: '150px',
    border: '1px solid #000000',
    cursor: 'pointer'
  };

  // Split data into chunks of 4
  const chunkSize = 4;
  const chunkedData = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    chunkedData.push(data.slice(i, i + chunkSize));
  }

  return (
    <body>
    <div>
      <table>
        
        <tbody>
          {chunkedData.map((group, rowIndex) => (
            <tr key={rowIndex}>
              {group.map((item, index) => (
                <td key={item.id || index}>
                  <img
                    title={`${item.name ? item.name.replace(item.name.charAt(0), item.name.charAt(0).toUpperCase() ): ''} - £ ${item.price.toFixed(2)}`}
                    style={imagestyle}
                    src={`../img/${item.pic}`}
                    alt="product pic"
                    onClick={() => {
                      setView('individual');
                      setItemNo(rowIndex * chunkSize + index); // ⬅️ Correct global index
                      setDropdownOpen(false);
                    }}
                  />
                  
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </body>
  );
}

export default DataGallery;