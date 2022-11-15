import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/signUp/Register.vue";
import LogIn from "../views/logIn/LogIn.vue";
import Reset from "../views/resetPssword/Reset.vue";
import InquirePrice from "../views/InquirePrice.vue";
import OpenTicket from "../views/OpenTicket.vue";
import Tickets from "../views/Tickets.vue";
import Services from "../views/Services.vue";
import Jobs from "../views/Jobs.vue";
import JobAbout from "../views/JobAbout.vue";
import Contact from "../views/ContactUs.vue";
import System from "../views/System.vue";
import SystemTow from "../views/SystemTow.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      nav: {
        view: true,
        absolute: true,
      },
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/logIn",
    name: "logIn",
    component: LogIn,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/reset",
    name: "reset",
    component: Reset,
    meta: {
      nav: {
        view: false,
        absolute: false,
      },
    },
  },
  {
    path: "/inqPrice",
    name: "inqPrice",
    component: InquirePrice,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/openTick",
    name: "openTick",
    component: OpenTicket,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/ticket",
    name: "ticket",
    component: Tickets,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/services",
    name: "services",
    component: Services,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/jobAbout",
    name: "jobAbout",
    component: JobAbout,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/system",
    name: "system",
    component: System,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
  {
    path: "/systemTow",
    name: "systemTow",
    component: SystemTow,
    meta: {
      nav: {
        view: true,
        absolute: false,
      },
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
