<template>
  <div>
    <GetStarted />

    <HowDoesItWork />

    <HowToPay />

    <WithdrawFunds />

    <WhoNeedsOurService />

    <BusinessOwners />

    <WhereSetUpQRCode />

    <ItsConvenient
      :background="'#F0F2F9'"
      :icons-background="'#F0F2F9'"
      :blocks-background="'#FFFFFF'"/>

    <HowMuchItCosts />

    <OfferToUseApp />

    <ServicePartners v-if="!DISABLE_SERVICE_PARTNERS_SECTION"/>

    <Faq />
  </div>
</template>

<script>
  import GetStarted from "../components/main/GetStarted";
  import HowDoesItWork from "../components/main/HowDoesItWork";
  import HowToPay from "../components/main/HowToPay";
  import WithdrawFunds from "../components/main/WithdrawFunds";
  import WhoNeedsOurService from "../components/main/WhoNeedsOurService";
  import BusinessOwners from "../components/main/BusinessOwners";
  import WhereSetUpQRCode from "../components/main/WhereSetUpQRCode";
  import ItsConvenient from "../components/main/ItsConvenient";
  import HowMuchItCosts from "../components/main/HowMuchItCosts";
  import OfferToUseApp from "../components/main/OfferToUseApp";
  import ServicePartners from "../components/main/ServicePartners";
  import Faq from "../components/main/Faq";

  export default {
    components: {
      Faq,
      ServicePartners,
      OfferToUseApp,
      HowMuchItCosts,
      WhereSetUpQRCode,
      BusinessOwners,
      WhoNeedsOurService,
      WithdrawFunds,
      GetStarted,
      HowDoesItWork,
      HowToPay,
      ItsConvenient,
    },
    middleware: 'unauthorized',
    data() {
      return {
        DISABLE_SERVICE_PARTNERS_SECTION: process.env.DISABLE_SERVICE_PARTNERS_SECTION,
      }
    },
  }
</script>
