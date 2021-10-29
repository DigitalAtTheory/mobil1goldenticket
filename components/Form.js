import { useState } from "react";
import styles from "../styles/Home.module.scss";
import axios from "axios";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const handleInput = (e) => {
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "zipCode":
        setZip(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleOptin = () => {
    privacyPolicy ? setPrivacyPolicy(false) : setPrivacyPolicy(true);
  };

  const handleSubmit = (e) => {
    const formData = {
      first_name: firstName,
      last_name: lastName,
      phone,
      email,
      zip_code: zip,
      privacy_policy: privacyPolicy,
    };

    axios.post("/api/log-entries", formData);
  };

  return (
    <div>
      <div className="flex flex-col gap-3 px-6 mt-12">
        {/* First Input */}
        <label htmlFor="firstName" className="sr-only">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleInput}
          className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-800"
          placeholder="First Name"
        />
        {/* End First Input  */}
        {/* Second Input */}
        <label htmlFor="lastName" className="sr-only">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleInput}
          className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-800"
          placeholder="Last Name"
        />
        {/* End Second Input  */}
        {/* Third Input */}
        <label htmlFor="phone" className="sr-only">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleInput}
          className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-800"
          placeholder="Phone Number"
        />
        {/* End Third Input  */}
        {/* Fourth Input */}
        <label htmlFor="email" className="sr-only">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleInput}
          className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-800"
          placeholder="Email Address"
        />
        {/* End Fourth Input  */}
        {/* Fifth Input */}
        <label htmlFor="zipCode" className="sr-only">
          Zip Code
        </label>
        <input
          type="text"
          name="zipCode"
          id="zipCode"
          value={zip}
          onChange={handleInput}
          className="shadow-sm focus:ring-reflex-500 focus:border-reflex-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-800"
          placeholder="Zip Code"
        />
        {/* End Fifth Input  */}
        {/* Optin */}
        <div className="relative flex items-start text-left">
          <div className="flex items-center h-5">
            <input
              id="privacyPolicy"
              name="privacyPolicy"
              type="checkbox"
              checked={privacyPolicy}
              onChange={handleOptin}
              className="focus:ring-reflex-500 h-4 w-4 text-reflex-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="privacyPolicy" className="text-gray-50 font-light">
              I want to subscribe to get future offers and news from ExxonMobil,
              and I agree for my submitted information to be used in accordance
              with the{" "}
              <a
                className="underline text-reflex-600"
                href="https://corporate.exxonmobil.com/Global-legal-pages/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                ExxonMobil privacy policy.
              </a>
            </label>
          </div>
        </div>
        {/* End Optin */}
      </div>
      <div
        className={`${styles.buttonContainer} text-center my-6 grid place-content-center`}
      >
        <div className="py-24">
          <button
            onClick={handleSubmit}
            className="bg-reflex-600 text-white w-3/4 lg:w-1/2 mx-auto mb-10 py-3 rounded shadow-xl"
          >
            Submit
          </button>
          <p className="font-light text-xs px-8">
            *Event is Thursday, November 4.
            <br />
            Winners will be notified Nov. 3 via text and email, with only one
            entry per email address.
          </p>
        </div>
      </div>
    </div>
  );
}
