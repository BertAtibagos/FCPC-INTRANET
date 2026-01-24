import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const FileRow = (props) => {
    const { children,name,dateTime,owner,location } = props;
    return(
        <tr className="border-collapse border-t border-b border-gray-300 hover:bg-gray-100 cursor-pointer">
            <td className="p-3">{ children } { name }</td>
            <td>{ dateTime }</td>
            <td>{ owner }</td>
            <td>{ location }</td>
        </tr>
    );
}

async function fetchData(){
    try{
        const response = await fetch(`/api/data`);

        const data = await response.json();
        console.log(data);

    }catch(error){
        console.error('Error fetching data:', error);
    }
}
fetchData();

export default function InnerMenu(){
    return(
        <>
            <FileRow 
                    name="Document1.txt" 
                    dateTime="2024-06-01 10:00 AM" 
                    owner="Alice" 
                    location="Folder A"
            >
                <FontAwesomeIcon icon="fa-solid fa-file" />
            </FileRow>
        </>
    );
}