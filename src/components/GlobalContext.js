import React, { createContext, useState } from 'react';

// const SwContext = createContext();  // 첫번째 전역 변수
// const AdminnoContext = createContext(); // 두번째 전역 변수
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [sw, setSw] = useState(false);      // 첫번째 전역 변수용 state 생성
  const [adminno, setAdminno] = useState(0);  // 두번째 전역 변수용 state 생성

  return (
    // <SwContext.Provider value={{ sw, setSw }}>        {/* 첫번째 전역 변수 */}
    //   <AdminnoContext.Provider value={{ adminno, setAdminno }}>   {/* 첫번째 전역 변수 */}
    //     {children}
    //   </AdminnoContext.Provider>      
    // </SwContext.Provider>
    <GlobalContext.Provider value={{ sw, setSw, adminno, setAdminno }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };