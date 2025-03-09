import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default async function Privacy() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <Header />
      {/* Hero */}
      <div className="mx-auto gap-4 max-w-5xl py-14 px-10">
        <h3 className="text-3xl font-extrabold pb-6 aligh-center">
          Privacy Policy
        </h3>
        Last Updated: <time dateTime="2025-01-10">January 10, 2025</time>
        <p className="pt-4"> 1. Introduction</p>
        <br /> Welcome to jeva.agency! We value your privacy and are committed
        to protecting your personal information. This Privacy Policy explains
        how we collect, use, and safeguard your data when you visit our landing
        page and use our advertising services, including campaign configuration
        on Meta platforms (Facebook, Instagram, etc.).
        <p className="pt-4"> 2. Information We Collect</p>
        <br /> We may collect the following types of information:
        <p>
          {" "}
          - Personal Information: Name, email address, phone number, and
          business details when you contact us or fill out a form.
        </p>
        <p>
          {" "}
          - Payment Information: If applicable, payment details processed
          securely through third-party services like Stripe.
        </p>
        <p>
          {" "}
          - Usage Data: IP address, browser type, device information, and
          website interaction data collected via cookies or similar
          technologies.
        </p>
        <p className="pt-4"> 3. How We Use Your Information</p>
        <br /> We use your information to:
        <p>
          {" "}
          - Provide and manage our advertising services, including campaign
          setup and optimization on Meta platforms.
        </p>
        <p>
          {" "}
          - Communicate with you about inquiries, updates, and service
          improvements.
        </p>
        <p> - Process payments securely.</p>
        <p> - Analyze website performance to enhance user experience.</p>
        <p className="pt-4"> 4. Sharing Your Information</p>
        <br /> We do not sell your personal information. However, we may share
        it with:
        <p>
          {" "}
          - Service Providers: Third parties like Meta (for campaign management)
          and Stripe (for payment processing) to deliver our services.
        </p>
        <p>
          {" "}
          - Legal Authorities: If required by law or to protect our rights.
        </p>
        <p className="pt-4">
          5. Cookies and Tracking Technologies Our website uses cookies to:
        </p>
        <br /> - Enhance your browsing experience.
        <p>- Analyze site traffic and performance.</p>
        <p> - Facilitate advertising campaign effectiveness.</p>
        <p>
          {" "}
          You can manage your cookie preferences through your browser settings.
        </p>
        <p className="pt-4"> 6. Data Security</p>
        <br /> We implement industry-standard security measures to protect your
        personal information. However, no method of transmission over the
        internet is entirely secure, and we cannot guarantee absolute security.
        <p className="pt-4"> 7. Your Rights</p>
        <br /> Depending on your location, you may have the right to:
        <p> - Access, correct, or delete your personal data.</p>
        <p> - Opt-out of certain data processing activities.</p>
        <p>
          {" "}
          - File a complaint with a regulatory authority if you believe your
          rights have been violated.
        </p>
        <p>
          {" "}
          To exercise these rights, please contact us at
          commercial.jevaga@gmail.com.
        </p>
        <p className="pt-4"> 8. Third-Party Links</p>
        <br /> Our website may contain links to third-party websites, including
        Meta. We are not responsible for their privacy practices and encourage
        you to review their privacy policies.
        <p className="pt-4">9. Updates to This Policy</p>
        <br /> We may update this Privacy Policy from time to time. Changes will
        be posted on this page with an updated effective date.
        <p className="pt-4"> 10. Contact Us</p>
        <br /> If you have questions or concerns about this Privacy Policy or
        how your data is handled, please contact us at:
        commercial.jevaga@gmail.com
      </div>
      {/* About */}
      <About />
      {/* Footer */}
      <Footer />
    </main>
  );
}
