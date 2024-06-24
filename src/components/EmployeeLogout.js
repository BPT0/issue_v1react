import '../App.css';

import React, { useContext, useState } from 'react';

import { GlobalContext } from './GlobalContext';
import {getIP} from './Tool';

function EmployeeLogout() {
  const { sw, setSw, adminno, setAdminno } = useContext(GlobalContext);

  let logout = 'false';

  fetch(`http://${getIP()}:9091/employee/logout`, {
    method: 'GET'
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({
    //   id: id,
    //   passwd: passwd
    // })
  })
  .then(result => result.json())
  .then(result => {
    console.log('->', result.sw, result.employeeno);
    if (result.logout === true) {
      setSw(result.sw);
      setAdminno(result.employeeno); 
    } else {
      alert('로그인에 실패했습니다.\n다시 시도해주세요.')
    }
  })
  .catch(err => console.error(err))

  return (
    <>
      <h5>이용해 주셔서 감사합니다. 즐거운 하루 되세요~</h5>
    </>
  );
}

export default EmployeeLogout;