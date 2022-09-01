import { useState } from "react";


const ANIMALS = ["bird", "cats", "dog", "rabbit", "reptile"];
const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed,setBreed] =useState("");
  const breeds =[];

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleAnimal = (e) =>{
      setAnimal(e.target.value);
      setBreed("");
  }
  const handleBreed = (e) =>{
      setBreed(e.target.value);
  }
  return (
    <div className="search-params">
      <form action="">
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            value={location}
            placeholder="location"
            onChange={handleLocation}
          />
        </label>
        <label   htmlFor="animal">
        Animal 
        <select 
        
          id="animal"
          value={animal}
          onChange={handleAnimal}
          onBlur={handleAnimal}
        >
        <option />
        {ANIMALS.map((animal) =>{
            return (
                <option key={animal} value={animal}>
                    {animal}
                </option>
            )
        })}
        </select>
        </label>
        <label htmlFor="breed">
        Breed 
        <select 
       
          id="breed"
          value={breed}
          onChange={handleBreed}
          onBlur={handleBreed}
        >
        <option />
        {breeds.map((breed) =>{
            return (
                <option key={breed} value={breed}>
                    {breed}
                </option>
            )
        })}
        </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
