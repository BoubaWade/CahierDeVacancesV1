import { supabase } from "../supabase/config";
const SECRET_KEY = import.meta.env.VITE_STRIPE_SECRET_KEY;
const stripeURL = "https://api.stripe.com/v1";

export const createStripeCustomer = async (email: string) => {
  const response = await fetch(`${stripeURL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${SECRET_KEY}`,
    },
    body: new URLSearchParams({ email }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error.message);
  }

  await supabase
    .from("stripe_customers")
    .insert([{ email, stripe_customer_id: data.id }]);

  return data.id;
};

export const createSetupIntent = async (customerId: string) => {
  const response = await fetch(`${stripeURL}/setup_intents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${SECRET_KEY}`,
    },
    body: new URLSearchParams({
      customer: customerId,
    }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error.message);

  return data.client_secret;
};

export const createSubscription = async (
  customerId: string,
  priceId: string,
  paymentMethodId: any
) => {
  const response = await fetch(`${stripeURL}/subscriptions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${SECRET_KEY}`,
    },
    body: new URLSearchParams({
      customer: customerId,
      "items[0][price]": priceId,
      default_payment_method: paymentMethodId,
    }),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.error.message);

  return data.id;
};

export const saveSubscription = async (
  userId: string,
  subscriptionId: string
) => {
  const { data, error } = await supabase
    .from("subscriptions")
    .insert([
      { user_id: userId, subscription_id: subscriptionId, status: "active" },
    ]);

  if (error) throw error;

  return data;
};

export const checkSubscriptionStatus = async (userId: string) => {
  const { data, error } = await supabase
    .from("subscriptions")
    .select("subscription_id, status")
    .eq("user_id", userId)
    .single();

  if (error) throw error;

  return data.status === "active";
};

// const userId = supabase.auth.getUser().id;
// const hasAccess = await checkSubscriptionStatus(userId);
// if (!hasAccess) {
//   // Rediriger ou afficher un message d'erreur
// }
