import mailchimp from "@mailchimp/mailchimp_marketing";

export default async function checkMailchimp(req, res) {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });

  const response = await mailchimp.ping.get();
  console.log(response);
}
