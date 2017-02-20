import React from 'react';
import axios from 'axios';

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
    <div>
      <div>
        <h1>Welcome</h1>
        <h4>Up To Date is a teaching app for the classroom</h4>
      </div>
      <button onClick={startTeaching}>Start Teaching</button>
    </div>
  );
};

export default Welcome;
