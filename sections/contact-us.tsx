'use client';

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
import { useState } from "react";

export const ContactUs = () => {
  const [date, setDate] = useState<Date>();

  return (
    <Card id='contact-us' className="w-full max-w-2xl mx-auto my-20 scroll-mt-20">
      <CardHeader>
        <CardTitle className="text-center">IVF Concierge Service Inquiry</CardTitle>
        <CardDescription>
          Please fill out the form below to get started with our IVF concierge
          service.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="partner-name">Partner&apos;s Full Name</Label>
              <Input id="partner-name" placeholder="Jane Doe" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              placeholder="123 Main St, City, State, ZIP"
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="med-start-date">Medication Start Date</Label>
              <Popover>
                <PopoverTrigger asChild>
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
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="clinic">Fertility Clinic / MD / Nurse</Label>
              <Input
                id="clinic"
                placeholder="Dr. Smith at XYZ Fertility Clinic"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="injection-time">Preferred Injection Time</Label>
              <Input id="injection-time" type="time" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cycle-type">Cycle Type</Label>
            <Select>
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
              className="min-h-[100px]"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" aria-label="Agree to Terms and Conditions" required />
            <Label htmlFor="terms" className="text-sm">
              I have read and agree to the{" "}
              <a href="/" className="text-primary underline">
                Terms and Conditions
              </a>
            </Label>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Submit Inquiry</Button>
      </CardFooter>
    </Card>
  );
}
