import React, { useEffect, useState } from 'react'
import CreateButton from '../components/listing/CreateButton'
import SvgsMenu from "../components/SvgsMenu"
import MainButton from "../components/MainButton"




// function MenuMobile({user, mainButton,{clientButton,agentButton,estimationButton,homeButton,backButton}}) {
function MenuMobile({ buttons, mainButton }) {

    let [leftButtons,setLeftButtons] = useState([]);
    let [rightButtons,setRightButtons] = useState([]);

    const displayButton = () =>{
    
        let left = [];
        let right = [];
       
        buttons.forEach((button)=>{
            // console.log(`position:${button.position}`);
            
            if(button.position === "left"){
                // console.log(`left`);
                
                if(button.id){
                    // console.log("leftId");
                    left.push(<CreateButton cible={`${button.cible}/${button.id}`} key={buttons.findIndex(but=>but.title == button.title)} style={""}><SvgsMenu choice={button.title}/></CreateButton>)
                } else {
                    // console.log("leftNoId");
                    left.push(<CreateButton cible={button.cible} key={buttons.findIndex(but=>but.title == button.title)} style={""}><SvgsMenu choice={button.title}/></CreateButton>)
                }
            } else if(button.position === "right"){
                // console.log(`right`);
                
                if(button.id){
                    // console.log("rightId");
                    right.push(<CreateButton cible={`${button.cible}/${button.id}`} key={buttons.findIndex(but=>but.title == button.title)} style={""}><SvgsMenu choice={button.title}/></CreateButton>)
                } else {
                    // console.log("rightNoId");
                    right.push(<CreateButton cible={button.cible} key={buttons.findIndex(but=>but.title == button.title)} style={""}><SvgsMenu choice={button.title}/></CreateButton>)
                }
            }
        })
       
        // console.log(left);
        // console.log(right);
        
        // return [leftButtons,rightButtons];
        setLeftButtons([...left])
        setRightButtons([...right])
        console.log(leftButtons);
        console.log(rightButtons);
        
    } 

 useEffect(()=>{
    //  const newButtons = displayButton();
     displayButton();
   
     
 },[])
    
    return (
        <div className="bg-white grid grid-cols-12 w-full p-2" >
            <div className="col-span-5 flex justify-around">
                <CreateButton cible="/dashboard" style={""} key="987654321" ><SvgsMenu  choice="home"/></CreateButton>

                {
                    leftButtons.length > 0 ? 
                leftButtons.map(element => element):
                ""
                }
               
            </div>
            <div className="col-span-2">
                <MainButton  mainButton title={mainButton.title} logic={mainButton.logic} svg={mainButton.svg}/> 
            </div>
            <div className="col-span-5 flex justify-around">

                {
                    rightButtons.length > 0 ? 
                rightButtons.map(element => element):
                ""
                }

            </div>
        </div>
    
    )
}

export default MenuMobile
