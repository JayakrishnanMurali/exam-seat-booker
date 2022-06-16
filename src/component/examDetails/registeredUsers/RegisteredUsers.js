import React from "react";
import lStorage from "local-storage";
import { useState } from "react";
import { useEffect } from "react";

export const RegisteredUsers = () => {
  const [seatsSelected, setSeatsSelected] = useState();
  const [isUserPresent, setIsUserPresent] = useState(false);
  const [currUser, setcurrUser] = useState();

  useEffect(() => {
    if (lStorage.get("Seat")) {
      setIsUserPresent(true);
      setSeatsSelected(lStorage.get("Seat"));
      setcurrUser(lStorage.get("userData"));
    }
  }, []);

  return (
    <div className="mt-8 flex justify-center items-center">
      {isUserPresent && (
        <div className="flex flex-col gap-4">
          {seatsSelected?.map((seatId, index) => (
            <div key={index} className="bg-green-400 px-4 py-2 rounded-md">
              <p>{`Name: ${currUser[index]?.userName}  |  Seat No: ${seatId}`}</p>
            </div>
          ))}
        </div>
      )}

      {!isUserPresent && (
        <div className="bg-red-500 w-1/4 text-center px-4 py-2 rounded-md">
          <p className="text-white">No Registered Users</p>
        </div>
      )}
    </div>
  );
};
