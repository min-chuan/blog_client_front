import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
  Button,
  Tabs,
  TabPane,
  Form,
  FormItem,
  Input,
  Row,
  Col,
  Checkbox,
  Message,
  Container,
  Aside,
  Main,
  Header,
  Menu,
  Submenu,
  MenuItemGroup,
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Select,
  Option,
  Table,
  TableColumn,
  Switch,
  Pagination,
  Dialog,
  Upload,
} from 'element-ui';

Vue.use(Button);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Pagination);
Vue.use(Switch);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Select);
Vue.use(Option);
Vue.use(Card);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Header);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Checkbox);

Vue.prototype.$message = Message;
