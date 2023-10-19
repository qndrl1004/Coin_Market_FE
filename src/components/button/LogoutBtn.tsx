import axios from "axios";
import { useEffect, useState } from "react";

const LogoutBtn = () => {
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  useEffect(() => {
    axios
      .get("/api/favorites/checkcookie", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        if (response.data) {
          axios
            .post("/api/info/userprofile")
            .then((response) => {
              setEmail(response.data.decodedToken.user.email);
              setPhoto(response.data.decodedToken.user.photo);
            })
            .catch(() => { });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const redirectAfterLogoutPath = () => {
    window.location.href = "/api/auth/logout";
  };

  return (
    <div className="flex items-center w-[200px] h-full">
      <div className="px-2">
        <img className="w-[50px] rounded-lg" src={photo} alt="userImage" />
      </div>
      <div>
        <p className="text-[13px] pb-1">{email}</p>
        <p className="hover:text-yellow-500" onClick={redirectAfterLogoutPath}>로그아웃</p>
      </div>
    </div>
  );
};

export default LogoutBtn;
