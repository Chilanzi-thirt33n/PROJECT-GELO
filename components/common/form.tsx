"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Define types for the form data and API response
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ApiResponse {
  error?: string;
}

const MyForm_Api = process.env.NEXT_PUBLIC_EMAIL_ENDPOINT || "";
const WebsiteID = process.env.NEXT_PUBLIC_WEBSITE_ALLOWED || "";
const WebsiteAPI = process.env.NEXT_PUBLIC_WEBSITE_ALLOWED_API || "";

const MyForm = () => {
  // State to manage form input values
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Status message state
  const [status, setStatus] = useState<string | null>(null);
  const { toast } = useToast();

  // Show toast whenever status updates
  useEffect(() => {
    if (status) {
      toast({
        title: "Notification",
        description: status || "Something went wrong.",
      });
    }
  }, [status, toast]);

  // Handles changes to form inputs, including select fields
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
  ) => {
    const value = typeof e === "string" ? e : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [typeof e === "string" ? "subject" : e.target.name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setStatus("Sending..."); // Indicate the sending process

    try {
      // Send form data to the API
      const response = await fetch(MyForm_Api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          websiteID: WebsiteID, // Identifier for the website
          apiKey: WebsiteAPI, // API key for authentication
          senderName: formData.name,
          senderEmail: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const responseData: ApiResponse = await response.json(); // Parse response

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(
          responseData.error || "Failed to send the message. Please try again.",
        );
      }
    } catch (error: unknown) {
      console.error("Error occurred:", error);
      setStatus(`An error occurred: ${(error as Error).message}`);
    }
  };

  return (
    <Card className="bg-transparent shadow-none border-0 ">
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 p-4"
        >
          <div className="w-full grid grid-cols-1 gap-6 justify-evenly items-start">
            <span className="w-full">
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="William Simpson"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </span>

            <span className="w-full">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="williamsimpson@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </span>

            <span className="w-full">
              <Label>Select your subject</Label>
              <Select
                name="inquiryType"
                value={formData.subject}
                onValueChange={handleChange}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="demo-booking">Book a Demo</SelectItem>
                  <SelectItem value="pricing-inquiry">
                    Pricing Inquiry
                  </SelectItem>
                  <SelectItem value="feature-request">
                    Feature Request
                  </SelectItem>
                  <SelectItem value="technical-support">
                    Technical Support
                  </SelectItem>
                  <SelectItem value="partnership">
                    Partnership or Collaboration
                  </SelectItem>
                  <SelectItem value="billing">Billing & Payments</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </span>

            <span className="w-full">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Your message will be copied to the support team.
              </p>
            </span>
          </div>

          <Button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MyForm;
