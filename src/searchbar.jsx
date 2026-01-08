import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const FilterButtons = (props) => {
    const { label, children } = props;
    return(
        <button className="bg-blue-600 rounded-xl px-4 py-1 mx-2 text-white hover:bg-blue-800 text-sm relative">
        { children }
        { label }
        </button>
    )
}

const FilterRow = (props) => {
    const { children } = props;
    return(
        <div className="flex justify-center">
            { children }
        </div>
    )
}

const SearchBar = (props) => {
    const { children } = props;
    return(
        <div className="flex flex-col">
            <div className="flex justify-center my-5">
                <div className="relative w-96">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </div>
                    <input className="bg-blue-200 rounded-xl px-4 py-2 pl-11 w-full" placeholder="Search"></input>
                </div>
            </div>
            { children }
        </div>
    )
}

export default function SeachBarComponent(){
    return(
        <SearchBar>
            <FilterRow>
                <FilterButtons label="Name">
                    <FontAwesomeIcon icon="fa-solid fa-file-signature"/>
                </FilterButtons>
                <FilterButtons label="Date">
                    <FontAwesomeIcon icon="fa-solid fa-calendar" />
                </FilterButtons>
                <FilterButtons label="Type">
                    <FontAwesomeIcon icon="fa-solid fa-file" />
                </FilterButtons>
            </FilterRow>
        </SearchBar>
    )
}