"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Sparkles, Crown } from "lucide-react"

const services = [
  {
    name: "Basic",
    price: "$25",
    description: "Essential car wash for everyday cleanliness",
    icon: <Sparkles className="h-8 w-8 text-accent" />,
    features: ["Exterior wash & rinse", "Wheel cleaning", "Basic interior vacuum", "Window cleaning", "Tire shine"],
    popular: false,
    gradient: "from-slate-50 to-slate-100",
    borderColor: "border-slate-200",
  },
  {
    name: "Deluxe",
    price: "$45",
    description: "Premium care with extra attention to detail",
    icon: <Star className="h-8 w-8 text-accent" />,
    features: [
      "Everything in Basic",
      "Interior deep clean",
      "Dashboard conditioning",
      "Leather treatment",
      "Air freshener",
      "Undercarriage wash",
    ],
    popular: true,
    gradient: "from-accent/5 to-accent/10",
    borderColor: "border-accent",
  },
  {
    name: "Premium",
    price: "$75",
    description: "Ultimate luxury treatment for your vehicle",
    icon: <Crown className="h-8 w-8 text-accent" />,
    features: [
      "Everything in Deluxe",
      "Paint protection wax",
      "Engine bay cleaning",
      "Headlight restoration",
      "Premium interior detailing",
      "Ceramic coating application",
      "30-day shine guarantee",
    ],
    popular: false,
    gradient: "from-yellow-50 to-amber-50",
    borderColor: "border-yellow-300",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 text-accent mr-2" />
            <span className="text-accent font-semibold">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            Choose Your Perfect
            <span className="text-accent block">Car Care Package</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From essential cleaning to premium detailing, we offer comprehensive car care services tailored to your
            needs and budget. Every package includes our signature attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${service.borderColor} ${
                service.popular ? "ring-2 ring-accent shadow-xl scale-105" : ""
              }`}
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">Most Popular</Badge>
              )}

              <CardHeader className={`bg-gradient-to-br ${service.gradient} pb-8`}>
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">per service</div>
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-primary">{service.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button
                  className={`w-full ${
                    service.popular
                      ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                      : "bg-primary hover:bg-primary/90 text-primary-foreground"
                  }`}
                  size="lg"
                >
                  Choose {service.name}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-4">Why Choose Kang Plaza?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Premium Products</h4>
                <p className="text-muted-foreground text-sm">
                  We use only the highest quality cleaning products and equipment
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Expert Team</h4>
                <p className="text-muted-foreground text-sm">
                  Our trained professionals ensure every detail meets our high standards
                </p>
              </div>
              <div>
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-semibold text-primary mb-2">Satisfaction Guarantee</h4>
                <p className="text-muted-foreground text-sm">100% satisfaction guaranteed or we'll make it right</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
