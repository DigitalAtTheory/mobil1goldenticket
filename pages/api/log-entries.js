import axios from "axios";

export default async function logEntries(req, res) {
  const { first_name, last_name, phone, email, zip_code, privacy_policy } =
    req.body;

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

  console.log(req.body);

  res.send("You logged things");
}
