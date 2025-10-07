


import { SettingsQueryResult } from "@/sanity.types";
import React from "react";

interface SubMenuProps {
// Define any props you might need for the SubMenu component
    subMenus: NonNullable<NonNullable<SettingsQueryResult>['nav']>['menus'];
}

export const SubMenu = ({ subMenus }: SubMenuProps) => {
    
  return 
};
