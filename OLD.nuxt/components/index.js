export { default as AuthorizedNav } from '../../components/AuthorizedNav.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as Nav } from '../../components/Nav.vue'
export { default as ProfileBar } from '../../components/ProfileBar.vue'
export { default as WhatOurServiceDo } from '../../components/WhatOurServiceDo.vue'
export { default as AuthChangePasswordDialog } from '../../components/auth/ChangePasswordDialog.vue'
export { default as AuthSignUpForm } from '../../components/auth/SignUpForm.vue'
export { default as AuthVerificationPhoneNumberDialog } from '../../components/auth/VerificationPhoneNumberDialog.vue'
export { default as MainBusinessOwners } from '../../components/main/BusinessOwners.vue'
export { default as MainFaq } from '../../components/main/Faq.vue'
export { default as MainGetStarted } from '../../components/main/GetStarted.vue'
export { default as MainHowDoesItWork } from '../../components/main/HowDoesItWork.vue'
export { default as MainHowMuchItCosts } from '../../components/main/HowMuchItCosts.vue'
export { default as MainHowToPay } from '../../components/main/HowToPay.vue'
export { default as MainItsConvenient } from '../../components/main/ItsConvenient.vue'
export { default as MainOfferToUseApp } from '../../components/main/OfferToUseApp.vue'
export { default as MainServicePartners } from '../../components/main/ServicePartners.vue'
export { default as MainWhereSetUpQRCode } from '../../components/main/WhereSetUpQRCode.vue'
export { default as MainWhoNeedsOurService } from '../../components/main/WhoNeedsOurService.vue'
export { default as MainWithdrawFunds } from '../../components/main/WithdrawFunds.vue'
export { default as AboutUsForWhomService } from '../../components/aboutUs/ForWhomService.vue'
export { default as AboutUsJoinOurService } from '../../components/aboutUs/JoinOurService.vue'
export { default as AboutUsOurVisionAndMission } from '../../components/aboutUs/OurVisionAndMission.vue'
export { default as AboutUsWhyUseOurService } from '../../components/aboutUs/WhyUseOurService.vue'
export { default as HowToStartInstructions } from '../../components/howToStart/Instructions.vue'
export { default as HowToStartPaymentStep } from '../../components/howToStart/PaymentStep.vue'
export { default as HowToStartQrCodeStep } from '../../components/howToStart/QrCodeStep.vue'
export { default as HowToStartRegistrationStep } from '../../components/howToStart/RegistrationStep.vue'
export { default as HowToStartWithdrawMoneyStep } from '../../components/howToStart/WithdrawMoneyStep.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
