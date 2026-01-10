const SideMenu = (props) => {
    const { classname } = props;
    return(
        <div className={ classname }>
            <button className="bg-neutral-50 drop-shadow-lg/25 hover:bg-neutral-200 w-24 h-10 rounded-xl text-lg font-semibold">
                + New
            </button>
        </div>
    )
}

export default function SideMenuComponent(){
    return <SideMenu classname="p-5"/>;
}