import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Mail, MapPin } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 xl:inset-24 z-50 bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#4E5A48] text-white p-4 md:p-6 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center space-x-3">
                <Shield size={24} className="text-[#F79548]" />
                <div>
                  <h2 className="text-xl md:text-2xl font-canela">Privacy Policy</h2>
                  <p className="text-white/80 text-sm font-colfax-regular">Mona Verde</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              <div className="max-w-4xl mx-auto space-y-8">
                {/* Introduction */}
                <section>
                  <p className="text-[#4E5A48] leading-relaxed">
                    At Mona Verde, we take your privacy seriously. This policy explains how we handle your personal information when you visit our restaurant, browse our website, or use our services.
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Information We Collect</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Personal Information</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed mb-2">
                        When you choose to share information with us, it might include:
                      </p>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-1 ml-4">
                        <li>Name and contact information (email, phone number)</li>
                        <li>Reservation details and dining preferences</li>
                        <li>Special dietary requirements or accessibility needs</li>
                        <li>Payment information (processed securely through third-party providers)</li>
                        <li>Communication preferences and marketing consent</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Automatically Collected Information</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed mb-2">
                        When you browse our website, we automatically gather some basic information:
                      </p>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-1 ml-4">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Pages visited and time spent on our website</li>
                        <li>Referring website information</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">How We Use Your Information</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    We use the information we collect for the following purposes:
                  </p>
                  <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-2 ml-4">
                    <li>Processing and managing your reservations and dining experiences</li>
                    <li>Providing customer service and responding to your inquiries</li>
                    <li>Personalizing your experience and improving our services</li>
                    <li>Sending you promotional materials and updates (with your consent)</li>
                    <li>Complying with legal obligations and protecting our rights</li>
                    <li>Analyzing website usage to improve functionality and user experience</li>
                  </ul>
                </section>

                {/* Information Sharing */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Information Sharing and Disclosure</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> With trusted third-party vendors who assist us in operating our business (reservation systems, payment processors, email services)</li>
                    <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of business assets</li>
                    <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our customers or others</li>
                  </ul>
                </section>

                {/* Data Security */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Data Security</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, access controls, and regular security assessments. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                {/* Cookies and Tracking */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Cookies and Tracking Technologies</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and personalize content. You can control cookie settings through your browser preferences, though disabling cookies may affect website functionality.
                  </p>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    We may also use third-party analytics services (such as Google Analytics) to help us understand how visitors use our website.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Your Privacy Rights</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-2 ml-4">
                    <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                    <li><strong>Portability:</strong> Request a copy of your data in a structured, machine-readable format</li>
                    <li><strong>Objection:</strong> Object to the processing of your personal information for certain purposes</li>
                    <li><strong>Withdrawal of Consent:</strong> Withdraw your consent for marketing communications at any time</li>
                  </ul>
                  <p className="text-[#4E5A48]/80 leading-relaxed mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </section>

                {/* Third-Party Services */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Third-Party Services</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    Our website and services may contain links to third-party websites or integrate with third-party services, including:
                  </p>
                  <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-1 ml-4">
                    <li>Reservation platforms</li>
                    <li>Social media platforms</li>
                    <li>Payment processors</li>
                    <li>Analytics services</li>
                  </ul>
                  <p className="text-[#4E5A48]/80 leading-relaxed mt-4">
                    These third parties have their own privacy policies, and we are not responsible for their practices. We encourage you to review their privacy policies before providing any personal information.
                  </p>
                </section>

                {/* Data Retention */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Data Retention</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Children's Privacy</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    Our services are not directed to children under the age of 16, and we do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information promptly.
                  </p>
                </section>

                {/* International Transfers */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">International Data Transfers</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                  </p>
                </section>

                {/* Updates to Policy */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Updates to This Privacy Policy</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Contact Us</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
                  </p>
                  
                  <div className="bg-[#EFE5DA] p-6 rounded-lg space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin size={20} className="text-[#F79548] mt-1" />
                      <div>
                        <p className="font-colfax-medium text-[#4E5A48]">Address:</p>
                        <p className="text-[#4E5A48]/80">
                          Mona Verde<br />
                          R. Castilho 14C, 8th Floor<br />
                          1250-066 Lisboa, Portugal
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Acknowledgment */}
                <section className="border-t border-[#4E5A48]/20 pt-6">
                  <p className="text-[#4E5A48]/60 text-sm leading-relaxed">
                    By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. This policy is part of our Terms of Service and should be read in conjunction with those terms.
                  </p>
                </section>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#EFE5DA] p-4 md:p-6 flex-shrink-0 text-center">
              <p className="text-[#4E5A48]/60 text-sm">
                © 2025 Mona Verde. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicyModal;