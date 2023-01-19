import React, { useState } from "react";
import { Wrapper } from "./style";
import logo from "../../assets/icons/navbarLogo.png";
import { Dropdown } from "antd";
import { useSignOut } from "react-auth-kit";
import { warning } from "../Generic/Notification/ByModal";
import ProfileModal from "../Login/ProfileModal";
import { useNavigate, Outlet } from "react-router-dom";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";

const Navbar = () => {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const items = [
    {
      label: (
        <Wrapper.MenuItem onClick={() => setShowProfileModal(true)}>
          <SettingOutlined />
          <Wrapper.MenuItemText>Settings</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "0",
    },
    {
      label: (
        <Wrapper.MenuItem
          onClick={() => {
            setShowConfirm(true);
            warning({
              title: "Are you sure ?!",
              content: "This action can be ignore after confirming this!",
              onOk: () => {
                signOut();
                setShowConfirm(false);
                navigate("/login");
              },
              okButtonProps: { danger: true },
              okText: "Logout",
              open: showConfirm,
            });
          }}
        >
          <LogoutOutlined style={{ color: "red" }} />
          <Wrapper.MenuItemText danger>Logout</Wrapper.MenuItemText>
        </Wrapper.MenuItem>
      ),
      key: "1",
    },
  ];

  return (
    <Wrapper>
      <Wrapper.NavbarWrapper>
        <ProfileModal
          open={showProfileModal}
          onCancel={() => setShowProfileModal(false)}
        />
        <Wrapper.Container>
          <Wrapper.Logo loading="lazy" src={logo} />
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <Wrapper.Avatar>A</Wrapper.Avatar>
          </Dropdown>
        </Wrapper.Container>
      </Wrapper.NavbarWrapper>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
