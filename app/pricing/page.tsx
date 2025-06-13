import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PricingSection from "@/components/pricing-section"
export default function PricingPage() {
    return(
              <main className="flex-1">
        <PricingSection />

        <section className="py-16 bg-white flex item-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-serif text-center mb-10">Frequently Asked Questions</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <Card className="border border-gray-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Is HormoneFit covered by insurance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Many extended health plans cover our services. We provide detailed receipts that you can submit to
                    your insurance provider for reimbursement. We recommend checking with your provider for specific
                    coverage details.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Can I cancel my membership anytime?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Yes, you can cancel your monthly membership at any time. Annual memberships can be cancelled within
                    the first 30 days for a full refund, or after that for a prorated refund minus a small
                    administrative fee.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">How quickly can I see a doctor?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Most members can book same-day or next-day appointments. Urgent care appointments are typically
                    available within hours. Our goal is to connect you with a specialist as quickly as possible.
                  </p>
                </CardContent>
              </Card>
              <Card className="border border-gray-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">Are your doctors licensed in Canada?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Yes, all of our doctors are fully licensed to practice medicine in Canada and have specialized
                    training in menopause care. We have doctors licensed in every province and territory.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    )
}