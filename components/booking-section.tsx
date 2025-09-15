"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Clock, Car, Phone, Mail, User, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      // Replace 'YOUR_FORM_ID' with actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Booking Submitted!",
          description: "We'll contact you within 24 hours to confirm your appointment.",
        })
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or call us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-12 border-accent/20 bg-accent/5">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary mb-4">Booking Confirmed!</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mb-6">
              Thank you for choosing Kang Plaza. We'll contact you within 24 hours to confirm your appointment details.
            </CardDescription>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              Book Another Service
            </Button>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold">Book Your Service</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Schedule Your
            <span className="text-accent block">Premium Car Wash</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ready to give your car the premium treatment it deserves? Fill out the form below and we'll contact you to
            confirm your appointment.
          </p>
        </div>

        <Card className="shadow-2xl border-border/50">
          <CardHeader className="bg-gradient-to-r from-muted/30 to-accent/5 border-b border-border">
            <CardTitle className="text-2xl font-bold text-primary">Appointment Details</CardTitle>
            <CardDescription>Please provide your information and preferred service details</CardDescription>
          </CardHeader>

          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center text-foreground">
                    <User className="h-4 w-4 mr-2 text-accent" />
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center text-foreground">
                    <Phone className="h-4 w-4 mr-2 text-accent" />
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 123-4567"
                    className="border-border focus:border-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center text-foreground">
                  <Mail className="h-4 w-4 mr-2 text-accent" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="border-border focus:border-accent"
                />
              </div>

              {/* Service Details */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="service" className="flex items-center text-foreground">
                    <Car className="h-4 w-4 mr-2 text-accent" />
                    Service Package *
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger className="border-border focus:border-accent">
                      <SelectValue placeholder="Select a service package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic - $25</SelectItem>
                      <SelectItem value="deluxe">Deluxe - $45</SelectItem>
                      <SelectItem value="premium">Premium - $75</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicle" className="flex items-center text-foreground">
                    <Car className="h-4 w-4 mr-2 text-accent" />
                    Vehicle Type
                  </Label>
                  <Select name="vehicle">
                    <SelectTrigger className="border-border focus:border-accent">
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="coupe">Coupe</SelectItem>
                      <SelectItem value="convertible">Convertible</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Preferred Date and Time */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center text-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-accent" />
                    Preferred Date *
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="border-border focus:border-accent"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center text-foreground">
                    <Clock className="h-4 w-4 mr-2 text-accent" />
                    Preferred Time *
                  </Label>
                  <Select name="time" required>
                    <SelectTrigger className="border-border focus:border-accent">
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="8:00 AM">8:00 AM</SelectItem>
                      <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                      <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                      <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                      <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                      <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                      <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                      <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                      <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                      <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground">
                  Additional Notes or Special Requests
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Any special instructions or requests for your service..."
                  className="border-border focus:border-accent min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
                  size="lg"
                >
                  {isSubmitting ? "Submitting..." : "Book My Appointment"}
                </Button>
              </div>

              {/* Contact Info */}
              <div className="text-center pt-4 border-t border-border">
                <p className="text-muted-foreground text-sm">
                  Need immediate assistance?{" "}
                  <a href="tel:+1234567890" className="text-accent hover:underline font-medium">
                    Call us at (123) 456-7890
                  </a>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
