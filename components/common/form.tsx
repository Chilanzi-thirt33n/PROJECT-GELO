"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  error?: string;
}

const MyForm_Api = process.env.NEXT_PUBLIC_EMAIL_ENDPOINT || "";
const WebsiteID = process.env.NEXT_PUBLIC_WEBSITE_ALLOWED || "";
const WebsiteAPI = process.env.NEXT_PUBLIC_WEBSITE_ALLOWED_API || "";

const MyForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (status) {
      toast("Notification", {
        description: status,
      });
    }
  }, [status]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(MyForm_Api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          websiteID: WebsiteID,
          apiKey: WebsiteAPI,
          senderName: formData.name,
          senderEmail: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result: ApiResponse = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus(result.error || "Failed to send message.");
      }
    } catch (error) {
      setStatus(`An error occurred: ${(error as Error).message}`);
    }
  };

  return (
    <Card className="bg-transparent shadow-none border-0">
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-4 p-4"
        >
          <div className="w-full grid grid-cols-1 gap-6">
            <span className="w-full">
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="William Simpson"
                value={formData.name}
                onChange={handleInputChange}
                required
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
                onChange={handleInputChange}
                required
              />
            </span>

            <span className="w-full">
              <Label htmlFor="subject">Select Your Subject</Label>
              <Select
                value={formData.subject}
                onValueChange={handleSelectChange}
                required
              >
                <SelectTrigger id="subject">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="place-order">Place an Order</SelectItem>
                  <SelectItem value="product-inquiry">
                    Product Inquiry
                  </SelectItem>
                  <SelectItem value="custom-cake-request">
                    Custom Cake or Pastry Request
                  </SelectItem>
                  <SelectItem value="bulk-order">
                    Bulk or Wholesale Orders
                  </SelectItem>
                  <SelectItem value="pricing">
                    Pricing & Availability
                  </SelectItem>
                  <SelectItem value="delivery">
                    Delivery or Pickup Info
                  </SelectItem>
                  <SelectItem value="collaboration">
                    Collaboration or Reseller
                  </SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </span>

            <span className="w-full">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <p className="text-sm text-muted-foreground mt-2">
                Your message will be copied to the support team.
              </p>
            </span>
          </div>

          <Button
            type="submit"
            className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default MyForm;
