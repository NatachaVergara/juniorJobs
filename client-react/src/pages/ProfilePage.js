import { Fragment, useState } from "react";
import Profile from "../components/Register/Profile";
import RegisterRecruiter from "../components/Register/RegisterRecruiter";
import RegisterTalent from "../components/Register/RegisterTalent";

export default function ProfilePage() {
  const [isEditing,setIsEditing]=useState(false)
  const [isRecruiter,setIsRecruiter]=useState(true)
  const [isTalent,setIsTalent]=useState(true)
  function onEditHandler(){
    setIsEditing(true)
  }
  function onDeleteHandler(){
    
  }
  return (
    <Fragment>
      {!isEditing&&<Profile onEdit={onEditHandler} onDelete={onDeleteHandler}></Profile>}
      {/* editing and first login */}
      {isEditing&&isTalent && <RegisterTalent></RegisterTalent>}
      {isEditing&&isRecruiter && <RegisterRecruiter></RegisterRecruiter>}
    </Fragment>
  );
}
