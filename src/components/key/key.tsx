import { useState, SetStateAction } from "react";
import axios from "axios";

export default function Key() {
  const [connectKey, setConnectKey] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const inConnectKey = (e: { target: { value: SetStateAction<string> } }) => {
    setConnectKey(e.target.value);
  };

  const inSecretKey = (e: { target: { value: SetStateAction<string> } }) => {
    setSecretKey(e.target.value);
  };

  const onKeyBtn = () => {
    axios
      .post(
        "/api/info/userkey",
        { connectKey, secretKey },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        const receivedToken = response.data.token;
        localStorage.setItem("token", receivedToken);
      })
      .catch((error) => {
        console.error("API 키 전송 중 오류 발생", error);
      });
  };

  return (
    <div className="flex justify-center items-center rounded border-2 h-[160px] px-3">
      <div className="pr-2">
        <p>connect key</p>
        <input className="bg-gray-200" onChange={inConnectKey} type="text" />
        <p>secret key</p>
        <input className="bg-gray-200" onChange={inSecretKey} type="text" />
      </div>
      <button
        className="rounded bg-blue-500 hover:bg-blue-700 text-white h-[60%] mt-[20px] mx-2 px-4"
        onClick={onKeyBtn}
      >
        전송
      </button>
    </div>
  );
}
