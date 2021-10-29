import React from "react";

export default function ThankYouContent() {
  return (
    <div className="text-center px-4">
      <h2 className="text-3xl">{`You're In!`}</h2>
      <p className="font-light pt-2">
        {`You have entered for a chance to win a Golden Ticket for two to the
        Mobil 1™ x Count's Kustoms VIP event on Thursday, November 4. If your
        entry is selected to be one of our exclusive winners, you will be
        notified by text and email by November 3.`}
      </p>
      <h3 className="text-2xl mt-6 mb-8">Ride on. And on.</h3>
      <a
        href="https://www.mobil.com/en/lubricants/for-personal-vehicles/motorcycles"
        className="bg-reflex-600 text-white w-3/4 lg:w-1/2 mx-auto mb-10 py-3 rounded shadow-xl block text-center"
      >
        Experience the difference
      </a>
    </div>
  );
}
