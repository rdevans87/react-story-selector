import React, { useState } from 'react';

const genres = [
{ id: 1, title: 'Action', content: 'Genre: Action' },
{ id: 2, title: 'Adventure', content: 'Genre: Adventure' },
{ id: 3, title: 'Comedy', content: 'Genre: Comedy' },
{ id: 4, title: 'Drama', content: 'Genre: Drama' },
{ id: 5, title: 'Horror', content: 'Genre: Horror' },
{ id: 6, title: 'Mystery', content: 'Genre: Mystery' },
{ id: 7, title: 'Period', content: 'Genre: Period' },
{ id: 8, title: 'Thriller', content: 'Genre: Thriller' },
{ id: 9, title: 'Western', content: 'Genre: Western' },

];

const formats = [
  { id: 1, title: 'Characters', content: 'Template for Characters...' },
  { id: 2, title: 'Dialogue', content: 'Template for Dialogue...' },
  { id: 3, title: 'Novel', content: 'Template for a Novel...' },
  { id: 4, title: 'Pitch Deck', content: 'Template for a Pitch Deck...' },
  { id: 5, title: 'Podcast', content: 'Template for a Podcast...' },
  { id: 6, title: 'Query Letter', content: 'Template for a Query Letter...' },
  { id: 7, title: 'Screenplay', content: 'Template for a Screenplay...' },
  { id: 8, title: 'Story Outline', content: 'Template for a Story Outline...' },
  { id: 9, title: 'Synopsis/Treatment', content: 'Template for a Synopsis/Treatment...' },
  { id: 10, title: 'TV Series Bible', content: 'Template for a TV Series Bible...' },
];

const structures = [
  { id: 1, title: 'Three-Act Structure', content: 'Template for Three-act structure...' },
  { id: 2, title: 'Four-Act Structure', content: 'Template for  four-act structure...' },
  { id: 3, title: 'Half-Hour Sitcom', content: 'Template for half-hour sitcom structure...' },
  { id: 4, title: 'One-Hour Drama', content: 'Template for  one-hour drama structure...' },
  { id: 5, title: "Freytag's Pyramid", content: 'Template for  Freytag\'s Pyramid structure...' },
  { id: 6, title: "The Writer's Journey", content: 'Template for  The Writer\'s Journey structure...' },
  { id: 7, title: "The Hero's Journey", content: 'Template for  The Hero\'s Journey structure...' },
  { id: 8, title: 'Save the Cat', content: 'Template for  Save the Cat structure...' },
  { id: 9, title: 'Story Circle', content: 'Template for Story Circle structure...' },
  { id: 10, title: 'Turn & Burn', content: 'Template for Turn & Burn structure...' },
  { id: 11, title: 'Story Maps', content: 'Template for Story Maps structure...' },
  { id: 12, title: 'Six-Stage Structure', content: 'Template for six-stage structure...' },
  { id: 13, title: 'The "Z" Screenplay', content: 'Template for The "Z" Screenplay structure...' },
];

function TemplateList({ onGenreSelect, onFormatSelect, onStructureSelect }) {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedStructure, setSelectedStructure] = useState('');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  const handleStructureChange = (event) => {
    setSelectedStructure(event.target.value);
  };

  const filteredGenres = selectedGenre === '' ? genres : genres.filter((genre) => genre.title === selectedGenre);
  const filteredFormats = selectedFormat === '' ? formats : formats.filter((format) => format.title === selectedFormat);
  const filteredStructures = selectedStructure === '' ? structures : structures.filter((structure) => structure.title === selectedStructure);

  return (
    <div>
      <div className="form-group">
        <label htmlFor="genreSelect">Select Genre:</label>
        <select id="genreSelect" className="form-control" onChange={handleGenreChange}>
          <option value=""></option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.title}>
              {genre.title}
        </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="formatSelect">Select Format:</label>
        <select id="formatSelect" className="form-control" onChange={handleFormatChange}>
          <option value=""></option>
          {formats.map((format) => (
            <option key={format.id} value={format.title}>
              {format.title}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="structureSelect">Select Structure:</label>
        <select id="structureSelect" className="form-control" onChange={handleStructureChange}>
          <option value=""></option>
          {structures.map((structure) => (
            <option key={structure.id} value={structure.title}>
              {structure.title}
            </option>
          ))}
        </select>
      </div>
      {selectedGenre !== '' && (
        <div className="mt-3">
          <h4>Selected Genre</h4>
          {filteredGenres.map((genre) => (
            <div key={genre.id}>
              <strong>{genre.title}</strong>
              <p>{genre.content}</p>
            </div>
          ))}
          </div>
      )}
          {selectedFormat !== '' && (
            <div className="mt-3">
              <h4>Selected Format</h4>
              {filteredFormats.map((format) => (
               <div key={format.id}>
               <strong>{format.title}</strong>
               <p>{format.content}</p>
              </div>
           ))}
           </div>
           )}
            {selectedStructure !== '' && (
           <div className="mt-3">
          <h4>Selected Structure</h4>
            {filteredStructures.map((structure) => (
            <div key={structure.id}>
            <strong>{structure.title}</strong>
            <p>{structure.content}</p>
         </div>
          ))}
      </div>
      )}
   </div>
  )}


export default TemplateList;
