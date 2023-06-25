import React from "react";
import useAuth from "../../hooks/authentication";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import BaseButton from "../common/base-button";
import { Avatar } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { errorToast } from "../../utils/toast";

const DrawerContent = ({ toggleDrawer }) => {
  const user = useAuth();

  const logout = () => {
    signOut(auth)
      .then(() => {
        errorToast("Vous êtes déconnecté !!!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <aside className="relative w-[300px]">
      <div className="p-7">
        <h2 className="text-lg font-bold">
          Bonjour {user.displayName.split(" ").at(0)} 👋
        </h2>
        <p className="text-slate-400 text-sm mb-10">{user.email}</p>
        <div className="space-y-4" onClick={toggleDrawer(false)}>
          <BaseButton
            to="/tableau-de-bord"
            title="Votre tableau de bord"
            variant="outline"
            tag="Link"
            border={true}
          >
            <MdOutlineDashboardCustomize size={25} />
          </BaseButton>
          <BaseButton
            title="Se déconnecter"
            variant="contain"
            theme="red"
            tag="button"
            border={true}
            onClick={logout}
          />
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-[300px] flex items-center space-x-2 border-t p-7 border-slate-700">
        <Avatar
          alt={user.displayName}
          src={user.photoURL}
          sx={{
            backgroundColor: "#38BDF8AA",
            width: 30,
            height: 30,
          }}
        />
        <p className="text-slate-400 text-sm">{user.displayName}</p>
      </div>
    </aside>
  );
};

export default DrawerContent;
