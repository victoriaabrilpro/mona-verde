import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, MapPin } from 'lucide-react';
import { client, queries } from '../lib/sanity';
import type { TermsOfService } from '../types/sanity';

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
  const [termsData, setTermsData] = useState<TermsOfService | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const data = await client.fetch<TermsOfService>(queries.termsOfService);
        setTermsData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching terms of service:', error);
        setLoading(false);
      }
    };

    if (isOpen) {
      fetchTerms();
    }
  }, [isOpen]);

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

  const renderContentBlock = (block: any, index: number) => {
    switch (block.type) {
      case 'subheading':
        return (
          <h4 key={index} className="text-lg font-colfax-medium text-[#4E5A48] mb-2">
            {block.text}
          </h4>
        );
      case 'paragraph':
        return (
          <p key={index} className="text-[#4E5A48]/80 leading-relaxed mb-2">
            {block.text}
          </p>
        );
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside text-[#4E5A48]/80 space-y-1 ml-4 mb-2">
            {block.items?.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

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
                  <h2 className="text-xl md:text-2xl font-canela">
                    {termsData?.title || 'Terms of Service'}
                  </h2>
                  <p className="text-white/80 text-sm font-colfax-regular">
                    {termsData?.subtitle || 'Mona Verde'}
                  </p>
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
              {loading ? (
                <div className="max-w-4xl mx-auto text-center py-12">
                  <p className="text-[#4E5A48]/60"></p>
                </div>
              ) : termsData ? (
                <div className="max-w-4xl mx-auto space-y-8">
                  {/* Introduction */}
                  {termsData.introduction && (
                    <section>
                      <p className="text-[#4E5A48] leading-relaxed">
                        {termsData.introduction}
                      </p>
                    </section>
                  )}

                  {/* Sections */}
                  {termsData.sections?.map((section, sectionIndex) => (
                    <section key={sectionIndex}>
                      <h3 className="text-2xl font-canela text-[#4E5A48] mb-4">
                        {section.heading}
                      </h3>
                      <div className="space-y-4">
                        {section.content?.map((block, blockIndex) => 
                          renderContentBlock(block, blockIndex)
                        )}
                      </div>
                    </section>
                  ))}

                  {/* Contact Information */}
                  {termsData.contactAddress && (
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
                              {termsData.contactAddress.line1}<br />
                              {termsData.contactAddress.line2}<br />
                              {termsData.contactAddress.line3}
                            </p>
                          </div>
                        </div>
                      </div>
                    </section>
                  )}

                  {/* Acknowledgment */}
                  {termsData.acknowledgment && (
                    <section className="border-t border-[#4E5A48]/20 pt-6">
                      <p className="text-[#4E5A48]/60 text-sm leading-relaxed">
                        {termsData.acknowledgment}
                      </p>
                    </section>
                  )}
                </div>
              ) : (
                <div className="max-w-4xl mx-auto text-center py-12">
                  <p className="text-[#4E5A48]/60">No terms of service available.</p>
                </div>
              )}
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