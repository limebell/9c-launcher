import React from "react";
import { observer } from "mobx-react";
import MenuItem from "./MenuItem";
import { useStore } from "../../../utils/useStore";

import settings from "../../../resources/icons/settings.png";
import refresh from "../../../resources/icons/refresh.png";
import discord from "../../../resources/icons/discord.png";
import logo from "../../../resources/icons/9c.png";
import shop from "../../../resources/icons/shop.png";
import staking from "../../../resources/icons/staking.png";
import { styled } from "src/v2/stitches.config";

const MenuContainer = styled("div", {
  opacity: 0.9,
  backgroundColor: "$gray",
  boxSizing: "border-box",
  width: 160,
  padding: 10,
  marginLeft: 20,
  dragable: false,
});

const MenuDivider = styled("hr", {
  margin: "10px 0",
  border: "none",
  borderTop: "1px solid #979797",
});

function Menu() {
  const overlay = useStore("overlay");

  return (
    <MenuContainer>
      <MenuItem icon={staking} text="Staking" onClick={() => void 0} />
      <MenuItem icon={shop} text="Shop" onClick={() => void 0} />
      <MenuItem icon={logo} text="Explorer" onClick={() => void 0} />
      <MenuItem icon={discord} text="Discord" onClick={() => void 0} />
      <MenuDivider />
      <MenuItem icon={refresh} text="Restart" onClick={() => void 0} />
      <MenuItem
        icon={settings}
        disabled={overlay.page === "settings"}
        text="Settings"
        onClick={() => overlay.open("settings")}
      />
    </MenuContainer>
  );
}

export default observer(Menu);
