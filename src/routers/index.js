import Vue from 'vue'
import Router from 'vue-router'

// Router Middleware
// import Middleware from './middleware'

// Main Containers
import MainHome from '@/containers/main_home'
import MainAttend from '@/containers/main_attend'

// Achievement Containers
import AchievementList from '@/containers/achievement_list'

// Project Containers
import ProjectList from '@/containers/project_list'
import ProjectNew from '@/containers/project_new'
import ProjectShow from '@/containers/project_show'
import ProjectEdit from '@/containers/project_edit'

// Admin Containers
import AdminAttendance from '@/containers/admin_attendance'
import AdminUsers from '@/containers/admin_users'

// Auth Containers
import AuthLogin from '@/containers/auth_login'
import AuthRegister from '@/containers/auth_register'

// User Containers
import UserList from '@/containers/user_list'
import UserShow from '@/containers/user_show'
import UserSettings from '@/containers/user_settings'

// Mentor Containers
import MentorVerify from '@/containers/mentor_verify'
import MentorSmallGroup from '@/containers/mentor_small_group'

// Blog Containers
import BlogList from '@/containers/blog_list'
import BlogNew from '@/containers/blog_new'
import BlogEdit from '@/containers/blog_edit'
import BlogShow from '@/containers/blog_show'

// TODO - Achievements
// TODO - User List
// TODO - User Show
// TODO - Developer Edit (Profile?)
// TODO - Developer Edit (Profile?)

Vue.use(Router)

// TODO - can we use multiple routers?
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainHome
    },
    {
      path: '/achievements',
      name: 'Achievements',
      component: AchievementList
    },
    {
      path: '/projects',
      name: 'Project List',
      component: ProjectList
    },
    {
      path: '/projects/new',
      name: 'Project New',
      component: ProjectNew
      // beforeEnter: Middleware.requireAuth
    },
    {
      path: '/projects/:id',
      name: 'Project Show',
      component: ProjectShow,
      props: true
    },
    {
      path: '/projects/:id/edit',
      name: 'Project Edit',
      component: ProjectEdit,
      props: true
      // beforeEnter: Middleware.requireAuth
    },
    {
      path: '/auth/login',
      name: 'Login',
      component: AuthLogin
    },
    {
      path: '/auth/register',
      name: 'Login',
      component: AuthRegister
    },
    {
      path: '/users',
      name: 'User List',
      component: UserList
    },
    {
      path: '/users/:id',
      name: 'User Show',
      component: UserShow,
      props: true
    },
    {
      path: '/profile',
      name: 'User Settings',
      component: UserSettings
    },
    {
      path: '/mentor/verify',
      name: 'Mentor Verify',
      component: MentorVerify
    },
    {
      path: '/mentor/small_group',
      name: 'Mentor Small Group',
      component: MentorSmallGroup
    },
    {
      path: '/blogs',
      name: 'Blog List',
      component: BlogList
    },
    {
      path: '/blogs/new',
      name: 'Blog New',
      component: BlogNew
    },
    {
      path: '/blogs/:id/edit',
      name: 'Blog Edit',
      component: BlogEdit,
      props: true
    },
    {
      path: '/blogs/:id',
      name: 'Blog Show',
      component: BlogShow,
      props: true
    },
    {
      path: '/attend',
      name: 'Attend',
      component: MainAttend
    },
    {
      path: '/admin/attendance',
      name: 'Admin Attendance',
      component: AdminAttendance
    },
    {
      path: '/admin/users',
      name: 'Admin Users',
      component: AdminUsers
    }
  ]
})
