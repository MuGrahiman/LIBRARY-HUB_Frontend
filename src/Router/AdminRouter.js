import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import Plan from '../pages/admin/Plans'
import Login from '../pages/admin/Login'
import AListPage from '../pages/admin/LibraryList'
import RouterProtector from '../Utils/RouterProtector'
function AdminRouter() {
  const adminRoutes = [
    {
      path: `dashboard`,
      component: <Dashboard />,
    },
    {
      path: `plan`,
      component: <Plan />,
    },
    {
      path: `library`,
      component: <AListPage />,
    },
   
  ];
  return (
    <Routes>
      <Route path='/login' element={<Login/>} />

      {/* <Route path='/*' element={<RouterProtector protect={'admin'} />}>
        {adminRoutes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={component} 
          />
        ))}
        <Route path={"/*"} element={<PageNotFoundAdmin />} />
      </Route> */}
      
         <Route path='/' element={<RouterProtector protect={'admin'}/>}>
         <Route path='dashboard' element={<Dashboard/>} />
         <Route path='plan' element={<Plan/>} />
         <Route path='library' element={<AListPage/>} />
         </Route>
    </Routes>
  )
}

export default AdminRouter