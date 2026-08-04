import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | CareWeb",
  description: "Read the Terms and Conditions governing your use of the CareWeb website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-[#3B1F4A] to-[#2A1535] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-white">
            Terms and Conditions
          </h1>
          <p className="text-sm text-slate-300">
            The Terms and Conditions were last updated on August 04, 2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              These Terms and conditions apply to this website and to the transactions related to our products and services. You may be bound by additional contracts related to your relationship with us or any products or services that you receive from us. If any provisions of the additional contracts conflict with any provisions of these Terms, the provisions of these additional contracts will control and prevail.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              2. Binding
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              By registering with, accessing, or otherwise using this website, you hereby agree to be bound by these Terms and conditions set forth below. The mere use of this website implies the knowledge and acceptance of these Terms and conditions. In some particular cases, we can also ask you to explicitly agree.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              3. Electronic communication
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              By using this website or communicating with us by electronic means, you agree and acknowledge that we may communicate with you electronically on our website or by sending an email to you, and you agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement, including but not limited to the requirement that such communications should be in writing.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              4. Intellectual property
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We or our licensors own and control all of the copyright and other intellectual property rights in the website and the data, information, and other resources displayed by or accessible within the website.
            </p>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-2">
              <h3 className="font-bold text-[#3B1F4A] text-sm sm:text-base">
                4.1 All the rights are reserved
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Unless specific content dictates otherwise, you are not granted a license or any other right under Copyright, Trademark, Patent, or other Intellectual Property Rights. This means that you will not use, copy, reproduce, perform, display, distribute, embed into any electronic medium, alter, reverse engineer, decompile, transfer, download, transmit, monetize, sell, market, or commercialize any resources on this website in any form, without our prior written permission, except and only insofar as otherwise stipulated in regulations of mandatory law (such as the right to quote).
              </p>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              5. Third-party property
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Our website may include hyperlinks or other references to other party’s websites. We do not monitor or review the content of other party’s websites which are linked to from this website. Products or services offered by other websites shall be subject to the applicable Terms and Conditions of those third parties. Opinions expressed or material appearing on those websites are not necessarily shared or endorsed by us.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We will not be responsible for any privacy practices or content of these sites. You bear all risks associated with the use of these websites and any related third-party services. We will not accept any responsibility for any loss or damage in whatever manner, however caused, resulting from your disclosure to third parties of personal information.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              6. Responsible use
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              By visiting our website, you agree to use it only for the purposes intended and as permitted by these Terms, any additional contracts with us, and applicable laws, regulations, and generally accepted online practices and industry guidelines. You must not use our website or services to use, publish or distribute any material which consists of (or is linked to) malicious computer software; use data collected from our website for any direct marketing activity, or conduct any systematic or automated data collection activities on or in relation to our website.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Engaging in any activity that causes, or may cause, damage to the website or that interferes with the performance, availability, or accessibility of the website is strictly prohibited.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              7. Idea submission
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Do not submit any ideas, inventions, works of authorship, or other information that can be considered your own intellectual property that you would like to present to us unless we have first signed an agreement regarding the intellectual property or a non-disclosure agreement. If you disclose it to us absent such written agreement, you grant to us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, store, adapt, publish, translate and distribute your content in any existing or future media.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              8. Termination of use
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We may, in our sole discretion, at any time modify or discontinue access to, temporarily or permanently, the website or any Service thereon. You agree that we will not be liable to you or any third party for any such modification, suspension or discontinuance of your access to, or use of, the website or any content that you may have shared on the website. You will not be entitled to any compensation or other payment, even if certain features, settings, and/or any Content you have contributed or have come to rely on, are permanently lost. You must not circumvent or bypass, or attempt to circumvent or bypass, any access restriction measures on our website.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              9. Warranties and liability
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Nothing in this section will limit or exclude any warranty implied by law that it would be unlawful to limit or to exclude. This website and all content on the website are provided on an “as is” and “as available” basis and may include inaccuracies or typographical errors. We expressly disclaim all warranties of any kind, whether express or implied, as to the availability, accuracy, or completeness of the Content. We make no warranty that:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm sm:text-base pl-2">
              <li>this website or our content will meet your requirements;</li>
              <li>this website will be available on an uninterrupted, timely, secure, or error-free basis.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Nothing on this website constitutes or is meant to constitute, legal, financial or medical advice of any kind. If you require advice you should consult an appropriate professional.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The following provisions of this section will apply to the maximum extent permitted by applicable law and will not limit or exclude our liability in respect of any matter which it would be unlawful or illegal for us to limit or to exclude our liability. In no event will we be liable for any direct or indirect damages (including any damages for loss of profits or revenue, loss or corruption of data, software or database, or loss of or harm to property or data) incurred by you or any third party, arising from your access to, or use of, our website.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Except to the extent any additional contract expressly states otherwise, our maximum liability to you for all damages arising out of or related to the website or any products and services marketed or sold through the website, regardless of the form of legal action that imposes liability (whether in contract, equity, negligence, intended conduct, tort or otherwise) will be limited to the total price that you paid to us to purchase such products or services or use the website. Such limit will apply in the aggregate to all of your claims, actions and causes of action of every kind and nature.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              10. Privacy
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              To access our website and/or services, you may be required to provide certain information about yourself as part of the registration process. You agree that any information you provide will always be accurate, correct, and up to date.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We have developed a policy to address any privacy concerns you may have. For more information, please see our{" "}
              <Link href="/privacy-policy" className="text-[#0E6C6E] font-semibold hover:underline">
                Privacy Statement
              </Link>{" "}
              and our{" "}
              <Link href="/cookie-policy" className="text-[#0E6C6E] font-semibold hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              11. Export restrictions / Legal compliance
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Access to the website from territories or countries where the Content or purchase of the products or Services sold on the website is illegal is prohibited. You may not use this website in violation of export laws and regulations of United Kingdom.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 12 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              12. Assignment
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              You may not assign, transfer or sub-contract any of your rights and/or obligations under these Terms and conditions, in whole or in part, to any third party without our prior written consent. Any purported assignment in violation of this Section will be null and void.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 13 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              13. Breaches of these Terms and conditions
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Without prejudice to our other rights under these Terms and Conditions, if you breach these Terms and Conditions in any way, we may take such action as we deem appropriate to deal with the breach, including temporarily or permanently suspending your access to the website, contacting your internet service provider to request that they block your access to the website, and/or commence legal action against you.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 14 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              14. Indemnification
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              You agree to indemnify, defend and hold us harmless, from and against any and all claims, liabilities, damages, losses and expenses, relating to your violation of these Terms and conditions, and applicable laws, including intellectual property rights and privacy rights. You will promptly reimburse us for our damages, losses, costs and expenses relating to or arising out of such claims.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 15 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              15. Waiver
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Failure to enforce any of the provisions set out in these Terms and Conditions and any Agreement, or failure to exercise any option to terminate, shall not be construed as waiver of such provisions and shall not affect the validity of these Terms and Conditions or of any Agreement or any part thereof, or the right thereafter to enforce each and every provision.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 16 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              16. Language
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              These Terms and Conditions will be interpreted and construed exclusively in English. All notices and correspondence will be written exclusively in that language.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 17 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              17. Entire agreement
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              These Terms and Conditions, together with our privacy statement and cookie policy, constitute the entire agreement between you and Lizor Care in relation to your use of this website.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 18 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              18. Updating of these Terms and conditions
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We may update these Terms and Conditions from time to time. It is your obligation to periodically check these Terms and Conditions for changes or updates. The date provided at the beginning of these Terms and Conditions is the latest revision date. Changes to these Terms and Conditions will become effective upon such changes being posted to this website. Your continued use of this website following the posting of changes or updates will be considered notice of your acceptance to abide by and be bound by these Terms and Conditions.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 19 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              19. Choice of Law and Jurisdiction
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              These Terms and Conditions shall be governed by the laws of United Kingdom. Any disputes relating to these Terms and Conditions shall be subject to the jurisdiction of the courts of United Kingdom. If any part or provision of these Terms and Conditions is found by a court or other authority to be invalid and/or unenforceable under applicable law, such part or provision will be modified, deleted and/or enforced to the maximum extent permissible so as to give effect to the intent of these Terms and Conditions. The other provisions will not be affected.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 20 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              20. Contact information
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This website is owned and operated by Lizor Care.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              You may contact us regarding these Terms and Conditions through our{" "}
              <Link href="/contact" className="text-[#0E6C6E] font-semibold hover:underline">
                contact page
              </Link>
              .
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
