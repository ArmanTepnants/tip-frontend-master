<template>
  <div>
    <RegistrationStep />

    <QrCodeStep />

    <PaymentStep />

    <WithdrawMoneyStep />
  </div>
</template>

<script>
  import WithdrawMoneyStep from "./WithdrawMoneyStep";
  import PaymentStep from "./PaymentStep";
  import QrCodeStep from "./QrCodeStep";
  import RegistrationStep from "./RegistrationStep";

  export default {
    name: "Instructions",
    components: {
      WithdrawMoneyStep,
      PaymentStep,
      QrCodeStep,
      RegistrationStep,
    }
  }
</script>
