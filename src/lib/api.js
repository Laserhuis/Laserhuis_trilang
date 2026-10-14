export async function subscribeNewsletter(email) {
  if (!email || !email.includes("@")) {
    throw new Error("Invalid email address");
  }
  return { success: true, message: "Thank you for subscribing!" };
}
