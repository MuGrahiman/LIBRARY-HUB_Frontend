import { Popup } from "react-map-gl";
import { NavLink } from "react-router-dom";
import { ClassNames } from "@emotion/react";

export default function POP({ Value, setPop, PopUp }) {
  return Value.map((Value, index) => {
    if (index === PopUp)
      return (
        <Popup
          key={Value._id}
          className='rounded-md shadow-md'
          anchor="top"
          longitude={Number(Value.Longitude)}
          latitude={Number(Value.Latitude)}
          onClose={() => setPop(false)}
        >
          <div className="w-100 h-100 flex flex-col text-center  ">
            <div className="flex fex-wrap">
              {Value.Name} | {Value.Country} | {Value.State} | {Value.City}
            </div>
            <NavLink
              className="text-blue-500 cursor-pointer"
              to={`/user/${Value._id}/home`}
            >
              {Value.Name}
            </NavLink>
          </div>
        </Popup>
      );
  });
}
