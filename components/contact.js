import React, { useState } from "react";
import { PhoneIcon, MailIcon } from "@heroicons/react/solid";
import DownloadResume from "./downloadResume";

export default function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
    console.log(mail);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");
    const data = {
      name,
      mail,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setName("");
        setMail("");
        setMessage("");
      }
    });
  };

  return (
    <container
      className="container mt-52 md:mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
      id="contact"
    >
      <section className="w-full  ">
        <h2 id="hire" className="text-white text-5xl md:text-6xl">
          Hire me
        </h2>
        <p className="mt-20 text-white">
          Feel free to contact me any time, through any method below.
        </p>
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <div className="space-y-12">
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Name
              </label>
              <input
                className="w-full border border-input-border bg-input px-4 py-4"
                value={name}
                onChange={handleName}
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4 "
                value={mail}
                onChange={handleMail}
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Message
              </label>
              <textarea
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
                value={message}
                onChange={handleMessage}
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="text-white px-8 py-4 font-bold mt-12 flex item-center space-x-3 bg-indigo-600 hover:bg-indigo-700  rounded-md "
            >
              Send it!
            </button>
          </div>

          <div className="mt-12 text-white ">
            <p className="flex">
              <PhoneIcon className="h-8 w-8 self-baseline text-indigo-500 mr-5  -rotate-6" />
              +33 679 682 928
            </p>
            <p className="flex mt-3">
              <MailIcon className="h-8 w-8 self-baseline mr-5 text-indigo-500 -rotate-6" />
              <a href="mailto:contact@glenkurt.online" className="underline ">
                contact@glenkurt.online
              </a>
            </p>
            <div className="flex mt-20 items-center  space-x-6">
              <a
                href="https://www.linkedin.com/in/thibaut-g-546631239/"
                target="_blank"
              >
                <img src="/logo/icons8-linkedin.svg" />
              </a>

              <a href="https://twitter.com/Glenkurt_" target="_blank">
                <img src="/logo/icons8-twitter.svg" />
              </a>
            </div>
            <DownloadResume />
          </div>
        </div>
      </section>
    </container>
  );
}
