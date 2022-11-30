import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawerAll: { mini: false, view: true },
    Tickets: [
      {
        id: 1,
        NameClient: "tickets.table.tbody.tr1.td1",
        NameEmployee: "tickets.table.tbody.tr1.td2",
        Phone: "tickets.table.tbody.tr1.td3",
        ticketStatus: 1,
      },
      {
        id: 2,
        NameClient: "tickets.table.tbody.tr2.td1",
        NameEmployee: "tickets.table.tbody.tr2.td2",
        Phone: "tickets.table.tbody.tr2.td3",
        ticketStatus: 2,
      },
      {
        id: 3,
        NameClient: "tickets.table.tbody.tr3.td1",
        NameEmployee: "tickets.table.tbody.tr3.td2",
        Phone: "tickets.table.tbody.tr3.td3",
        ticketStatus: 3,
      },
      {
        id: 4,
        NameClient: "tickets.table.tbody.tr4.td1",
        NameEmployee: "tickets.table.tbody.tr4.td2",
        Phone: "tickets.table.tbody.tr4.td3",
        ticketStatus: 1,
      },
      {
        id: 5,
        NameClient: "tickets.table.tbody.tr5.td1",
        NameEmployee: "tickets.table.tbody.tr5.td2",
        Phone: "tickets.table.tbody.tr5.td3",
        ticketStatus: 2,
      },
    ],
  },
  mutations: {
    get_drawer(state, data) {
      state.drawerAll = data;
    },
    get_ticket(state, data) {
      state.Tickets = data;
    },
  },
  actions: {},
  modules: {},
});
