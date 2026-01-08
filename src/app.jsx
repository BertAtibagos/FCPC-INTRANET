import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import SearchBar from "./searchbar.jsx"

const Header = () => {
    return <div className="mx-8 my-4" >FCPC INTRANET</div>
}

export default function App(){
    return(
        <>
            <Header/>
            <SearchBar/>
        </>
    )
}

const container = document.getElementById('root');

if (!container._root) {
    container._root = createRoot(container);
}

container._root.render(
    <StrictMode>
        <App/>
    </StrictMode>
); 