import { Home, Staff, Department, Salary, StaffDetail } from '../pages';

export const privateRoutes = [
  { path: '/', component: Home },
  { path: '/staffs', component: Staff },
  { path: '/staffs/:staffId', component: StaffDetail },
  { path: '/departments', component: Department },
  { path: '/salaries', component: Salary },
];
