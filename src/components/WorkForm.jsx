import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const WorkForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // null | true | false

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");
    setIsSuccess(null);

    emailjs
      .sendForm(
        "service_qvgy8af",
        "template_lpclduk",
        e.target,
        "D2IUmyjQrmBIv9ari"
      )
      .then(
        (result) => {
          setIsLoading(false);
          setIsSuccess(true);
          setStatusMessage("🎉 Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          setIsLoading(false);
          setIsSuccess(false);
          setStatusMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="w-full max-w-[800px] px-4 md:px-8 mb-10 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-2 mb-8 text-center"
      >
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight">
          LET'S WORK
        </h1>
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-gray-500">
          TOGETHER
        </p>
      </motion.div>

      <form onSubmit={sendEmail} className="space-y-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 flex flex-col gap-2">
            <Label htmlFor="name" className="text-xl">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your Name"
              className="border-none bg-zinc-900 text-white"
              required
            />
          </div>

          <div className="space-y-2 flex flex-col gap-2">
            <Label htmlFor="email" className="text-xl">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Your@email.com"
              className="border-none bg-zinc-900 text-white"
              required
            />
          </div>
        </div>

        <div className="space-y-2 flex flex-col gap-2">
          <Label htmlFor="message" className="text-xl">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Message"
            className="min-h-[150px] border-none bg-zinc-900 text-white"
            required
          />
        </div>

        <div className="space-y-4">
          <Button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>

          {statusMessage && (
            <p
              className={`text-center text-lg font-medium ${
                isSuccess ? "text-green-400" : "text-red-400"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default WorkForm;
