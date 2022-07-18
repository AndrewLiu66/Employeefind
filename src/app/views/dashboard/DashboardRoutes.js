import React, { lazy } from 'react'
import Loadable from 'app/components/Loadable/Loadable'
import { authRoles } from 'app/auth/authRoles'
const Home = Loadable(lazy(() => import('./Home')))

export const dashboardRoutes = [
    {
        path: 'dashboard/default',
        element: <Home />,

        auth: authRoles.sa,
    }
]
