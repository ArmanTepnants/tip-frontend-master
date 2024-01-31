<template>
  <div style="background-color: #ffffff">
    <v-container style="max-width: 1440px; min-height: 100vh">
      <div class="content-block">
        <v-row justify="center" align="center">
          <v-col cols="12" sm="8" md="6">
            <div class="py-5"></div>

            <div class="text-center block-title">
              {{ $t('create_recipient_account_title') }}
            </div>

            <div class="py-5"></div>

            <SignUpForm
              ref="signUpForm"
              :loading="loading"
              :role="'Recipient'"
              @update-verification-dialog-state="updateVerificationPhoneNumberDialogState"
              @update-loading-state="updateLoadingState"
              @handle-submit-event="handleSubmit"
            />
          </v-col>
        </v-row>

        <VerificationPhoneNumberDialog
          ref="verificationDialog"
          :confirmation-dialog="confirmationDialog"
          :loading="loading"
          @update-verification-dialog-state="updateVerificationPhoneNumberDialogState"
          @update-loading-state="updateLoadingState"
          @handle-code-submit-event="handleCodeSubmit"
        />
      </div>
    </v-container>
  </div>
</template>

<script>
  import VerificationPhoneNumberDialog from "../../components/auth/VerificationPhoneNumberDialog";
  import SignUpForm from "../../components/auth/SignUpForm";

  export default {
     middleware: ['unauthorized'],
   // middleware: ['unauthorized', 'registration'],Arman
    components: {
      SignUpForm,
      VerificationPhoneNumberDialog,
    },
    data() {
      return {
        confirmationDialog: false,
        loading: false,
      }
    },
    methods: {
      updateVerificationPhoneNumberDialogState(value) {
        this.confirmationDialog = value
      },

      updateLoadingState(value) {
        this.loading = value
      },

      async handleCodeSubmit(smsCode) {
        await this.$refs.signUpForm.handleCodeSubmit(smsCode)
      },

      async handleSubmit(phoneNumber) {
        await this.$refs.verificationDialog.handleSubmit(phoneNumber)
      },
    }
  }
</script>

<style scoped>

  .content-block {
    margin: 70px 0;
  }

  .block-title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 40px;
    color: #000000;
  }

  @media screen and (max-width: 425px) {
    .content-block {
      margin: 40px 0;
    }
  }

</style>
