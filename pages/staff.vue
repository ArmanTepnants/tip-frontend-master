<template>
  <div>
    <GetStarted
      :image-path="'pages/forStaff/getStarted/get-started-for-staff'"
      :title-key="'accept_tips_from_the_card'"
      :subtitle-key="'accept_tips_from_the_card_subtitle_for_staff'"/>

    <HowDoesItWork />

    <HowToPay />

    <WithdrawFunds />

    <ItsConvenient
      :blocks-background="'#FFFFFF'"
      :icons-background="'#F0F2F9'"/>

    <OfferToUseApp />
  </div>
</template>

<script>
  import GetStarted from "../components/main/GetStarted";
  import HowDoesItWork from "../components/main/HowDoesItWork";
  import HowToPay from "../components/main/HowToPay";
  import WithdrawFunds from "../components/main/WithdrawFunds";
  import ItsConvenient from "../components/main/ItsConvenient";
  import OfferToUseApp from "../components/main/OfferToUseApp";

  export default {
    components: {
      GetStarted,
      HowDoesItWork,
      HowToPay,
      WithdrawFunds,
      ItsConvenient,
      OfferToUseApp,
    },
  }
</script>
