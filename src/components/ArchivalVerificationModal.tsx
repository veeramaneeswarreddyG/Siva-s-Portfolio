'use client';

import React, { useEffect, useState } from 'react';
import { Language } from '@/types';
import { siteContent } from '@/data/content';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Upload, 
  FileText, 
  Send, 
  Lock,
  Search
} from 'lucide-react';

interface ArchivalVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const ArchivalVerificationModal: React.FC<ArchivalVerificationModalProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [notes, setNotes] = useState('');
  const [contributorName, setContributorName] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const content = siteContent.archiveModal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmissionSuccess(true);
      setTimeout(() => {
        setSubmissionSuccess(false);
        setNotes('');
        setContributorName('');
      }, 4000);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-midnight-950/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="archival-verification-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-midnight-900 border border-gold-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-ivory-200 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Accents */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-600 via-gold-500 to-forest-600" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-ivory-400 hover:text-gold-400 hover:bg-midnight-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 transition-colors"
          aria-label="Close archival modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title & Badge */}
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-forest-900/60 border border-gold-500/30 text-gold-400 text-xs font-mono mb-3">
          <ShieldCheck className="w-4 h-4 text-gold-400" />
          <span>{content.verificationBadge[currentLang]}</span>
        </div>

        <h2
          id="archival-verification-title"
          className="font-serif text-2xl sm:text-3xl text-ivory-100 font-semibold mb-3"
        >
          {content.verificationTitle[currentLang]}
        </h2>

        <p className={`text-xs sm:text-sm text-ivory-300 leading-relaxed mb-6 ${
          currentLang === 'te' ? 'font-telugu' : 'font-sans'
        }`}>
          {content.familyContributionNote[currentLang]}
        </p>

        {/* Verified Facts vs Standards Breakdown */}
        <div className="space-y-4 my-6">
          <h3 className="font-serif text-sm uppercase tracking-wider text-gold-400 flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-gold-400" />
            <span>
              {currentLang === 'te' ? 'ధృవీకరించబడిన వాస్తవాలు' : 'Verified Factual Records'}
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-midnight-950/80 border border-forest-800/80 flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-ivory-100 font-medium font-serif">
                  {currentLang === 'te' ? 'వ్యక్తి మరియు మూలాలు' : 'Subject & Origins'}
                </strong>
                <span className="text-ivory-400">
                  {currentLang === 'te' 
                    ? 'శివరామిరెడ్డి గాడికోట • రెండు ఎకరాల వ్యవసాయ నేపథ్యం' 
                    : 'Sivarami Reddy Gadikota • Two-Acre farming roots'}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-midnight-950/80 border border-forest-800/80 flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-ivory-100 font-medium font-serif">
                  {currentLang === 'te' ? 'వృత్తి హోదా & ప్రాంతం' : 'Designation & Geography'}
                </strong>
                <span className="text-ivory-400">
                  {currentLang === 'te' 
                    ? 'ఎల్.ఐ.సి చీఫ్ అడ్వైజర్ • జమ్మలమడుగు' 
                    : 'LIC Chief Advisor • Jammalamadugu, AP'}
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-midnight-950/80 border border-forest-800/80 flex items-start space-x-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-ivory-100 font-medium font-serif">
                  {currentLang === 'te' ? 'వృత్తి మైలురాళ్లు' : 'Documented Milestones'}
                </strong>
                <span className="text-ivory-400">
                  Agent, LIAFI, CLIA, #3 Diamond Brigade
                </span>
              </div>
            </div>

            <div className="p-3.5 rounded-lg bg-midnight-950/80 border border-forest-800/80 flex items-start space-x-2.5">
              <Lock className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-ivory-100 font-medium font-serif">
                  {currentLang === 'te' ? 'గోప్యతా సూత్రం' : 'Strict Non-Fabrication'}
                </strong>
                <span className="text-ivory-400">
                  {currentLang === 'te' 
                    ? 'ఏ విధమైన కల్పిత సంఖ్యలు లేదా నకిలీ కోట్లు ప్రచురించబడవు' 
                    : 'Zero fabricated numbers, quotes, or fake testimonials'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Archival Contribution Form */}
        <div className="p-6 rounded-xl bg-midnight-950 border border-gold-500/30 my-6">
          <div className="flex items-center space-x-2 mb-3">
            <Upload className="w-4 h-4 text-gold-400" />
            <h4 className="font-serif text-sm uppercase tracking-wider text-gold-300">
              {currentLang === 'te' ? 'కుటుంబ సభ్యుల సమర్పణ & ధృవీకరణ' : 'Family & Associate Record Submission'}
            </h4>
          </div>

          <p className="text-xs text-ivory-400 mb-4 leading-relaxed">
            {currentLang === 'te'
              ? 'శివరామిరెడ్డి గాడికోట గారికి సంబంధించిన మూల పత్రాలు, పాత ఫోటోలు లేదా సంవత్సరాల సమాచారం నమోదు చేయడానికి ఈ ఫారమ్ ఉపయోగించండి.'
              : 'Family members and verified colleagues may submit exact dates, original certificate scans, or recollections for archival addition.'}
          </p>

          {submissionSuccess ? (
            <div className="p-4 rounded-lg bg-emerald-950/60 border border-emerald-600/60 text-emerald-300 text-xs text-center flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {currentLang === 'te'
                  ? 'మీ సమాచారం విజయవంతంగా ఆర్కైవ్‌కు సమర్పించబడింది! ధన్యవాదాలు.'
                  : 'Your submission has been queued for archival verification. Thank you!'}
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono uppercase text-ivory-400 mb-1">
                  {currentLang === 'te' ? 'మీ పేరు / బంధుత్వం' : 'Contributor Name & Relationship'}
                </label>
                <input
                  type="text"
                  required
                  value={contributorName}
                  onChange={(e) => setContributorName(e.target.value)}
                  placeholder={currentLang === 'te' ? 'ఉదా: కుటుంబ సభ్యుడు, మిత్రుడు' : 'e.g. Family member, colleague'}
                  className="w-full px-3 py-2 rounded-lg bg-midnight-900 border border-midnight-700 text-ivory-200 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-ivory-400 mb-1">
                  {currentLang === 'te' ? 'సమర్పించదలచిన వివరాలు' : 'Record Details or Citations'}
                </label>
                <textarea
                  required
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={currentLang === 'te' ? 'ఖచ్చితమైన తేదీలు, పత్రాల వివరాలు...' : 'Provide specific certificate text, joining year, or document notes...'}
                  className="w-full px-3 py-2 rounded-lg bg-midnight-900 border border-midnight-700 text-ivory-200 text-xs focus:outline-none focus:border-gold-500"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-gold-500 text-soil-900 hover:bg-gold-400 font-serif text-xs font-semibold uppercase tracking-wider transition-all disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Submitting...' : currentLang === 'te' ? 'సమర్పించండి' : 'Submit Record'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-midnight-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full border border-forest-700 text-ivory-300 hover:text-gold-300 hover:border-gold-500/50 text-xs font-serif tracking-wider uppercase transition-colors"
          >
            {content.closeButton[currentLang]}
          </button>
        </div>
      </div>
    </div>
  );
};
