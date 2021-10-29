import axios from "axios";
import mailchimp from "@mailchimp/mailchimp_marketing";

export default async function logEntries(req, res) {
  const { first_name, last_name, phone, email, zip_code, privacy_policy } =
    req.body;

  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });

  await axios
    .post(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE}/Entries`,
      {
        fields: {
          first_name,
          last_name,
          phone,
          email,
          zip_code,
          privacy_policy,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((data) => console.log(data.data.id))
    .catch((err) => console.error(err));

  const response = await mailchimp.customerJourneys.trigger(
    process.env.MAILCHIMP_JOURNEY_ID,
    process.env.MAILCHIMP_STEP_ID,
    {
      email_address: email,
    }
  );

  console.log(response);

  console.log(req.body);

  res.send("You logged things");
}
