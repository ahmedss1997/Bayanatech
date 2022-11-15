<template>
  <div class="home">
    <div class="light lightPrimary">
      <Nav />
    </div>
    <div class="lightPrimary py-15">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="all-ticket txtOnPrimary rounded-lg">
              <div class="head-ticket ticket rounded-lg rounded-b-0 py-6">
                <!-- dialog in tables Add -->
                <v-dialog
                  v-model="dialog3"
                  persistent
                  max-width="800"
                  class="dig"
                >
                  <template v-slot:activator="{ on, attrs }" class="">
                    <div class="space w-full d-flex align-center px-6">
                      <span class="text-h6"> {{ $t(`tickets.heading`) }} </span>
                      <v-spacer></v-spacer>
                      <v-btn
                        v-bind="attrs"
                        v-on="on"
                        height="40"
                        class="text-capitalize primary txtOnPrimary--text"
                      >
                        <span>{{ $t(`tickets.btn`) }}</span>
                        <v-icon class="txtOnPrimary--text mx-2"
                          >mdi-plus-circle-outline</v-icon
                        >
                      </v-btn>
                    </div>
                  </template>
                  <v-card>
                    <v-card-actions>
                      <v-btn
                        absolute
                        top
                        right
                        class="primary rounded-circle pa-0"
                        @click="dialog3 = false"
                        height="20"
                        min-width="auto"
                        width="20"
                      >
                        <v-icon class="text-caption txtOnPrimary--text">
                          mdi-close-thick
                        </v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-card-title class="d-flex justify-center text-h5">
                      <h3 class="mt-4">
                        {{ $t(`tickets.table.dialogs.headingAdd`) }}
                      </h3>
                    </v-card-title>
                    <v-card-text>
                      <v-container>
                        <v-form ref="addProduct">
                          <v-row no-gutters>
                            <v-col class="px-3 mb-4" cols="12" md="6">
                              <span class="font-weight-bold px-0 my-3 d-block">
                                {{ $t(`tickets.table.dialogs.nameClient`) }}
                              </span>
                              <v-text-field
                                class=""
                                height="40"
                                :label="$t(`tickets.table.dialogs.nameClient`)"
                                solo
                                :hide-details="false"
                                v-model="newData.Name"
                                :rules="validationRules.textRules"
                              ></v-text-field>
                            </v-col>
                            <v-col class="px-3 mb-4" cols="12" md="6">
                              <span class="font-weight-bold px-0 my-3 d-block">
                                {{ $t(`tickets.table.dialogs.nameEmployee`) }}
                              </span>
                              <v-text-field
                                class=""
                                height="40"
                                :label="
                                  $t(`tickets.table.dialogs.nameEmployee`)
                                "
                                solo
                                :hide-details="false"
                                v-model="newData.ParCode"
                                :rules="validationRules.textRules"
                              ></v-text-field>
                            </v-col>
                            <v-col class="px-3 mb-4" cols="12" md="6">
                              <span class="font-weight-bold px-0 my-3 d-block">
                                {{ $t(`form.phone`) }}
                              </span>
                              <vue-tel-input-vuetify
                                :rules="validationRules.numberRules"
                                :label="$t(`form.phone`)"
                                wrapperClasses="v-text-field v-text-field--single-line v-text-field--solo tel-input mt-0 pt-0"
                              >
                              </vue-tel-input-vuetify>
                            </v-col>
                            <v-col class="px-3 mb-4" cols="12" md="6">
                              <span class="font-weight-bold px-0 my-3 d-block">
                                {{ $t(`tickets.table.thead.th4`) }}
                              </span>
                              <v-text-field
                                class=""
                                height="40"
                                :label="$t(`tickets.table.thead.th4`)"
                                solo
                                :hide-details="false"
                                v-model="newData.Price"
                                :rules="validationRules.textRules"
                              ></v-text-field>
                            </v-col>
                            <v-btn
                              class="primary txtOnPrimary--text text-capitalize font-bold text-h6 my-10 mx-auto pt-3 pb-4 px-10 d-block rounded-pill"
                              height="50"
                              width="200"
                              @click="AddProduct()"
                            >
                              {{ $t(`tickets.table.dialogs.btnSend`) }}
                            </v-btn>
                          </v-row>
                        </v-form>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </div>
              <div class="main-table md:overflow-scroll w-full rounded-lg py-8">
                <table class="w-full txtOnPrimary rounded-lg">
                  <thead>
                    <tr class="h-20">
                      <th class="text-left px-6 primary--text">
                        {{ $t(`tickets.table.thead.th1`) }}
                      </th>
                      <th class="text-left px-3 primary--text">
                        {{ $t(`tickets.table.thead.th2`) }}
                      </th>
                      <th class="text-left px-3 primary--text">
                        {{ $t(`tickets.table.thead.th3`) }}
                      </th>
                      <th class="text-left px-3 primary--text">
                        {{ $t(`tickets.table.thead.th4`) }}
                      </th>
                      <th class="text-right px-6 primary--text">
                        {{ $t(`tickets.table.thead.th5`) }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(ticket, i) in Tickets.slice()"
                      :key="i"
                      class="h-20"
                    >
                      <th class="text-left px-6">
                        <span>{{ $t(ticket.NameClient) }}</span>
                      </th>
                      <td class="text-left px-3">
                        {{ $t(ticket.NameEmployee) }}
                      </td>
                      <td class="text-left px-3">{{ $t(ticket.Phone) }}</td>
                      <td class="text-left px-3">
                        <v-btn
                          :color="
                            ticket.id == 1
                              ? 'success'
                              : ticket.id == 2
                              ? 'primary'
                              : 'warning'
                          "
                        >
                          {{ $t(ticket.Status) }}
                        </v-btn>
                      </td>
                      <td class="text-right px-6">
                        <v-menu bottom left nudge-top="-40" min-width="160">
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn
                              dark
                              icon
                              v-bind="attrs"
                              v-on="on"
                              class="mx-1 my-2 primary"
                            >
                              <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                          </template>

                          <v-list>
                            <v-list>
                              <!-- dialog in tables edit -->
                              <v-dialog
                                v-model="dialog"
                                persistent
                                max-width="800"
                                class="dig"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-list-item
                                    v-bind="attrs"
                                    v-on="on"
                                    @click="sendID()"
                                  >
                                    <v-icon class="mx-1 text-h6">
                                      mdi-grease-pencil
                                    </v-icon>
                                    <v-list-item-title>
                                      {{ $t(`tickets.table.Action.edit`) }}
                                    </v-list-item-title>
                                  </v-list-item>
                                </template>
                                <v-card>
                                  <v-card-actions>
                                    <v-btn
                                      absolute
                                      top
                                      right
                                      class="primary rounded-circle pa-0"
                                      @click="dialog = false"
                                      height="20"
                                      min-width="auto"
                                      width="20"
                                    >
                                      <v-icon
                                        class="text-caption txtOnPrimary--text"
                                        >mdi-close-thick</v-icon
                                      >
                                    </v-btn>
                                  </v-card-actions>
                                  <v-card-title
                                    class="d-flex justify-center text-h5"
                                  >
                                    <h3 class="mt-4">
                                      {{
                                        $t(`tickets.table.dialogs.headingEdit`)
                                      }}
                                    </h3>
                                  </v-card-title>
                                  <v-card-text>
                                    <v-container>
                                      <v-form ref="changeData">
                                        <v-row no-gutters>
                                          <v-col
                                            class="px-3 mb-4"
                                            cols="12"
                                            md="6"
                                          >
                                            <span
                                              class="font-weight-bold px-0 my-3 d-block"
                                            >
                                              {{
                                                $t(
                                                  `tickets.table.dialogs.nameClient`
                                                )
                                              }}
                                            </span>
                                            <v-text-field
                                              class=""
                                              height="40"
                                              :label="
                                                $t(
                                                  `tickets.table.dialogs.nameClient`
                                                )
                                              "
                                              solo
                                              :hide-details="false"
                                              v-model="newData.Name"
                                              :rules="validationRules.textRules"
                                            ></v-text-field>
                                          </v-col>
                                          <v-col
                                            class="px-3 mb-4"
                                            cols="12"
                                            md="6"
                                          >
                                            <span
                                              class="font-weight-bold px-0 my-3 d-block"
                                            >
                                              {{
                                                $t(
                                                  `tickets.table.dialogs.nameEmployee`
                                                )
                                              }}
                                            </span>
                                            <v-text-field
                                              class=""
                                              height="40"
                                              :label="
                                                $t(
                                                  `tickets.table.dialogs.nameEmployee`
                                                )
                                              "
                                              solo
                                              :hide-details="false"
                                              v-model="newData.ParCode"
                                              :rules="validationRules.textRules"
                                            ></v-text-field>
                                          </v-col>
                                          <v-col
                                            class="px-3 mb-4"
                                            cols="12"
                                            md="6"
                                          >
                                            <span
                                              class="font-weight-bold px-0 my-3 d-block"
                                            >
                                              {{ $t(`form.phone`) }}
                                            </span>
                                            <vue-tel-input-vuetify
                                              :rules="
                                                validationRules.numberRules
                                              "
                                              :label="$t(`form.phone`)"
                                              wrapperClasses="v-text-field v-text-field--single-line v-text-field--solo tel-input mt-0 pt-0"
                                            >
                                            </vue-tel-input-vuetify>
                                          </v-col>
                                          <v-col
                                            class="px-3 mb-4"
                                            cols="12"
                                            md="6"
                                          >
                                            <span
                                              class="font-weight-bold px-0 my-3 d-block"
                                            >
                                              {{
                                                $t(`tickets.table.thead.th4`)
                                              }}
                                            </span>
                                            <v-text-field
                                              class=""
                                              height="40"
                                              :label="
                                                $t(`tickets.table.thead.th4`)
                                              "
                                              solo
                                              :hide-details="false"
                                              v-model="newData.Price"
                                              :rules="validationRules.textRules"
                                            ></v-text-field>
                                          </v-col>
                                          <v-btn
                                            class="primary txtOnPrimary--text text-capitalize font-bold text-h6 my-10 mx-auto pt-3 pb-4 px-10 d-block rounded-pill"
                                            height="50"
                                            width="200"
                                          >
                                            {{
                                              $t(
                                                `tickets.table.dialogs.btnSend`
                                              )
                                            }}
                                          </v-btn>
                                        </v-row>
                                      </v-form>
                                    </v-container>
                                  </v-card-text>
                                </v-card>
                              </v-dialog>
                              <!-- dialog in tables Delete -->
                              <v-dialog
                                v-model="dialog2"
                                persistent
                                max-width="560"
                                class="dig"
                              >
                                <template v-slot:activator="{ on, attrs }">
                                  <v-list-item v-bind="attrs" v-on="on">
                                    <v-icon class="mx-1 text-h6">
                                      mdi-delete-forever-outline
                                    </v-icon>
                                    <v-list-item-title>{{
                                      $t(`tickets.table.Action.delete`)
                                    }}</v-list-item-title>
                                  </v-list-item>
                                </template>
                                <v-card>
                                  <v-card-actions>
                                    <v-btn
                                      absolute
                                      top
                                      right
                                      class="primary rounded-circle pa-0"
                                      @click="dialog2 = false"
                                      height="20"
                                      min-width="auto"
                                      width="20"
                                    >
                                      <v-icon
                                        class="text-caption txtOnPrimary--text"
                                        >mdi-close-thick</v-icon
                                      >
                                    </v-btn>
                                  </v-card-actions>
                                  <v-card-title
                                    class="d-flex justify-center text-h5"
                                  >
                                    <h3 class="mt-4">
                                      {{
                                        $t(
                                          `tickets.table.dialogs.headingDelete`
                                        )
                                      }}
                                    </h3>
                                  </v-card-title>
                                  <v-card-text>
                                    <p class="text-center text-base">
                                      {{ $t(`tickets.table.dialogs.text`) }}
                                    </p>
                                    <v-container>
                                      <v-row no-gutters class="justify-center">
                                        <div
                                          class="shadow-none border-blue-600 border-solid border hover:bg-blue-600 hover:text-white text-primary transition-all duration-500 ease-in-out flex flex-none justify-center items-center text-capitalize font-bold text-h6 mx-3 mb-5 rounded-pill w-52 h-12 cursor-pointer"
                                        >
                                          {{
                                            $t(
                                              `tickets.table.dialogs.btnDelete`
                                            )
                                          }}
                                        </div>
                                        <div
                                          @click="dialog2 = false"
                                          class="shadow-none border-blue-600 border-solid border hover:bg-blue-600 hover:text-white text-primary transition-all duration-500 ease-in-out flex flex-none justify-center items-center text-capitalize font-bold text-h6 mx-3 mb-5 rounded-pill w-52 h-12 cursor-pointer"
                                        >
                                          {{
                                            $t(
                                              `tickets.table.dialogs.btnCancle`
                                            )
                                          }}
                                        </div>
                                      </v-row>
                                    </v-container>
                                  </v-card-text>
                                </v-card>
                              </v-dialog>
                            </v-list>
                          </v-list>
                        </v-menu>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="lightPrimary px-6 pb-6">
      <Footerr />
    </div>
  </div>
</template>

<script lang="ts">
import * as models from "@/code/models";
import * as validate from "@/code/validation";
import { Component, Vue } from "vue-property-decorator";
import Nav from "@/components/Nav.vue";
import Footerr from "@/components/Footerr.vue";
import VueTelInputVuetify from "vue-tel-input-vuetify/lib/vue-tel-input-vuetify.vue";

export default Vue.extend({
  name: "home",
  components: {
    Footerr,
    Nav,
    VueTelInputVuetify,
  },
  data: () => ({
    dialog: false,
    dialog2: false,
    dialog3: false,
    validationRules: validate.validation,
    newData: [] as models.ticket[],
    lists: [
      { title: "Edit", iconn: "mdi-grease-pencil" },
      { title: "Delete", iconn: "mdi-delete-forever-outline" },
    ],
    Tickets: [
      {
        NameClient: "tickets.table.tbody.tr1.td1",
        NameEmployee: "tickets.table.tbody.tr1.td2",
        Phone: "tickets.table.tbody.tr1.td3",
        Status: "tickets.table.tbody.tr1.td4.value",
        id: 1,
      },
      {
        NameClient: "tickets.table.tbody.tr2.td1",
        NameEmployee: "tickets.table.tbody.tr2.td2",
        Phone: "tickets.table.tbody.tr2.td3",
        Status: "tickets.table.tbody.tr2.td4.value",
        id: 2,
      },
      {
        NameClient: "tickets.table.tbody.tr3.td1",
        NameEmployee: "tickets.table.tbody.tr3.td2",
        Phone: "tickets.table.tbody.tr3.td3",
        Status: "tickets.table.tbody.tr3.td4.value",
        id: 3,
      },
      {
        NameClient: "tickets.table.tbody.tr4.td1",
        NameEmployee: "tickets.table.tbody.tr4.td2",
        Phone: "tickets.table.tbody.tr4.td3",
        Status: "tickets.table.tbody.tr4.td4.value",
        id: 1,
      },
      {
        NameClient: "tickets.table.tbody.tr5.td1",
        NameEmployee: "tickets.table.tbody.tr5.td2",
        Phone: "tickets.table.tbody.tr5.td3",
        Status: "tickets.table.tbody.tr5.td4.value",
        id: 2,
      },
    ],
  }),
});
</script>

<style lang="scss">
.main-table {
  tbody {
    tr {
      border-top: 1px solid #f0f0f1;
    }
  }
}
</style>
