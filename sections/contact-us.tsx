"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
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

export const ContactUs = () => {
  const [date, setDate] = useState<Date>();
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID!);
  const [captcha, setCaptcha] = useState<string | null>();
  const { toast } = useToast();

  const recaptchaRef = useRef(null);

  const onCaptchaChange = (token: string | null) => {
    setCaptcha(token);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    if (state.succeeded) {
      toast({
        variant: "success",
        title: "Inquiry sent, thank you!",
      });
    }
  };

  return (
    <Card
      id="contact-us"
      className="w-full max-w-2xl mx-auto my-20 scroll-mt-20"
    >
      <CardHeader>
        <CardTitle className="text-center text-[#6260d9]">
          IVF Concierge Service Inquiry
        </CardTitle>
        <CardDescription>
          Please fill out the form below to get started with our IVF concierge
          service.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Full Name *</Label>
              <Input id="name" placeholder="Jane Doe" name="name" required />
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
                <PopoverTrigger className="flex" asChild>
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
              <Input id="injection-time" type="time" name="injection-time" />
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
              <SelectTrigger id="cycle-type" aria-label="Cycle Type">
                <SelectValue placeholder="Select cycle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ivf">IVF</SelectItem>
                <SelectItem value="iui">IUI</SelectItem>
                <SelectItem value="fet">FET</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Information or Questions</Label>
            <Textarea
              id="message"
              placeholder="Please provide any additional information or questions you may have..."
              name="message"
              className="min-h-[100px]"
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
                className="text-[#6260d9] underline"
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
                variant="primaryBtn"
                type="submit"
                disabled={state.submitting}
                className="w-full"
              >
                Submit Inquiry
              </Button>
            ) : (
              <Button type="button" variant="primaryBtn" disabled>
                ReCAPTCHA before submitting
              </Button>
            )}
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};
