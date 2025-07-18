import React, { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { personalInfo, publicUrls } from "../constants";
import Modal from "./Modal";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    message: "",
    buttonText: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("❌ Missing environment variables in Netlify");
      setModalContent({
        title: "Environment Error",
        message:
          "Email service configuration is missing. Please contact site owner.",
        buttonText: "Close",
      });
      setIsModalVisible(true);
      setIsError(true);
      return;
    }

    setLoading(true);

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: personalInfo.fullName,
          from_email: form.email,
          to_email: personalInfo.email,
          message: form.message,
          reply_to: form.email,
        },
        publicKey
      )
      .then(() => {
        setModalContent({
          title: "✅ Message Sent!",
          message: "Thanks for reaching out! I'll reply soon.",
          buttonText: "Close",
        });
        setForm({ name: "", email: "", message: "" });
        setIsError(false);
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setModalContent({
          title: "❌ Failed to Send",
          message: "Something went wrong. Please try again later.",
          buttonText: "Retry",
        });
        setIsError(true);
      })
      .finally(() => {
        setIsModalVisible(true);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="relative flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <div className="flex items-center justify-end space-x-4 absolute top-8 right-4">
            {Object.keys(publicUrls.socialProfiles).map((key) => {
              const profile = publicUrls.socialProfiles[key];
              return (
                <div
                  key={key}
                  onClick={() => window.open(profile.link, "_blank")}
                  className="green-pink-gradient lg:w-10 lg:h-10 h-8 w-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-110"
                >
                  <img
                    src={profile.icon}
                    alt={profile.title}
                    className="w-4/6 h-4/6 object-contain"
                  />
                </div>
              );
            })}
          </div>

          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold w-fit shadow-md shadow-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>

      {isModalVisible && (
        <Modal
          title={modalContent.title}
          message={modalContent.message}
          buttonText={modalContent.buttonText}
          isError={isError}
          setIsModalVisible={() => setIsModalVisible(false)}
        />
      )}
    </>
  );
};

export default SectionWrapper(Contact, "contact");
