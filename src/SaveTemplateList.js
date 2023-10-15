import SaveTemplateList from './SaveTemplateList';

function SaveTemplateList({ onGenreSelect, onFormatSelect, onStructureSelect }) {
 // Load previously selected results from local storage
 const [selectedGenre, setSelectedGenre] = useState(
    JSON.parse(localStorage.getItem('selectedGenre')) || ''
  );
  const [selectedFormat, setSelectedFormat] = useState(
    JSON.parse(localStorage.getItem('selectedFormat'))|| ''
  );
  const [selectedStructure, setSelectedStructure] = useState(
    JSON.parse(localStorage.getItem('selectedStructure')) || ''
  );
  
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    // Save the selected template to local storage
    localStorage.setItem('selectedGenre', JSON.stringify(genre));
  };
  
  const handleFormatSelect = (format) => {
    setSelectedFormat(format);
    // Save the selected genre to local storage
    localStorage.setItem('selectedFormat', JSON.stringify(format));
  };
  
  const handleStructureSelect = (structure) => {
    setSelectedStructure(structure);
    // Save the selected structure to local storage
    localStorage.setItem('selectedStructure', JSON.stringify(structure));
  };

};


export default SaveTemplateList;