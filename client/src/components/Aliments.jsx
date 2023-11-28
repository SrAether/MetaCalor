import "./Aliments.css";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { getAlimentosRequest } from "../api/users.js";           //importar alimentos


export function Aliments() {
  const [input, setInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  let results;
  
  const alimentos = async () => {
    results = await getAlimentosRequest();      //obtenemos lo alimentos de la funcion
  console.log(results);

  };
  alimentos();
  console.log(results);
  
  // const filters = json.filter((alimentos) => {
    //   return user && user.name &&

  const handleChange = (item) => {
     setInput(item);


     if (searchTerm !== '') {
      const filteredData = results.data.filter((item) => {
        return item.Alimento.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }

  }

  return (
    <div className="containerMain">
      <div className="containerMaine">
        <FaSearch id="search-icon"/>
        <input
        type="text" 
        placeholder="Type to search..." 
        value={input} 
        onChange={(e) => handleChange(e.target.value)}
        />
        
      </div>
      
      <div className="results-list">
        <div>aasdasdad</div>
        <div>asdasd</div>
        <div>asdasdasd</div>
        {filteredResults.map((item, index) => (
          <div key={index}>{item.Alimento}</div>
        ))}
      </div>


      <div>
        
      </div>
    
    </div>  
  );
}
