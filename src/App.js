import React, { useState } from 'react';
import TemplateList from './TemplateList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [selectedGenre, setSelectedGenre] = useState(
    JSON.parse(localStorage.getItem('selectedGenre')) || ''
  );
  const [selectedFormat, setSelectedFormat] = useState(
    localStorage.getItem('selectedFormat') || ''
  );
  const [selectedStructure, setSelectedStructure] = useState(
    localStorage.getItem('selectedStructure') || ''
  );

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    // Save the selected template to local storage
    localStorage.setItem('selectedGenre', JSON.stringify(genre));
  };

  const handleFormatSelect = (format) => {
    setSelectedFormat(format);
    // Save the selected genre to local storage
    localStorage.setItem('selectedFormat', format);
  };

  const handleStructureSelect = (structure) => {
    setSelectedStructure(structure);
    // Save the selected structure to local storage
    localStorage.setItem('selectedStructure', structure);
  };

  const handleSaveToLocalStorage = () => {
    // Save the current selections to local storage
    localStorage.setItem('savedGenre', JSON.stringify(selectedGenre));
    localStorage.setItem('savedFormat', selectedFormat);
    localStorage.setItem('savedStructure', selectedStructure);
  };

return (
    <div className="container mt-4">
      <h1>Story Selector</h1>
      <p>Select a genre, format, and structure:</p>
      <div className="row">
        <div className="col-md-3">
          <TemplateList
            onGenreSelect={handleGenreSelect}
            onTemplateSelect={handleFormatSelect}
            onStructureSelect={handleStructureSelect}
          />
        </div>
        <div className="col-md-9">
          {selectedGenre !== '' && (
            <div className="mb-3">
              <strong>Selected Genre:</strong> {selectedGenre}
            </div>
          )}
            {selectedFormat !== '' && (
            <div className="mb-3">
              <strong>Selected Format:</strong> {selectedFormat}
            </div>
          )}
          {selectedStructure !== '' && (
            <div className="mb-3">
              <strong>Selected Structure:</strong> {selectedStructure}
            </div>
          )}
        <button className="btn btn-primary" onClick={handleSaveToLocalStorage}>
                Save Results
              </button>
            </div>
      </div>
      </div>
);

}

export default App;