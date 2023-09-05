import { Typography, List, Menu, MenuHandler, MenuList, Tabs, TabsHeader, Tab, TabsBody, TabPanel, Avatar, MenuItem, Button } from "@material-tailwind/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BiChevronDown, BiHelpCircle, BiUserCircle } from "react-icons/bi";
import { AiOutlineDashboard, AiOutlinePoweroff, AiOutlineSetting } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ShowOnLogout, ShowOnLogin } from "../protect/HiddenLink";
import { Link } from "react-router-dom";
import { RESET, logout, selectUser } from "../../redux/slices/authSlice";
import PropTypes from 'prop-types';
import { AiOutlineUpload } from 'react-icons/ai';

function DropDownMenu() {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <Button variant="text" className="flex items-center gap-1">
          <span>Categories</span>
          <BiChevronDown size={20} />
        </Button>
      </MenuHandler>
      <MenuList className="max-w-3xl">
        <Tabs value="design" orientation="vertical" className="max-w-3xl hover:outline-none outline-none border-none hover:border-none">
          <TabsHeader className="w-32 h-full">
            <Tab value="design" className="h-12">
              Design
            </Tab>
            <Tab value="photo" className="h-12">
              Photo
            </Tab>
          </TabsHeader>
          <TabsBody className="hover:outline-none">
            <TabPanel value="design" className="py-0 outline-none">
              <div className="grid grid-cols-4 gap-5">
                <Link href="/">Home</Link>
                <Link href="/">Backgrounds</Link>
                <Link href="/">Textures</Link>
                <Link href="/">Patterns</Link>
                <Link href="/">Vectors</Link>
                <Link href="/">Illustrations</Link>
                <Link href="/">Drawings</Link>
                <Link href="/">Clip art</Link>
                <Link href="/">Silhouettes</Link>
                <Link href="/">Cartoons</Link>
                <Link href="/">Icons</Link>
                <Link href="/">Symbols and signs</Link>
                <Link href="/">Social media</Link>
                <Link href="/">Business cards</Link>
                <Link href="/">Greeting cards</Link>
                <Link href="/">Invitation cards</Link>
                <Link href="/">Banners</Link>
                <Link href="/">Flyers</Link>
                <Link href="/">Posters</Link>
                <Link href="/">Stationery</Link>
                <Link href="/">Logos</Link>
                <Link href="/">Mockups</Link>
              </div>
            </TabPanel>
            <TabPanel value="photo" className="py-0 outline-none">
              <div className="flex flex-wrap gap-5">
                <Link href="/" className="w-1/3">
                  Business & marketing
                </Link>
                <Link href="/" className="w-1/3">
                  Lifestyle, health & wellness
                </Link>
                <Link href="/" className="w-1/3">
                  Nature
                </Link>
                <Link href="/" className="w-1/3">
                  People & emotions
                </Link>
                <Link href="/" className="w-1/3">
                  Food & drink
                </Link>
                <Link href="/" className="w-1/3">
                  Education & learning
                </Link>
                <Link href="/" className="w-1/3">
                  Sport
                </Link>
                <Link href="/" className="w-1/3">
                  Industry & technology
                </Link>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </MenuList>
    </Menu>
  );
}
export function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 flex gap-4 items-center text-sm text-white">
      <Link href="/">Vector</Link>
      <Link href="/">Photo</Link>
      <Link href="/">Video</Link>
      <Link href="/">PSD</Link>
      <Link href="/">3D</Link>
      <Link href="/">Fonts</Link>
      <DropDownMenu />
      <Link href="/">Collections</Link>
    </List>
  );
}

export const Header = () => {
  const dispatch = useDispatch();
  // const navigate = useRouter();
  const user = useSelector(selectUser);
  console.log(user);

  const photo = user?.avatar || "...";
  const username = user?.name || "...";
  const logoutUser = async () => {
    dispatch(RESET());
    await dispatch(logout());
    // navigate.push("/");
  };

  return (
    <>
      <header className="px-8 m-0 py-2 w-full shadow-none rounded-none border-none" style={{
        background: "linear-gradient(90deg, rgb(233, 111, 104) 0%, rgb(131, 37, 31) 100%)"
      }}>
        <div className="flex items-center justify-between text-white">
          <div className="logo flex">
            <img src="src/assets/images/logo.png" className="min-w-[100px] w-full max-w-[180px]" />
          </div>
          <div className="link text-sm flex gap-5 items-center">
            {/* <Link href="/sellcontent" className="text-black uppercase">Upload</Link> */}
            <ShowOnLogout>
              <Link href="/auth/login" className="border border-white px-4 text-white uppercase text-sm font-semibold tracking-[1px] py-2 rounded flex items-center"><AiOutlineUpload size = {22} className="me-2" /> Upload</Link>
              <Link to="/auth/register" className="border bg-white border-white px-6 py-2 text-black/80 font-semibold tracking-[1px] uppercase rounded text-base">
                login
              </Link>
            </ShowOnLogout>
            <ShowOnLogin>{/* <Button color="blue-gray" onClick={logoutUser}> */}</ShowOnLogin>
            <ShowOnLogin>
              <UserProfileAfterLogin photo={photo} username={username} logoutUser={logoutUser} />
            </ShowOnLogin>
          </div>
        </div>
      </header>
    </>
  );
};

export const UserProfileAfterLogin = ({ logoutUser, photo, username }) => {
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Avatar src={photo} size="sm" variant="circular" alt={username} className="cursor-pointer" />
      </MenuHandler>
      <MenuList>
        <Link href="/sellcontent/dashboard" className="outline-none">
          <MenuItem className="flex items-center gap-2">
            <AiOutlineDashboard size={18} />
            <Typography variant="small" className="font-normal">
              Dashboard
            </Typography>
          </MenuItem>
        </Link>
        <Link href="/user/profile" className=" outline-none border-none">
          <MenuItem className="flex items-center gap-2">
            <BiUserCircle size={18} />
            <Typography variant="small" className="font-normal">
              My Profile
            </Typography>
          </MenuItem>
        </Link>
        <MenuItem className="flex items-center gap-2">
          <AiOutlineSetting size={18} />
          <Typography variant="small" className="font-normal">
            Edit Profile
          </Typography>
        </MenuItem>

        <MenuItem className="flex items-center gap-2">
          <BiHelpCircle size={18} />
          <Typography variant="small" className="font-normal">
            Help
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem className="flex items-center gap-2 " onClick={logoutUser}>
          <AiOutlinePoweroff size={18} />
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};


UserProfileAfterLogin.propTypes = {
  logoutUser: PropTypes.any,
  photo: PropTypes.any,
  username: PropTypes.any
}
