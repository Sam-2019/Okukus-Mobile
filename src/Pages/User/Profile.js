import React from "react";
import { useHistory } from "react-router-dom";
import Back from "../Components/Back";
import PopUp from "../Components/Popup";
import ChangePassword from "./Profile/Change Password";
import ChangeEmail from "./Profile/Change Email";
import ChangeName from "./Profile/Change Name";
import OrderHistory from "./Profile/Order History";
import ProfilePic from "./Profile/Change ProfilePic";
import WishList from "./Profile/Wish List";
import Photo from "../Components/Profile Photo";
import UserName from "../Components/UserName";
import Verification from "../Components/Verify";
import { okukus } from "../endpoints";
import { SmallView } from "../styles";
import { MediaQuery } from "../helper";
import { useData } from "../Context";
import "./profile.css";

function Proflie() {
  let history = useHistory();
  let { width } = MediaQuery();
  const { profileImage, firstName, lastName } = useData();
  const breakpoint = 540;
  let activePage;
  const [password, updatePassword] = React.useState(false);
  const [email, updateEmail] = React.useState(false);
  const [name, updateName] = React.useState(false);
  const [profilePhoto, updateProfilePhoto] = React.useState(false);

  const [active, setActive] = React.useState("Order History");

  const WebShare = (event) => {
    event.preventDefault();

    const canonicalElement = document.querySelector("link[rel=canonical]");

    if (navigator.share) {
      if (canonicalElement !== null) {
        okukus = canonicalElement.href;
      }

      navigator
        .share({
          title: okukus,
          text:
            "Your one-stop shop for a wide selection of books, magazines & just about anything else. ",
          url: okukus,
        })
        .then(() => {
          console.log("Thanks for sharing");
        });
    } else {
    }
  };

  switch (active) {
    case "Order History":
      activePage = <OrderHistory />;
      break;
    case "Wish List":
      activePage = <WishList />;
      break;
    case "Change Name":
      activePage = (
        <SmallView>
          <ChangeName />
        </SmallView>
      );
      break;
    case "Change Email":
      activePage = (
        <SmallView>
          <ChangeEmail />
        </SmallView>
      );
      break;
    case "Change Password":
      activePage = (
        <SmallView>
          <ChangePassword />
        </SmallView>
      );
      break;
    default:
      activePage = <OrderHistory />;
      break;
  }

  return (
    <div className="user-wrapper">
      <div className="header ">
        <div className="category ">
          <div className="object-1">
            <Back
              width={30}
              height={30}
              action={() => {
                window.history.back();
              }}
            />
          </div>
          <div className="object-2"> Profile</div>
        </div>
      </div>

      <div className="main">
        <div className="user-detailsXother-pages">
          <div className="left-side">
            <div className="user-detail">
              <div className="user-category">
                <div
                  className="object-5"
                  onClick={() => {
                    updateProfilePhoto(true);
                  }}
                >
                  <Photo
                    src={`https://okukus.com/${profileImage}`}
                    className="image"
                  />
                </div>

                <div className="nameXeditXverify">
                  <UserName name={`${firstName} ${lastName}`} />
                  {/* <Pen
                      width={15}
                      height={15}
                      action={() => {
                        updateName(true);
                      }}
                    /> */}

                  <Verification />
                </div>
              </div>
            </div>

            <div className="options">
              {width > breakpoint ? (
                <>
                  <div
                    className="option-list"
                    onClick={() => {
                      setActive("Order History");
                    }}
                  >
                    Order History
                  </div>

                  <div
                    className="option-list"
                    onClick={() => {
                      setActive("Wish List");
                    }}
                  >
                    Wish List
                  </div>

                  <div
                    className="option-list"
                    onClick={() => {
                      setActive("Change Name");
                    }}
                  >
                    Change Name
                  </div>

                  <div
                    className="option-list"
                    onClick={() => {
                      setActive("Change Email");
                    }}
                  >
                    Change Email
                  </div>

                  <div
                    className="option-list"
                    onClick={() => {
                      setActive("Change Password");
                    }}
                  >
                    Change Password
                  </div>

                  <div className="option-list"> Customer Service</div>

                  <div className="option-list" onClick={WebShare}>
                    <span>Invite a friend</span>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="option-list"
                    onClick={() => {
                      history.push("/user/order history");
                    }}
                  >
                    Order History
                  </div>

                  <div
                    className="option-list"
                    onClick={() => {
                      history.push("/user/wishlist");
                    }}
                  >
                    Wish List
                  </div>

                  <div
                    className="option-list"
                    onClick={() => {
                      updateName(true);
                    }}
                  >
                    Change Name
                  </div>

                  <div
                    className="option-list"
                    onClick={() => {
                      updateEmail(true);
                    }}
                  >
                    Change Email
                  </div>

                  <div
                    className="option-list"
                    onClick={() => {
                      updatePassword(true);
                    }}
                  >
                    Change Password
                  </div>

                  <div className="option-list" onClick={() => {}}>
                    Customer Service
                  </div>

                  <div className="option-list" onClick={WebShare}>
                    <span>Invite a friend</span>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="right-side">
            <div className="other-pages">
              <div className="activePage">{active}</div>

              <div>{activePage}</div>
            </div>
          </div>
        </div>

        {name ? (
          <PopUp close={() => updateName(false)}>
            <ChangeName
              close={() => {
                updateName(false);
              }}
            />
          </PopUp>
        ) : null}

        {password ? (
          <PopUp close={() => updatePassword(false)}>
            <ChangePassword
              close={() => {
                updatePassword(false);
              }}
            />
          </PopUp>
        ) : null}

        {email ? (
          <PopUp close={() => updateEmail(false)}>
            <ChangeEmail
              close={() => {
                updateEmail(false);
              }}
            />
          </PopUp>
        ) : null}

        {profilePhoto ? (
          <PopUp>
            <ProfilePic close={() => updateProfilePhoto(false)} />
          </PopUp>
        ) : null}
      </div>
    </div>
  );
}
export default Proflie;
