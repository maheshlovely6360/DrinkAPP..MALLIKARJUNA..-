import {useState} from 'react'

const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = e => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSearch} className="mb-3">
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a drink"
      />
      <button type="submit" className="btn btn-primary mt-2">
        Search
      </button>
    </form>
  )
}

export default SearchBar
