import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
    }
    return stripePromise;
};
export default getStripe;


// import { loadStripe } from '@stripe/stripe-js';
//
// export default async ({ app }, inject) => {
//     const stripe = await loadStripe(process.env.STRIPE_PUBLISHABLE_KEY);
//     inject('stripe', stripe);
// };