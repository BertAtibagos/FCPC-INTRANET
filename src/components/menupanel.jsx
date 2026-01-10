import SearchBar from "./searchbar.jsx"

const DirectoryLabel = (props) => {
    const { directory, classname } = props;
    return <div className={ classname }>{ directory }</div>;
}

export default function MenuPanel(){
    return(
        <div>
            <SearchBar/>
            <DirectoryLabel 
                    directory="Main Folder" 
                    classname=" font-bold px-2"
                />
        </div>
                
    );
}