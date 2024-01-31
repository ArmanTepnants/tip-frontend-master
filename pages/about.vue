<template>
  <div>
    <GetStarted
      :hide-image="true"
      :hide-applications-links="true"
      :title-key="'about_company'"
      :subtitle-key="'about_company_p_1'"/>

    <ForWhomService />

    <OurVisionAndMission />

    <WhyUseOurService />

    <JoinOurService />
  </div>
</template>

<script>
  import GetStarted from "../components/main/GetStarted";
  import ForWhomService from "../components/aboutUs/ForWhomService";
  import OurVisionAndMission from "../components/aboutUs/OurVisionAndMission";
  import WhyUseOurService from "../components/aboutUs/WhyUseOurService";
  import JoinOurService from "../components/aboutUs/JoinOurService";

  export default {
    middleware: 'unauthorized',
    components: {
      JoinOurService,
      WhyUseOurService,
      OurVisionAndMission,
      ForWhomService,
      GetStarted
    }
  }
</script>
