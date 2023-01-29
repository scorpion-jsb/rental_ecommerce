const SidebarBack = ({ setSideBar, setDetail}) =>{
    const handleClick = () =>{
        setSideBar(<></>);
        setDetail(<></>)
    }
    return (
    <section>
        <div style={{ width:"100vw", height:"100%", position:"fixed", background:"black", opacity:"0.9", zIndex:"10000", top:"0px"}} onClick={handleClick}>
        </div>
    </section>);
}
export default SidebarBack