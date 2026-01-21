import SearchBar from "./searchbar.jsx"
import InnerMenu from "./innermenu.jsx"

const DirectoryLabel = (props) => {
    const { directory, classname } = props;
    return <div className={ classname }>{ directory }</div>;
}

export default function MenuPanel(){
    return(
        <div className="rounded-3xl bg-white p-10 mt-30 mr-5">
            <SearchBar/>
            <DirectoryLabel 
                    directory="Main Folder" 
                    classname="font-bold px-2"
                />
            <table className="table-auto w-full mt-5">
                <thead className="border-b-2 border-gray-400 text-left">
                <tr>
                    <th>File Name</th>
                    <th>Date and Time</th>
                    <th>Owner</th>
                    <th>Location</th>
                </tr>
            </thead>
            <tbody>
                <InnerMenu/>
            </tbody>
            </table>
        </div>
    );
}