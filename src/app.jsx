import { createRoot } from "react-dom/client"
import { StrictMode } from "react"
import SideMenu from "./components/sidemenu.jsx"
import MenuPanel from "./components/menupanel.jsx"

export default function App(){
    return (
        <>
            <SideMenu/>
            <MenuPanel/>
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