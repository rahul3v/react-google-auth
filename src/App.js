import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  const [login, setLogin] = useState(false)
  const [userData, setUserData] = useState({})

  useEffect(()=>{
    document.addEventListener('online',()=>{
      if(!login)window.location.reload();
    })
    document.addEventListener('offline',()=>{
      console.log('user is offline')
    })
  },[])
  
  useEffect(()=>{
    if(!login)setUserData({})
  },[login])

  return (
    <div className="container">
      {login ? (
        <>
          {
          //JSON.stringify(Object.keys(userData))
          }
          <div className="img-block">
            <img className="profile-pic" src={userData.imageUrl} referrerPolicy="no-referrer" />
            <div>Hello {userData.givenName} !</div>
          </div>
          <div className="stats">
            <div>Applied <div>28</div></div>
            <div>Reviewd <div>73</div></div>
            <div>Contacted <div>18</div></div>
          </div>
          <div className="profile-details">
            <h5>Complete Profile</h5>
            <div className="detail-block">
              <div></div>
              <div style={{background:'#ffd09f'}}></div>
            </div>
          </div>
          <Logout login={setLogin} />
        </>
        ): <Login login={setLogin} userData={setUserData}/>
      }
    </div>
  );
}

export default App;
