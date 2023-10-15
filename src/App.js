import React, { useState } from 'react';
import TemplateList from './TemplateList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [selectedGenre, setSelectedGenre] = useState('');
const [selectedFormat, setSelectedFormat] = useState('');
const [selectedStructure, setSelectedStructure] = useState('');

const handleGenreSelect = (genre) => {
  setSelectedGenre(genre);
};

const handleFormatSelect = (format) => {
  setSelectedFormat(format);
};

const handleStructureSelect = (structure) => {
  setSelectedStructure(structure);
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
        </div>
      </div>
    </div>
  );
  
}
export default App;
