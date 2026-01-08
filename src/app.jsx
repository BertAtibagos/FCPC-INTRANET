import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import SearchBar from "./searchbar.jsx"

export default function App(){
    return <SearchBar/>
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