<template>
  <div>
    <GetStarted
      :image-path="'pages/forBusiness/get-started-for-business'"
      :title-key="'for_business_title'"
      :subtitle-key="'for_business_subtitle'"/>

    <WhatOurServiceDo />

    <HowDoesItWork
      :blocks-background="'#F0F2F9'"
      :background="'#FFFFFF'" />

    <HowToPay
      :block-background="'#FFFFFF'"
      :background="'#F0F2F9'"  />

    <ItsConvenient />

    <WithdrawFunds />

    <HowMuchItCosts />

    <OfferToUseApp />
  </div>
</template>

<script>
  import WhatOurServiceDo from "../components/WhatOurServiceDo";
  import OfferToUseApp from "../components/main/OfferToUseApp";
  import HowMuchItCosts from "../components/main/HowMuchItCosts";
  import WithdrawFunds from "../components/main/WithdrawFunds";
  import ItsConvenient from "../components/main/ItsConvenient";
  import HowDoesItWork from "../components/main/HowDoesItWork";
  import HowToPay from "../components/main/HowToPay";
  import GetStarted from "../components/main/GetStarted";

  export default {
    components: {
      WhatOurServiceDo,
      OfferToUseApp,
      HowMuchItCosts,
      WithdrawFunds,
      ItsConvenient,
      HowToPay,
      GetStarted,
      HowDoesItWork
    }
  }
</script>
