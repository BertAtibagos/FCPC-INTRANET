import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {useEffect, useState} from 'react';

library.add(fas, far, fab)

const FileRow = (props) => {
    const { children,name,dateTime,owner,location } = props;
    return(
        <tr className="border-collapse border-t border-b border-gray-300 hover:bg-gray-100 cursor-pointer" onClick={ () => console.log('You clicked', name) }>
            <td className="p-3">{ children } { name }</td>
            <td>{ dateTime }</td>
            <td>{ owner }</td>
            <td>{ location }</td>
        </tr>
    );
}

export default function InnerMenu(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await fetch(`/api/data`);

                const data = await response.json();

                if(data.success){
                    setData(data.data);
                } else {
                    setError(data.message);
                }

            }catch(error){
                setError('Failed to fetch data');
                console.error('Error fetching data:', error);
            }finally{
                setLoading(false);
            }
        }

        fetchData();
    },[]);

    if(loading){
        return(
            <tr>
                <td colSpan="4" className="p-3 text-center">Loading...</td>
            </tr>
        );
    }

    if(error){
        return(
            <tr>
                <td colSpan="4" className="p-3 text-center text-red-500">{ error }</td>
            </tr>
        );
    }
    return(
        <>
            {data.map((data) =>(
                <FileRow
                    key={data.schltadi_id}
                    name={data.schltadi_id}
                    dateTime={data.schltadi_mode}
                    owner={data.schltadi_type}
                    location={data.schlprof_id}
            >
                <FontAwesomeIcon icon="fa-solid fa-file" />
            </FileRow>
            ))}
        </>
    );
}