import Home from "../pages/Home";
import Book from "../pages/Book/Book";

interface IRoute {
  path: string;
  name: string;
  exact: boolean;
  auth: boolean;
  component: any;
  props?: any;
}

const homeRoute: IRoute[] = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    auth: false,
    component: Home
  }
];

const bookRoute: IRoute[] = [
  {
    path: '/book',
    name: 'Book',
    exact: true,
    auth: false,
    component: Book
  }
];

const routes = [...homeRoute, ...bookRoute];

export default routes;