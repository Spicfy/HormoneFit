"use client"

import { useState } from "react"
import Link from "next/link"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly")

  return (
    <section className="py-20 bg-gradient-to-br from-fuchsia-100 via-white to-emerald-50 mt-16">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-serif font-light text-gray-900 mb-4">
            Personalized Care for Your Menopause Journey
          </h2>
          <p className="text-gray-600 mb-8">Choose the option that best supports your wellness needs</p>

          <div className="inline-flex items-center p-1 bg-gray-100 rounded-full mb-8">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                billingCycle === "monthly" ? "bg-white shadow-sm text-mauve-800" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                billingCycle === "annual" ? "bg-white shadow-sm text-mauve-800" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual <span className="text-emerald-600 text-xs ml-1">Save 15%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-8 items-stretch ">
          {/* Single Visit Option */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Pay Per Visit</h3>
                <p className="text-sm text-gray-500">For occasional care needs</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-3xl font-light text-gray-900">$125</span>
                  <span className="text-sm text-gray-500 ml-2">per visit</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mauve-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">One-time virtual consultation</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mauve-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Personalized treatment plan</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mauve-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Prescription if needed</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mauve-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">24-hour follow-up support</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-mauve-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Nutritional counselling</span>
                </li>
              </ul>

              <div className="mt-auto pt-4">
                <Button variant="outline" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                  <Link href="/register">Book a Visit</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Plan */}
          <div className="md:col-span-5 bg-gradient-to-b from-mauve-50 to-white rounded-2xl shadow-lg border border-mauve-100 relative flex flex-col h-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg flex items-center">
              <Star className="h-3 w-3 mr-1 fill-white" />
              Most Popular
            </div>

            <div className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-medium text-gray-900 mb-1">Membership</h3>
                <p className="text-sm text-gray-500">Comprehensive ongoing care</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  {billingCycle === "monthly" ? (
                    <>
                      <span className="text-4xl font-light text-gray-900">$49</span>
                      <span className="text-sm text-gray-500 ml-2">per month</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-light text-gray-900">$499</span>
                      <span className="text-sm text-gray-500 ml-2">per year</span>
                      <span className="ml-2 text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                        2 months free
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 mb-8 flex-grow">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Unlimited virtual consultations</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Ongoing treatment adjustments</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Prescription renewals</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">Priority scheduling</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    {billingCycle === "monthly" ? "10% off all products" : "15% off all products"}
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">24/7 messaging support</span>
                </div>
                {billingCycle === "annual" && (
                  <>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Annual comprehensive review</span>
                    </div>
                    <div className="flex items-start">
                      <Check className="h-5 w-5 text-emerald-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">Free shipping on all products</span>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-auto pt-4">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                  <Link href="/register">
                    {billingCycle === "monthly" ? "Start Monthly Membership" : "Start Annual Membership"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Individual Services */}
          <div className="md:col-span-3 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
            <div className="p-8 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-1">Individual Services</h3>
                <p className="text-sm text-gray-500">Pay only for what you need</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                <li className="pb-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">Initial Consultation</span>
                    <span className="text-sm font-light text-gray-900">$149</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">60-minute assessment</p>
                </li>
                <li className="pb-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">Follow-up</span>
                    <span className="text-sm font-light text-gray-900">$89</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">30-minute appointment</p>
                </li>
                <li className="pb-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">Urgent Care</span>
                    <span className="text-sm font-light text-gray-900">$199</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Same-day appointment</p>
                </li>
                <li className="pb-3 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">Prescription Renewal</span>
                    <span className="text-sm font-light text-gray-900">$49</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Without consultation</p>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">Lab Work Review</span>
                    <span className="text-sm font-light text-gray-900">$69</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Analysis & recommendations</p>
                </li>
              </ul>

              <div className="mt-auto pt-4">
                <Button variant="outline" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                  <Link href="/register">Book a Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            All plans include access to our secure patient portal and educational resources
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-emerald-500 mr-1" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-emerald-500 mr-1" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <Check className="h-4 w-4 text-emerald-500 mr-1" />
              <span>Insurance receipts provided</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}