import {
  Home,
  Staff,
  Department,
  DepartmentDetail,
  Salary,
  StaffDetail,
  PageNotFound,
} from '../pages';

export const privateRoutes = [
  { path: '/', component: Home },
  { path: '/staffs', component: Staff },
  { path: '/staffs/:staffId', component: StaffDetail },
  { path: '/departments', component: Department },
  { path: '/departments/:deptId', component: DepartmentDetail },
  { path: '/salaries', component: Salary },
  { path: '/*', component: PageNotFound },
];
