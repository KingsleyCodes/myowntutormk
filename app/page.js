"use client";

import { useState } from 'react';
import WhySummerMatters from '@/components/WhySummerMatters';
import Subjects from '@/components/Subjects';
import WhatsIncluded from '@/components/WhatsIncluded';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import WhyParentsChoose from '@/components/WhyParentsChoose';
import Tutors from '@/components/Tutors';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import ApplicationModal from '@/components/ApplicationModal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import StatCard from '@/components/ui/StatCard';
import FeatureCard from '@/components/ui/FeatureCard';
import TrustBar from '@/components/TrustBar';
import GuaranteePromise from '@/components/GuaranteePromise';
import CurriculumAlignment from '@/components/CurriculumAlignment';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <div>
        <Navbar onOpenModal={() => setIsModalOpen(true)} />
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        <TrustBar />
        <WhySummerMatters />
        <Subjects onOpenModal={() => setIsModalOpen(true)} />
        <WhatsIncluded />
        <HowItWorks />
        <GuaranteePromise />
        <Testimonials />
         <CurriculumAlignment />
        <WhyParentsChoose />
        <Tutors />
       <FAQ />
        <FinalCTA onOpenModal={() => setIsModalOpen(true)} />
      </div>

      <Footer />

      {/* The Pop-Up Modal */}
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}