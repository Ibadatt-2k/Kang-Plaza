"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Heart, Target, Shield } from "lucide-react"

const values = [
  {
    icon: <Heart className="h-8 w-8 text-accent" />,
    title: "Customer First",
    description: "Every decision we make puts our customers' satisfaction at the center.",
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Excellence",
    description: "We strive for perfection in every service we provide.",
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: "Trust",
    description: "Building lasting relationships through reliability and transparency.",
  },
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: "Innovation",
    description: "Continuously improving our methods and technology.",
  },
]

const stats = [
  { number: "10,000+", label: "Cars Washed" },
  { number: "5", label: "Years Experience" },
  { number: "98%", label: "Customer Satisfaction" },
  { number: "24/7", label: "Support Available" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold">About Kang Plaza</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Dedicated to
            <span className="text-accent block">Automotive Excellence</span>
          </h2>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">Our Story</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Kang Plaza is owned and operated by Aadil Kang.</p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/modern-car-wash-facility-exterior-with-clean-cars.jpg"
              alt="Kang Plaza Facility"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg border border-border mb-20">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              "To provide exceptional automotive care services that not only clean and protect your vehicle but also
              enhance your driving experience. We are committed to delivering premium quality, outstanding customer
              service, and building lasting relationships with every client who trusts us with their vehicle."
            </p>
            <Badge className="bg-accent/10 text-accent border-accent/20 px-6 py-2 text-base">Shine Beyond Clean</Badge>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow border-border/50">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h4 className="font-bold text-primary mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-primary mb-4">Ready to Experience the Difference?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who trust Kang Plaza with their vehicles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                Book Your Service
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
