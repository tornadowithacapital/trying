import React from "react";
import { appConfig } from "../../../../config";
import Button from "../../_basic/button";
import Icons from "../../_basic/icon";

const Header = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="flex items-center justify-between p-8 relative">
        <div className="text-3xl font-extrabold text-white"></div>
        <div>
          <a href={appConfig.TWITTER_LINK} target="_blank">
            <Button>
              <Icons name="twitter" />
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
