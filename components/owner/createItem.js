import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong}  from "@fortawesome/free-solid-svg-icons"
import AddItemImg from "./addItemImg";
import SidebarBack from "../sidebarBack";
import { useState,useEffect } from "react";
import AddItemInfo from "./addItemInfo";
import AddChargeRate from "./addChargeRate";

const CreateItem = () => {

    const [sideBar, setSideBar] = useState(0);
    const [drawSidebar, setDrawSidebar] = useState([]);
    const [profileImgs, setProfileImgs] = useState([]);
    const [itemInfo, setItemInfo] = useState(null);
    const [chargeRate, setChargeRate] = useState(null);

    useEffect(() => {
      if(sideBar == 0){
        let temp = [];
        temp.push(<></>);
        setDrawSidebar(temp);
      }
      if(sideBar == 1){
        let temp = [];
        temp.push( <AddItemImg setSideBar={setSideBar} setProfileImgs={setProfileImgs}/>);
        setDrawSidebar(temp);
      }
      if(sideBar == 2){
        let temp = [];
        temp.push( <AddItemInfo setSideBar={setSideBar} setItemInfo = { setItemInfo}/>);
        setDrawSidebar(temp);
      }
      if(sideBar == 3){
        let temp = [];
        temp.push( <AddChargeRate setSideBar={setSideBar} setChargeRate={ setChargeRate}/>);
        setDrawSidebar(temp);
      }
    }, [sideBar]);
    useEffect(()=>{
        console.log(profileImgs);
    },[profileImgs.length])
    return (
        <section className="setting">
            <div className="flex items-center justify-start w-full">
                <div style={{ height: "70px" }} className="flex flex-row items-center cursor-pointer"><FontAwesomeIcon icon={faArrowLeftLong} className="text-2xl text-white" /></div>
            </div>
            <p className="loginText settingTitle">CREATE AN ITEM</p>
            <p className="loginDetail" style={{ marginBottom: "30px" }}>Complete the sections below to add your item to the platform.</p>
            <div className="flex flex-row w-full setting_box_pan">
                <div className="relative flex flex-col setting_box" onClick={()=>{ setSideBar(1)}}>
                    <img src='/logo/addItemPhotos.svg' className="settingItemImg" />
                    <p className="text-white">Add Item Photos</p>
                    {
                        profileImgs && profileImgs.length > 0 ?<img src="/logo/checked-circle.svg" className="absolute" style={{ top:"10%", right:"5%"}}/>:<></>
                    }
                </div>
                <div className="relative flex flex-col setting_box" onClick={()=>{ setSideBar(2)}}>
                    <img src='/logo/addItemInfo.svg' className="settingItemImg" />
                    <p className="text-white">Add Item Info</p>
                    {
                        itemInfo ?<img src="/logo/checked-circle.svg" className="absolute" style={{ top:"10%", right:"5%"}}/>:<></>
                    }
                </div>
                <div className="relative flex flex-col setting_box" onClick={()=>{ setSideBar(3)}}>
                    <img src='/logo/money.svg' className="settingItemImg" />
                    <p className="text-white">Add Charge Rate</p>
                    <img src="/logo/checked-circle.svg" className="absolute" style={{ top:"10%", right:"5%"}}/>
                </div>
            </div>
            {
                sideBar != 0?<SidebarBack/>:<></>
            }
            {
                 drawSidebar
            }
        </section>
    )

}
export default CreateItem