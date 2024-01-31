<template>
  <div>
    <GetStarted
      :background="'#F0F2F9'"
      :image-path="'pages/howToStart/how-to-start-get-started'"
      :title-key="'how_to_start_title'"
      :subtitle-key="'how_to_start_subtitle'"/>

    <Instructions />

    <ItsConvenient
      :blocks-background="'#FFFFFF'"
      :icons-background="'#F0F2F9'"/>

    <HowMuchItCosts :background="'#F0F2F9'"/>

    <OfferToUseApp :background="'#FFFFFF'"/>
  </div>
</template>

<script>
  import OfferToUseApp from "../components/main/OfferToUseApp";
  import HowMuchItCosts from "../components/main/HowMuchItCosts";
  import ItsConvenient from "../components/main/ItsConvenient";
  import GetStarted from "../components/main/GetStarted";
  import Instructions from "../components/howToStart/Instructions";

  export default {
    middleware: 'unauthorized',
    components: {
      Instructions,
      HowMuchItCosts,
      OfferToUseApp,
      ItsConvenient,
      GetStarted
    }
  }
</script>
