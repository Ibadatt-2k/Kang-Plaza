"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: <MapPin className="h-6 w-6 text-accent" />,
    title: "Location",
    details: ["123 Main Street", "Downtown Plaza", "City, State 12345"],
  },
  {
    icon: <Phone className="h-6 w-6 text-accent" />,
    title: "Phone",
    details: ["(123) 456-7890", "Call or text anytime"],
  },
  {
    icon: <Mail className="h-6 w-6 text-accent" />,
    title: "Email",
    details: ["info@kangplaza.com", "We respond within 24 hours"],
  },
  {
    icon: <Clock className="h-6 w-6 text-accent" />,
    title: "Business Hours",
    details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat-Sun: 9:00 AM - 5:00 PM"],
  },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    try {
      // Replace 'YOUR_CONTACT_FORM_ID' with actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_CONTACT_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast({
          title: "Message Sent!",
          description: "Thank you for contacting us. We'll get back to you soon.",
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

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Contact
            <span className="text-accent block">Kang Plaza</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about our services? Need a custom quote? We're here to help. Reach out to us using any of the
            methods below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 border-border/50 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="overflow-hidden border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-2" />
                  Find Us
                </CardTitle>
                <CardDescription>Visit our convenient downtown location</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  {/* Map placeholder with styling */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/10"></div>
                  <div className="relative z-10 text-center">
                    <MapPin className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="text-muted-foreground font-medium">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">123 Main Street, Downtown Plaza</p>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <div className="absolute bottom-6 right-6 w-2 h-2 bg-accent/60 rounded-full animate-pulse delay-500"></div>
                  <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-accent/40 rounded-full animate-pulse delay-1000"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            {isSubmitted ? (
              <Card className="text-center p-12 border-accent/20 bg-accent/5">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-primary mb-4">Message Sent!</CardTitle>
                <CardDescription className="text-lg text-muted-foreground mb-6">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </CardDescription>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Send Another Message
                </Button>
              </Card>
            ) : (
              <Card className="shadow-xl border-border/50">
                <CardHeader className="bg-gradient-to-r from-muted/30 to-accent/5 border-b border-border">
                  <CardTitle className="text-2xl font-bold text-primary">Send Us a Message</CardTitle>
                  <CardDescription>
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name" className="text-foreground">
                          Name *
                        </Label>
                        <Input
                          id="contact-name"
                          name="name"
                          required
                          placeholder="Your full name"
                          className="border-border focus:border-accent"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contact-email" className="text-foreground">
                          Email *
                        </Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="border-border focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-phone" className="text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="border-border focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-subject" className="text-foreground">
                        Subject *
                      </Label>
                      <Input
                        id="contact-subject"
                        name="subject"
                        required
                        placeholder="What's this about?"
                        className="border-border focus:border-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="contact-message" className="text-foreground">
                        Message *
                      </Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        required
                        placeholder="Tell us how we can help you..."
                        className="border-border focus:border-accent min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <Card className="bg-accent/5 border-accent/20 p-8">
            <CardTitle className="text-xl font-bold text-primary mb-4">Need Immediate Assistance?</CardTitle>
            <CardDescription className="text-muted-foreground mb-6">
              For urgent matters or same-day service requests, don't hesitate to call us directly.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <a href="tel:+1234567890">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now: (123) 456-7890
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                <a href="mailto:info@kangplaza.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
