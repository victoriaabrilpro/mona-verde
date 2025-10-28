import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Mail, MapPin } from 'lucide-react';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
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
                <FileText size={24} className="text-[#F79548]" />
                <div>
                  <h2 className="text-xl md:text-2xl font-canela">Terms of Service</h2>
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
                    Welcome to Mona Verde. These terms cover your use of our restaurant, website, and related services. We're located at R. Castilho 14C, 8th Floor, 1250-066 Lisboa, Portugal. By using our services or visiting us, you're agreeing to these terms.
                  </p>
                </section>

                {/* Acceptance of Terms */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Acceptance of Terms</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    By using our services, you're confirming that you've read and agree to these terms and our privacy policy. If you don't agree, please don't use our services.
                  </p>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    These terms apply to everyone who visits our restaurant or uses our website and digital services.
                  </p>
                </section>

                {/* Restaurant Services */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Restaurant Services</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Dining Services</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed mb-2">
                        Mona Verde provides fine dining services, including but not limited to:
                      </p>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-1 ml-4">
                        <li>Latin fusion cuisine and beverage service</li>
                        <li>Rooftop dining experience with panoramic city views</li>
                        <li>Private event hosting and catering services</li>
                        <li>Entertainment and special event programming</li>
                        <li>Online reservation and ordering systems</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Operating Hours</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed">
                        Our standard operating hours are Monday through Sunday, 6:00 PM to 2:00 AM. Hours may vary during holidays or special events. We reserve the right to modify our operating hours with reasonable notice.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Reservations */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Reservations and Bookings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Reservation Policy</h4>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-2 ml-4">
                        <li>Reservations are recommended and can be made through our website, phone, or approved third-party platforms</li>
                        <li>We require accurate contact information and party size when making reservations</li>
                        <li>Reservations are held for 15 minutes past the scheduled time before being released</li>
                        <li>Large parties (8+ guests) may require a deposit or pre-payment</li>
                        <li>Special dietary requirements and accessibility needs should be communicated at the time of booking</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Cancellation Policy</h4>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-2 ml-4">
                        <li>Cancellations must be made at least 24 hours in advance for parties of 6 or fewer</li>
                        <li>Parties of 7 or more require 48 hours advance notice for cancellation</li>
                        <li>Late cancellations or no-shows may result in charges as outlined at the time of booking</li>
                        <li>We reserve the right to charge a cancellation fee for repeated no-shows</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Payment and Pricing */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Payment and Pricing</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Payment Methods</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed mb-2">
                        We accept the following payment methods:
                      </p>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-1 ml-4">
                        <li>Major credit cards (Visa, Mastercard, American Express)</li>
                        <li>Debit cards</li>
                        <li>Cash (Euros)</li>
                        <li>Digital payment methods as available</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Pricing and Charges</h4>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-2 ml-4">
                        <li>All prices are listed in Euros and include applicable taxes unless otherwise stated</li>
                        <li>Menu prices are subject to change without notice</li>
                        <li>Service charges may apply for large groups as indicated on menus or at time of booking</li>
                        <li>Gratuities are appreciated but not mandatory</li>
                        <li>We reserve the right to add service charges for special requests or modifications</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Conduct and Behavior */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Guest Conduct and Behavior</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Expected Conduct</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed mb-2">
                        All guests are expected to:
                      </p>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-1 ml-4">
                        <li>Treat staff, other guests, and property with respect and courtesy</li>
                        <li>Follow our dress code and establishment guidelines</li>
                        <li>Comply with local laws and regulations</li>
                        <li>Respect the dining experience of other guests</li>
                        <li>Follow safety instructions and emergency procedures</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Prohibited Behavior</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed mb-2">
                        The following behaviors are strictly prohibited:
                      </p>
                      <ul className="list-disc list-inside text-[#4E5A48]/80 space-y-1 ml-4">
                        <li>Disruptive, offensive, or inappropriate behavior</li>
                        <li>Harassment of staff or other guests</li>
                        <li>Excessive intoxication or substance abuse</li>
                        <li>Smoking in non-designated areas</li>
                        <li>Unauthorized photography or recording of other guests</li>
                        <li>Bringing outside food or beverages without permission</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Right to Refuse Service</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed">
                        We reserve the right to refuse service, remove guests, or terminate reservations for violations of these Terms, inappropriate behavior, or any other reason we deem necessary for the safety and enjoyment of all guests and staff.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Liability and Disclaimers */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Liability and Disclaimers</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Food Allergies and Dietary Restrictions</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed">
                        While we make every effort to accommodate dietary restrictions and allergies, we cannot guarantee that our food is completely free from allergens. Guests with severe allergies or dietary restrictions dine at their own risk and should inform our staff of any concerns before ordering.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Personal Property</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed">
                        Mona Verde is not responsible for lost, stolen, or damaged personal property. Guests are advised to keep valuables secure and not leave personal items unattended.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-colfax-medium text-[#4E5A48] mb-2">Limitation of Liability</h4>
                      <p className="text-[#4E5A48]/80 leading-relaxed">
                        To the fullest extent permitted by law, Mona Verde's liability for any claims arising from your use of our services shall not exceed the amount paid for the specific service giving rise to the claim. We shall not be liable for any indirect, incidental, special, or consequential damages.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Intellectual Property */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Intellectual Property</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Mona Verde or its licensors and is protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    Guests may not reproduce, distribute, modify, or create derivative works from our content without express written permission. Photography and videography of our establishment for personal use is permitted, but commercial use requires prior authorization.
                  </p>
                </section>

                {/* Privacy and Data */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Privacy and Data Protection</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    Your privacy is important to us. Our collection, use, and protection of your personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    By using our services, you consent to the collection and use of your information as described in our Privacy Policy. This may include photography or videography for promotional purposes, which you may opt out of by informing our staff.
                  </p>
                </section>

                {/* Force Majeure */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Force Majeure</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    Mona Verde shall not be liable for any failure or delay in performance under these Terms due to circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, government regulations, labor disputes, or other unforeseeable events. In such cases, we will make reasonable efforts to notify affected guests and provide alternative arrangements when possible.
                  </p>
                </section>

                {/* Modifications to Terms */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Modifications to Terms</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with a revised "Last updated" date. Material changes will be communicated through appropriate channels, such as email notifications to registered users or prominent website notices.
                  </p>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    Your continued use of our services after any modifications constitutes acceptance of the updated Terms. If you do not agree to the modified Terms, you should discontinue use of our services.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Governing Law and Jurisdiction</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of Portugal, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Lisbon, Portugal.
                  </p>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions shall continue in full force and effect.
                  </p>
                </section>

                {/* Dispute Resolution */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Dispute Resolution</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    We encourage guests to contact us directly to resolve any concerns or disputes. Most issues can be resolved through direct communication with our management team.
                  </p>
                  <p className="text-[#4E5A48]/80 leading-relaxed">
                    For formal disputes that cannot be resolved through direct communication, parties agree to first attempt resolution through mediation before pursuing litigation. Any legal proceedings must be initiated within one year of the incident giving rise to the dispute.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">Contact Information</h3>
                  <p className="text-[#4E5A48]/80 leading-relaxed mb-4">
                    If you have any questions, concerns, or requests regarding these Terms of Service, please contact us:
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
                    By using our services, visiting our establishment, or making a reservation, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement between you and Mona Verde.
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

export default TermsOfServiceModal;