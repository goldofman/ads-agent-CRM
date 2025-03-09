import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default async function Refund() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      {/* Hero */}
      <div className="mx-auto gap-4 max-w-5xl py-14 px-10">
        <h3 className="text-3xl font-extrabold pb-6 aligh-center">
          Refund and Dispute Policy
        </h3>
        Last Updated: <time dateTime="2025-01-10">January 10, 2025</time>
        <p className="pt-4 font-bold"> Introduction</p>
        <br />
        At Jeva Agency, we strive to provide high-quality advertising services,
        including campaign configuration on Meta platforms. This Refund and
        Dispute Policy outlines our terms for refunds and how disputes are
        handled. By using our services, you agree to this policy.
        <p className="pt-4 font-bold">1. Refund Policy</p>
        <br />
        1.1 No Refunds for Completed Services
        <p>
          - Due to the nature of advertising services and campaign
          configuration, refunds are not provided for services that have been
          completed, delivered, or executed.
        </p>
        1.2 Eligibility for Refunds
        <p>- Refunds may only be issued under the following circumstances:</p>
        <p>- Payment was made in error (e.g., duplicate payments).</p>
        <p>
          - Services were not initiated due to circumstances attributable to
          Jeva Agency.
        </p>
        1.3 Refund Process
        <br />
        <p>
          - If you believe you are eligible for a refund, please contact us at
          commercial.jevaga@gmail.com within 7 days of the payment date.
        </p>
        <p>
          - Include proof of payment and a detailed explanation of your request.
        </p>
        <p>
          - Approved refunds will be processed within 14 business days and
          credited back to the original payment method.
        </p>
        <p className="pt-4 font-bold">2. Dispute Resolution</p>
        <br />
        2.1 Contact Us First
        <br />
        <p>
          - If you have concerns about our services or believe there has been an
          error, contact us directly at commercial.jevaga@gmail.com.
        </p>
        <p>- We are committed to resolving issues promptly and fairly.</p>
        2.2 Third-Party Payment Platforms
        <p>
          - Payments processed through Stripe or other third-party platforms are
          subject to their dispute resolution policies. Please refer to their
          terms if your dispute involves a payment platform.
        </p>
        2.3 Timeframe for Disputes
        <p>
          - All disputes must be raised within 30 days of the transaction date.
          Claims made after this period may not be honored.
        </p>
        2.4 Good Faith Resolution
        <p>
          - Both parties agree to make reasonable efforts to resolve disputes in
          good faith before escalating to legal action or third-party
          arbitration.
        </p>
        <p className="pt-4 font-bold">3. Non-Delivery of Services</p>
        <br />- If Jeva Agency is unable to deliver agreed-upon services due to
        unforeseen circumstances, you will be offered a full refund or an
        alternative solution (e.g., rescheduling services).
        <p className="pt-4 font-bold">4. Changes to This Policy</p>
        <br />- We reserve the right to update or modify this Refund and Dispute
        Policy at any time. Changes will be posted on this page with an updated
        effective date.
        <p className="pt-4 font-bold">Contact Us</p>
        <br />
        If you have any questions or concerns about this policy, please contact
        us: commercial.jevaga@gmail.com
      </div>
      {/* About */}
      <About />
      {/* Footer */}
      <Footer />
    </main>
  );
}
