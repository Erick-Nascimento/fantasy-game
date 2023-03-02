import './search-container.scss';
import SearchIcon from '../../assets/img/search-icon.svg';

function SearchContainer(){
    return(
        <div className='searchContainer'>
            <div className='searchInput'>
                <input type="text" placeholder='Buscar jogador ou clube' />
                <img src={SearchIcon} alt="Search Icon" />
            </div>
            <div className='orderInputs'>
                <select>
                    <option>Ordenar</option>
                </select>
                <select>
                    <option>Status</option>
                </select>
            </div>
        </div>
    )
}

export default SearchContainer