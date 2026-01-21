import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

const SideMenu = (props) => {
    const { classname } = props;
    return(
        <div className={ classname }>
            <button className="bg-neutral-50 drop-shadow-lg/25 hover:bg-neutral-200 w-24 h-10 rounded-xl text-lg font-semibold">
                <FontAwesomeIcon icon="fa-solid fa-plus" /> New
            </button>
        </div>
    )
}

export default function SideMenuComponent(){
    return <SideMenu classname="row-span-2 p-10"/>;
}