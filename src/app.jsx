import { createRoot } from "react-dom/client"

const Header = () => {
    return <div class="mx-8 my-4" >FCPC INTRANET</div>
}

const FilterButtons = (props) => {
    const { label } = props;
    return <button class="bg-blue-600 rounded-xl px-4 py-1 mx-2 text-white hover:bg-blue-800 text-sm">{ label }</button>
}

const FilterRow = (props) => {
    const { children } = props;
    return(
        <div class="flex justify-center">
            { children }
        </div>
    )
}

const SearchBar = (props) => {
    const { children } = props;
    return(
        <div class="flex flex-col">
            <div class="flex justify-center my-5">
                <input class="bg-blue-200 rounded-xl px-4 py-2 w-96" placeholder="Search"/>
            </div>
            { children }
        </div>
    )
}

export default function App(){
    return(
        <>
        <Header/>
        <SearchBar>
            <FilterRow>
                <FilterButtons label="Name"/>
                <FilterButtons label="Date"/>
                <FilterButtons label="Type"/>
                <FilterButtons label="Size"/>
            </FilterRow>
        </SearchBar>
        </>
    )
}

createRoot(document.getElementById('root')).render(<App/>); 