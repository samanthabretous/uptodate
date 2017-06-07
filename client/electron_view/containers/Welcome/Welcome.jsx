import React from 'react';
import axios from 'axios';
import style from './WelcomeStyles';

const Welcome = (props) => {
  const startTeaching = () => {
    /* send ajax call to update user
    * this update indicates that the user has used the desktop app before
    * user should no longer see this screen
    */
    const userId = JSON.parse(localStorage.userInfo).userId;
    axios.put(`http://localhost:2020/api/users/${userId}/usedDesktop`)
    .then(({ data: { lastClassViewed } }) =>
      props.router.push(`add-lesson/${userId}/${lastClassViewed}`));
  };
  return (
    <div style={style.welcome}>
      <div>
        <div style={style.top}>
          <div style={style.handImgContainer}>
            <img style={style.img} alt="waving-hand" src="../web_view/public/images/waving-hand.png" />
          </div>
          <h1 style={style.welcomeHeader}>Welcome!</h1>
        </div>
        <h4 style={style.tagline}>Up To Date is a teaching app for the classroom</h4>
      </div>
      <button style={style.startButton}onClick={startTeaching}>Start Teaching</button>
    </div>
  );
};

export default Welcome;
