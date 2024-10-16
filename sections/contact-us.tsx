"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { MotionDiv } from "@/components/motion-div";

export const ContactUs = () => {
  const [date, setDate] = useState<Date>();
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);
  const [captcha, setCaptcha] = useState<string | null>();

  const recaptchaRef = useRef(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptcha(token);
  };

  if (state.succeeded) {
    return (
      <div className="container w-96">
        <p className="w-full text-center border border-mainColor p-4 rounded-md">
          Thank you for your inquiry!
        </p>
      </div>
    );
  }

  return (
    <MotionDiv
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 1 }}
    >
      <Card
        id="contact-us"
        className="max-w-2xl my-20 mx-4 md:mx-auto lg:mx-auto scroll-mt-24 bg-secondMainColor border-mainColor/30"
      >
        <CardHeader>
          <CardTitle className="text-xl my-5 lg:text-2xl text-center text-mainColor">
            IVF Concierge Service Inquiry
          </CardTitle>
          <CardDescription>
            Please fill out the form below to get started with our IVF concierge
            service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Full Name *</Label>
                <Input
                  id="name"
                  className="bg-secondMainColor border-mainColor/30"
                  placeholder="Jane Doe"
                  name="name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="partner-name">Partner&apos;s Full Name</Label>
                <Input
                  id="partner-name"
                  placeholder="John Doe"
                  className="bg-secondMainColor border-mainColor/30"
                  name="partner-name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  className="bg-secondMainColor border-mainColor/30"
                  name="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-secondMainColor border-mainColor/30"
                  name="phone"
                  required
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Full Address *</Label>
              <Input
                id="address"
                placeholder="123 Main St, City, State, ZIP"
                className="bg-secondMainColor border-mainColor/30"
                name="address"
                required
              />
              <ValidationError
                prefix="Address"
                field="address"
                errors={state.errors}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="med-start-date">Medication Start Date</Label>
                <Popover>
                  <PopoverTrigger
                    className="flex bg-secondMainColor border-mainColor/30"
                    asChild
                  >
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="medications">Medication Name(s)</Label>
                <Input
                  id="medications"
                  placeholder="e.g., Gonal-F, Menopur, Cetrotide"
                  className="bg-secondMainColor border-mainColor/30"
                  name="medications"
                />
                <ValidationError
                  prefix="Medications"
                  field="medications"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="clinic">Fertility Clinic / MD / Nurse *</Label>
                <Input
                  id="clinic"
                  placeholder="Dr. Smith at XYZ Fertility Clinic"
                  className="bg-secondMainColor border-mainColor/30"
                  name="clinic"
                  required
                />
                <ValidationError
                  prefix="Clinic"
                  field="clinic"
                  errors={state.errors}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="injection-time">Preferred Injection Time</Label>
                <Input
                  id="injection-time"
                  type="time"
                  name="injection-time"
                  className="bg-secondMainColor border-mainColor/30"
                />
                <ValidationError
                  prefix="Injection Time"
                  field="injection-time"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cycle-type">Cycle Type *</Label>
              <Select name="cycle-type" required>
                <SelectTrigger
                  id="cycle-type"
                  className="bg-secondMainColor border-mainColor/30"
                  aria-label="Cycle Type"
                >
                  <SelectValue placeholder="Select cycle type" />
                </SelectTrigger>
                <SelectContent className="bg-secondMainColor hover:bg-mainColor border-mainColor/30">
                  <SelectItem value="ivf">IVF</SelectItem>
                  <SelectItem value="iui">IUI</SelectItem>
                  <SelectItem value="fet">FET</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Additional Information or Questions
              </Label>
              <Textarea
                id="message"
                placeholder="Please provide any additional information or questions you may have..."
                name="message"
                className="min-h-[100px] bg-secondMainColor border-mainColor/30"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                aria-label="Agree to Terms and Conditions"
                name="terms"
                required
              />
              <Label htmlFor="terms" className="text-sm">
                I have read and agree to the{" "}
                <Link
                  href="/terms-and-privacy"
                  className="text-mainColor underline"
                >
                  Terms & Conditions
                </Link>
              </Label>
            </div>
            <CardFooter className="flex flex-col gap-y-10">
              <ReCAPTCHA
                className="items-center justify-center flex py-5"
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                ref={recaptchaRef}
                onChange={onCaptchaChange}
              />
              {captcha ? (
                <Button
                  variant="formBtn"
                  type="submit"
                  disabled={state.submitting}
                  className="w-full"
                >
                  Submit Inquiry
                </Button>
              ) : (
                <Button type="button" variant="formBtn" disabled>
                  ReCAPTCHA before submitting
                </Button>
              )}
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </MotionDiv>
  );
};
