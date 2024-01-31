<template>
  <div>
    <v-container style="max-width: 1440px">
      <v-row>
        <v-col cols="12">
          <div class="staff-block">
            <v-row class="mx-0 my-0">
              <v-col cols="12">
                <v-row class="px-8 py-6">
                  <v-col cols="6" class="d-flex px-0 py-0 align-center">
                    <div class="title mr-3 mr-sm-8">
                      Employees
                    </div>
                    <div>
                      <v-btn
                        class="btn"
                        @click="inviteDialog = true"
                        :style="{ backgroundColor: ' #0666EB' }"
                      >
                        <v-img
                          class="mr-1"
                          :src="require('~/static/img/pages/staff/employees/add-employee.png')"
                          height="20"
                          width="20"
                          contain
                        ></v-img>
                        Add Employee
                      </v-btn>
                    </div>
                  </v-col>

                  <v-col cols="6">
                  <!--Todo: future feature Radio buttons-->
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12 px-0 py-0">
                <v-data-table
                  :headers="headers"
                  :items="staff"
                  mobile-breakpoint="0"
                >
                  <template v-slot:item.firstName="{ item }">
                    <div class="d-flex align-center">
                      <div class="d-flex justify-center avatar mr-2">
                        <v-img
                          alt="Employee Avatar"
                          :src="backendUrl + $auth.user.avatar || '/images/defaultAvatar.png'"
                        ></v-img>
                      </div>
                      <div>
                        {{ item.firstName }}
                      </div>
                    </div>
                  </template>

                  <template v-slot:item.balance="{ item }">
                    <div class="font-weight-bold">
                      {{ item.balance }}€
                    </div>
                  </template>

                  <template v-slot:item.status="{ item }">
                    <v-chip
                      v-if="item.active"
                      class="m-0"
                      color="rgba(76, 157, 98, 0.2)"
                      text-color="#4C9D62"
                      border-radius="6px"
                    >
                      <v-icon style="width: 24px; font-size: 18px" class="mr-1">
                        mdi-check
                      </v-icon>
                      Active
                    </v-chip>
                    <v-chip
                      v-if="!item.active"
                      class="m-0"
                      color="#FEF3C7"
                      text-color="#D97706"
                      border-radius="6px"
                    >
                      <v-icon style="width: 24px; font-size: 18px" class="mr-1">
                        mdi-clock
                      </v-icon>
                      Waiting to register
                    </v-chip>
                  </template>
                  <template v-slot:item.downloadQrCode="{ item }">
                    <div
                      @click="copyLinkByEmployee(item)"
                      class="link cursor-block"
                    >
                      Download Qr-code
                    </div>
                  </template>

                  <template v-slot:item.copyLink="{ item }">
                    <div
                      @click="copyLinkByEmployee(item)"
                      class="link cursor-block"
                    >
                      Copy link
                    </div>
                  </template>

                  <template v-slot:item.actions="{ item }">
                    <v-menu transition="slide-y-transition"
                            content-class="v-menu-tools"
                            offset-y>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" >
                          <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                      </template>

                      <v-list class="py-0">
                        <v-list-item class="tools-item" @click="removeEmployee(item)">
                          <v-img
                            class="mr-2"
                            :src="require('~/static/img/pages/staff/employees/delete.png')"
                            height="20"
                            width="20"
                            contain
                          ></v-img>
                          <v-list-item-title style="z-index: 11">Delete</v-list-item-title>
                        </v-list-item>

                        <v-list-item class="tools-item cursor-block">
                          <v-img
                            class="mr-2"
                            :src="require('~/static/img/pages/staff/employees/edit.png')"
                            height="20"
                            width="20"
                            contain
                          ></v-img>
                          <v-list-item-title style="z-index: 11">Edit</v-list-item-title>
                        </v-list-item>

                        <v-divider></v-divider>

                        <v-list-item class="tools-item" @click="handleTransfer(item)">
                          <v-img
                            class="mr-2"
                            :src="require('~/static/img/pages/staff/employees/transfer.png')"
                            height="20"
                            width="20"
                            contain
                          ></v-img>
                          <v-list-item-title style="z-index: 11">Transfer to an employee</v-list-item-title>
                        </v-list-item>

                        <v-list-item class="tools-item cursor-block">
                          <v-img
                            class="mr-2"
                            :src="require('~/static/img/pages/staff/employees/print.png')"
                            height="20"
                            width="20"
                            contain
                          ></v-img>
                          <v-list-item-title style="z-index: 11">Material printing</v-list-item-title>
                        </v-list-item>

                        <v-list-item class="tools-item cursor-block">
                          <v-img
                            class="mr-2"
                            :src="require('~/static/img/pages/staff/employees/re-invite.png')"
                            height="20"
                            width="20"
                            contain
                          ></v-img>
                          <v-list-item-title style="z-index: 11">Re-invite</v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </template>
                </v-data-table>
              </v-col>
            </v-row>
          </div>

          <v-dialog v-model="inviteDialog" persistent>
            <v-card elevation="0">
              <v-form
                v-if="inviteDialog"
                ref="form"
                v-model="valid"
                @submit.prevent="handleSubmit"
                lazy-validation
                class="dialog-form"
              >
                <v-toolbar>
                  <v-toolbar-title class="dialog-header">Invite an employee to the company</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn
                      icon
                      @click="closeDialog"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>

                <div class="content-block-dialog">
                  <v-card-text class="px-0 py-0">
                    <v-radio-group v-model="type" class="d-flex mb-0 mt-6">
                      <v-radio
                        :label="'New by sms'"
                        :value="'new'"
                      ></v-radio>
                      <v-radio
                        :label="'Registered'"
                        :value="'registered'"
                      ></v-radio>
                    </v-radio-group>

                    <div class="mt-3">
                      <div v-if="type === 'new'">
                        <v-text-field
                          v-model="firstName"
                          :rules="firstNameRules"
                          label="First Name"
                          required
                          outlined
                        ></v-text-field>

                        <VuePhoneNumberInput
                          v-model="phone"
                          :translations="{
                            countrySelectorLabel: null,
                            phoneNumberLabel: $t('phone'),
                          }"
                          size="lg"
                          :border-radius="8"
                          default-country-code="ES"
                          :only-countries="availableCountries"
                          show-code-on-list
                          :error="phoneError"
                          v-on:update="checkPhone"
                          required
                          class="mb-2"
                        />
                        <div v-if="phoneError"
                             class="v-messages theme--light error--text mb-2"
                             :style="{ lineHeight: '12px' }">
                          {{ $t('phone_must_be_valid') }}
                        </div>
                        <div v-else
                             class="pt-5"
                             :style="{ paddingTop: '22px !important' }"
                        ></div>
                      </div>

                      <v-text-field
                        v-if="type === 'registered'"
                        v-model="number"
                        :rules="numberRules"
                        label="User Number"
                        class="mb-2"
                        placeholder="###-###-###"
                        required
                        outlined
                        v-mask="'###-###-###'"
                        validate-on-blur
                      ></v-text-field>
                    </div>
                  </v-card-text>

                  <v-card-actions class="d-flex justify-end">
                    <v-btn
                      class="dialog-btn"
                      @click="closeDialog"
                      block
                      :style="{
                        backgroundColor: '#F0F2F9 !important',
                      }"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      class="dialog-btn"
                      :disabled="!valid || loading"
                      @click="validate"
                      type="submit"
                      :style="{
                        backgroundColor: '#0666EB !important',
                        color: '#FFFFFF !important'
                      }"
                      block
                    >
                      Invite
                    </v-btn>
                  </v-card-actions>
                </div>
              </v-form>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import ENV from "~/OLD_env";
  import { mask } from "vue-the-mask";
  import { mapMutations } from "vuex";
  import { availableCountries } from "../../util/helpers";
  import VuePhoneNumberInput from 'vue-phone-number-input';
  import 'vue-phone-number-input/dist/vue-phone-number-input.css';

  export default {
    components: {
      VuePhoneNumberInput,
    },
    layout: 'authorized',
    directives: { mask },
    data() {
      return {
        backendUrl: ENV.backendUrl,
        loading: false,
        inviteDialog: false,
        valid: false,
        type: 'new',
        phone: '',
        firstName: '',
        firstNameRules: [
          v => !!v || 'First name is required',
          v => v?.length >= 3 || 'The first name cannot contain less than 3 characters',
        ],
        number: '',
        numberRules: [
          v => !!v || 'Number is required',
          v => v?.length > 9 || 'Number must be valid',
        ],
        phoneError: false,
        availableCountries,
        headers: [
          {
            text: 'First name',
            value: 'firstName',
          },
          {
            text: 'Last name',
            value: 'lastName',
          },
          {
            text: 'Phone',
            value: 'phone',
          },
          {
            text: 'Balance',
            value: 'balance',
          },
          {
            text: 'Status',
            value: 'status',
            sortable: false
          },
          {
            align: 'end',
            text: '',
            value: 'downloadQrCode',
            sortable: false
          },
          {
            align: 'end',
            text: '',
            value: 'copyLink',
            sortable: false
          },
          {
            align: 'end',
            text: '',
            value: 'actions',
            sortable: false
          },
        ],
        staff: []
      }
    },
    methods: {
      ...mapMutations({
        setSmsTime: 'sms/setSmsTime',
        setErrors: 'error/setErrors',
        addError: 'error/addError',
      }),
      checkPhone(item) {
        this.phoneError = !item.isValid && !!item.phoneNumber;
        this.phone = item.formattedNumber;
      },
      handleTransfer(item) {
        // this.$router.push(this.localePath('/transfers/between/' + item.number));
        this.$router.push(this.localePath('/transfer'));
      },
      handleSubmit() {
        if (this.type === 'registered') {
          this.addEmployee();
        }
        if (this.type === 'new') {
          if (!this.phone || this.phoneError) {
            this.phoneError = true;
            return;
          }

          this.inviteEmployee();
        }
      },
      closeDialog() {
        this.inviteDialog = false;
        this.phone = '';
        this.number = '';
        this.firstName = '';
        this.phoneError = false;
        this.type = 'new'
      },
      validate () {
        this.$refs.form.validate()
      },
      async addEmployee() {
        await this.$axios.$post(`${ENV.backendUrl}/add-employee`, {
          number: this.$auth.user.number,
          employeeNumber: this.number,
        })
          .then((result) => {
            this.loading = false;
            if (result.success) {
              this.$auth.fetchUser();
              this.getStaff();
              this.closeDialog();
              alert(result.message);
            } else {
              if (result.errors) {
                this.setErrors(result.errors);
              }
              if (result.message) {
                this.addError(result.message);
              }
              console.error(result);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.addError(error);
            console.error(error);
          });
      },
      async removeEmployee(item) {
        await this.$axios.$post(`${ENV.backendUrl}/remove-employee`, {
          number: this.$auth.user.number,
          employeeNumber: item.number,
        })
          .then((result) => {
            this.loading = false;
            if (result.success) {
              this.$auth.fetchUser();
              this.getStaff();
              alert(result.message);
            } else {
              if (result.errors) {
                this.setErrors(result.errors);
              }
              if (result.message) {
                this.addError(result.message);
              }
              console.error(result);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.addError(error);
            console.error(error);
          });
      },
      async inviteEmployee() {
        await this.$axios.$post(`${ENV.backendUrl}/notification/invite-employee`, {
          number: this.$auth.user.number,
          phone: this.phone,
          firstName: this.firstName,
        })
          .then((result) => {
            this.loading = false;
            if (result.success) {
              this.$auth.fetchUser();
              this.getStaff();
              this.closeDialog();
              alert(result.message);
            } else {
              if (result.errors) {
                this.setErrors(result.errors);
              }
              if (result.message) {
                this.addError(result.message);
              }
              console.error(result);
            }
          })
          .catch((error) => {
            this.loading = false;
            this.addError(error);
            console.error(error);
          });
      },
      async getStaff() {
        this.loading = true;
        await this.$axios.$post(`${ENV.backendUrl}/get-staff`, {
          number: this.$auth.user.number
        })
          .then((result) => {
            this.loading = false;
            this.staff = result.staff;
          })
          .catch((error) => {
            this.loading = false;
            console.error(error)
          });
      },

      copyLinkByEmployee(employee) {
        console.log('Copy link by employee: ' + employee)
      },
      downloadQrCodeByEmployee(employee) {
        console.log('Download qr code by employee: ' + employee)
      }
    },
    mounted() {
      this.getStaff();
    }
  }
</script>

<style scoped>
  .staff-block {
    background: #FFFFFF;
    border-radius: 12px;
  }

  .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    border-radius: 8px;
    width: 140px;
    padding: 0 12px;
    text-transform: none;
    box-shadow: unset;
    letter-spacing: unset;
  }

  /* Table */

  .v-data-table {
    box-shadow: unset;
    border-radius: 12px;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper .v-data-table-header {
    background-color: #F5F8FC;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper table {
    min-width: 575px;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper > table > thead > tr > th {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #64748B;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper > table > thead > tr > th:first-child,
  .theme--light.v-data-table >>> .v-data-table__wrapper > table > tbody > tr > td:first-child {
    padding-left: 32px;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper > table > thead > tr > th:last-child,
  .theme--light.v-data-table >>> .v-data-table__wrapper > table > tbody > tr > td:last-child {
    padding-right: 32px;
  }

  .theme--light.v-data-table >>> .v-data-footer {
    padding: 0 32px;
  }

  .theme--light.v-data-table >>> .v-data-table__wrapper table {
    min-width: 980px;
  }

  .v-chip {
    border-radius: 8px;
    padding: 0 8px 0 4px;
  }

  .avatar {
    width: 32px;
    height: 32px;
  }

  .avatar >>> .v-image__image {
    border-radius: 50%;
  }

  .v-menu-tools {
    box-sizing: border-box;
    padding: 4px;
    gap: 2px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    box-shadow: 0 10px 22px rgba(45, 77, 108, 0.15);
    border-radius: 8px;
  }

  .tools-item:before {
    background-color: #F0F2F9;
    border-radius: 8px;
  }

  .tools-item:hover::before {
    opacity: 1 !important;
  }

  /* end */

  .link {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #0666EB;
  }

  .cursor-block {
    cursor: not-allowed;
  }

  /*  Dialog styles*/
  >>> .v-dialog {
    background: #FFFFFF;
    box-shadow: 0 20px 50px rgba(18, 27, 33, 0.2);
    border-radius: 20px;
    max-width: 500px;
    padding: 16px 32px;
  }

  .dialog-header {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #475569;
  }

  .dialog-form >>> .v-sheet {
    box-shadow: unset;
    height: auto !important;
    /*border-bottom: 1px solid rgba(148,163,184, 0.4);*/
  }

  .dialog-form >>> .v-toolbar__content {
    padding: 0;
    height: auto !important;
  }

  .dialog-form >>> .v-toolbar__items {
    display: flex;
    align-items: center;
  }

  .dialog-form >>> .v-toolbar__items .v-btn {
    width: 24px;
    height: 24px !important;
  }

  .dialog-form .dialog-btn {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
    text-transform: none;
    box-shadow: unset;
    width: 100px;
    max-width: 100px;
    height: 40px !important;
    min-width: unset !important;
    letter-spacing: unset;
  }

  .content-block-dialog >>> .v-input__slot {
    margin-bottom: 0;
  }

  .content-block-dialog >>> .v-input--radio-group__input {
    flex-direction: row;
  }

  .content-block-dialog >>> .v-radio {
    margin-bottom: 0 !important;
  }

  .content-block-dialog >>> .v-input--radio-group--column .v-radio:not(:last-child) {
    margin-right: 40px;
  }

  .content-block-dialog >>> .country-selector {
    height: 44px;
    min-height: 44px;
  }

  .content-block-dialog >>> .country-selector__country-flag {
    top: 18px !important;
  }

  .content-block-dialog >>> .select-country-container {
    flex: 0 0 100px !important;
    width: 100px !important;
    min-width: 100px !important;
    max-width: 100px !important;
  }

  .content-block-dialog >>> .country-selector__input {
    padding-left: 38px !important;
    padding-top: unset !important;
  }

  .content-block-dialog >>> .input-tel__input {
    padding-top: unset !important;
  }

  .content-block-dialog >>> .input-tel__label {
    top: 0 !important;
    right: 10px !important;
    font-size: 10px !important;
    left: unset !important;
  }

  .content-block-dialog >>> .v-input__slot {
    height: 48px;
    border-radius: 8px;
    min-height: 48px;
  }

  .content-block-dialog >>> .v-text-field__details {
    padding-left: unset;
  }

  .content-block-dialog >>> .v-text-field--outlined fieldset {
    border-color: #ccc;
  }

  .content-block-dialog >>> .v-text-field--outlined fieldset:hover {
    border-color: #1e90ff;
  }

  .content-block-dialog >>> .v-text-field__slot .v-label {
    top: 14px !important;
  }

  .content-block-dialog >>> .v-input__append-inner {
    margin-top: 12px !important;
  }

  .content-block-dialog >>> .v-card__actions {
    padding: 0;
  }

  /*  Dialog styles end*/

  @media screen and (max-width: 425px) {
    .content-block-dialog >>> .v-input--radio-group__input {
      flex-direction: column;
      gap: 16px;
    }
  }
</style>
