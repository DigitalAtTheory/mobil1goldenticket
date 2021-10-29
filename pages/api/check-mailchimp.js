import mailchimp from "@mailchimp/mailchimp_marketing";
import md5 from "md5";

export default async function checkMailchimp(req, res) {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });

  const email = "josh.suson@gmail.com";
  const subscriberHash = md5(email.toLowerCase());

  let response;
  let currentUser;

  try {
    response = await mailchimp.lists.getListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      subscriberHash
    );
    console.log(response.id);
    currentUser = true;
  } catch {
    currentUser = false;
  }

  currentUser
    ? console.log("Add to customer journey")
    : console.log("Add to contacts first");
  res.send("This worked");
}
