const Buscador = () => {
    const [ search, setSearch ]= useState('')
  return (
        <form>
            <input 
            type="text" 
            placeholder="Buscar..."
            autoComplete='off'
            name='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className='btn-buscador'>
                <i></i>
            </button>
        </form>
    
  )
}

export default Buscador