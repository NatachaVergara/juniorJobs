import { Fragment, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import Profile from "../components/Register/Profile";
import RegisterRecruiter from "../components/Register/RegisterRecruiter";
import RegisterTalent from "../components/Register/RegisterTalent";
import { useAxios } from "../hooks/use-axios";
import { useUserContext } from "../Store/UserContext";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const { id = 13, userType = null } = useUserContext();
  const { fetchData } = useAxios();

  const onEditClick = () => {
    setIsEditing(true);
  };

  function onSubmitHandler(values) {
    let config = {
      method: "PUT",
      headers: { accept: "*/*" },
      params: { id },
    };
    if (userType === "Talent") {
      config.url = `/talents/${id}`;
      fetchData(config);
    } else if (userType === "Recruiter") {
      config.url = `/recruiters/${id}`;
      fetchData(config);
    }
  }

  return <Profile />;
}
