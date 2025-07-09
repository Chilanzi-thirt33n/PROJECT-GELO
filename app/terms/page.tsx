"use client";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function TermsPage() {
  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.header
        className="text-center w-full bg-white bg-[url('/bg.svg')] bg-cover bg-center"
        variants={itemVariants}
      >
        <section className="flex flex-col text-white justify-center items-center h-[30dvh] lg:h-[25dvh]">
          <h1 className="text-3xl font-black text-pink-950">Terms of Use</h1>
          <p className="text-lg lg:text-xl text-center text-pink-400">
            Please read these terms carefully before using our website
          </p>
        </section>
      </motion.header>

      {/* Terms of Use Content */}
      <motion.div className="mx-auto p-6 max-w-3/4" variants={itemVariants}>
        <section className="p-6 lg:p-8">
          <div className="mb-8 border-b pb-4">
            <p className="text-gray-600 mt-2">Last Updated: 09/07/2025</p>
          </div>

          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                1. Acceptance of Terms
              </h2>
              <p className="mb-3">
                By accessing or using this website, you agree to be bound by
                these Terms of Use and our Privacy Policy. If you do not agree
                with any part of these terms, please do not use our services.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold">Key Points:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>These terms form a legally binding agreement</li>
                  <li>
                    Use of the website indicates acceptance of future updates
                  </li>
                  <li>
                    You represent that you have the authority to agree on behalf
                    of yourself or your organization
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* User Account and Security */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                2. User Account & Security
              </h2>
              <p className="mb-3">
                If you create an account on this website, you agree to provide
                accurate information and to maintain the security of your login
                credentials.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="font-bold">Security Responsibilities:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    You are responsible for all activity under your account
                  </li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>
                    We reserve the right to suspend accounts with suspicious
                    activity
                  </li>
                </ul>
              </div>
              <p>
                You must be at least 18 years old to register and use this
                website.
              </p>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                3. Intellectual Property Rights
              </h2>
              <p>
                All content on this website, including text, graphics, logos,
                images, and software, is the property of the website owner or
                its licensors and is protected by copyright laws.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="font-semibold">License:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>
                    You may use content for personal, non-commercial purposes
                    only
                  </li>
                  <li>
                    Unauthorized reproduction or distribution is prohibited
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                <p className="font-bold">Prohibited Actions:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Reverse engineering or decompiling website code</li>
                  <li>Creating derivative works without permission</li>
                  <li>Removing or altering proprietary notices</li>
                </ul>
              </div>
            </motion.section>

            {/* Data & Privacy */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                4. Data & Privacy
              </h2>
              <p>
                We process user data in accordance with our Privacy Policy. You
                retain ownership of any data you provide.
              </p>
              <div className="bg-pink-50 p-4 rounded-lg mt-4">
                <p className="font-bold">Our Commitments:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Protect your data with appropriate security measures</li>
                  <li>Maintain confidentiality of your personal information</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg mt-4">
                <p className="font-bold">Your Responsibilities:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Provide accurate and lawful data</li>
                  <li>Comply with applicable data protection regulations</li>
                </ul>
              </div>
            </motion.section>

            {/* Restrictions and Liability */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                5. Restrictions & Limitations of Liability
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="font-bold">Prohibited Uses:</p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Illegal or fraudulent activities</li>
                  <li>Reselling or unauthorized distribution</li>
                  <li>Bypassing security measures</li>
                  <li>Activities that may cause harm to others</li>
                </ul>
              </div>
              <h3 className="font-bold text-gray-800 mt-6 mb-3">
                Limitation of Liability
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>
                  To the fullest extent permitted by law, the website owner
                  shall not be liable for:
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, data, or business interruption</li>
                  <li>
                    Damages exceeding amounts paid by you in the prior 12 months
                  </li>
                  <li>Events beyond reasonable control (force majeure)</li>
                </ul>
              </div>
            </motion.section>

            {/* Termination */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                6. Termination
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">By You:</h3>
                  <ul className="list-disc pl-5">
                    <li>Provide notice to discontinue use of the website</li>
                    <li>Obligations remain until termination effective date</li>
                    <li>Data export may be available for a limited time</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-2">By Us:</h3>
                  <ul className="list-disc pl-5">
                    <li>Immediate termination for breaches of these terms</li>
                    <li>Right to suspend access during investigations</li>
                    <li>
                      Notice given when possible before suspension or
                      termination
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Governing Law */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                7. Governing Law & Dispute Resolution
              </h2>
              <div className="flex flex-wrap gap-4">
                <div className="bg-gray-50 p-4 rounded-lg flex-1 min-w-[300px]">
                  <p className="font-bold">Jurisdiction:</p>
                  <p>Applicable laws where the website operator is located</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex-1 min-w-[300px]">
                  <p className="font-bold">Dispute Resolution:</p>
                  <p>
                    Any disputes will be resolved through negotiation or
                    arbitration as applicable.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg flex-1 min-w-[300px]">
                  <p className="font-bold">Class Action Waiver:</p>
                  <p>
                    Claims must be brought individually, not as a class action.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Amendments */}
            <motion.section className="mb-8" variants={itemVariants}>
              <h2 className="text-xl font-semibold text-pink-600 mb-3">
                8. Amendments to Terms
              </h2>
              <p>
                We may update these terms from time to time. Significant changes
                will be communicated via website notices or other means before
                taking effect.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg mt-3">
                <p>
                  Continued use after changes constitutes acceptance of the
                  revised terms.
                </p>
              </div>
            </motion.section>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
}
