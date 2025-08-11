


import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { Footer } from './components/Footer';
import { PricingPage } from './components/PricingPage';
import { Page } from './types';
import { ReviewsPage } from './components/ReviewsPage';
import { CalendarModal } from './components/CalendarModal';
import { VideoModal } from './components/VideoModal';
import { PlatformPage } from './components/PlatformPage';
import { SolutionsPage } from './components/SolutionsPage';
import { HelpCenterPage } from './components/HelpCenterPage';
import { BlogPage } from './components/BlogPage';
import { UseCasesPage } from './components/UseCasesPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { LimitedUseDisclosurePage } from './components/LimitedUseDisclosurePage';
import { UserDataDeletionPage } from './components/UserDataDeletionPage';
import { AboutPage } from './components/AboutPage';
import { CareersPage } from './components/CareersPage';
import { ApplicationPage } from './components/ApplicationPage';
import { NewsPage } from './components/NewsPage';
import { ChangelogPage } from './components/ChangelogPage';
import { WhiteLabelPage } from './components/WhiteLabelPage';
import { DemoVideosPage } from './components/DemoVideosPage';
import { ReferralProgramPage } from './components/ReferralProgramPage';
import { GuidesPage } from './components/GuidesPage';
import { ROICalculatorPage } from './components/ROICalculatorPage';
import { FairUsePolicyPage } from './components/FairUsePolicyPage';
import { IndustryHallOfFamePage } from './components/IndustryHallOfFamePage';
import { WaitlistModal } from './components/WaitlistModal';
import { StatusPage } from './components/StatusPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isCalendarModalOpen, setCalendarModalOpen] = useState(false);
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);
  const [isWaitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const navigateToApplication = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    navigateTo('application');
  };

  const openCalendarModal = () => setCalendarModalOpen(true);
  const closeCalendarModal = () => setCalendarModalOpen(false);

  const openVideoModal = () => setVideoModalOpen(true);
  const closeVideoModal = () => setVideoModalOpen(false);

  const openWaitlistModal = () => setWaitlistModalOpen(true);
  const closeWaitlistModal = () => setWaitlistModalOpen(false);

  const pageProps = { navigateTo, openCalendarModal, openVideoModal, openWaitlistModal };

  const renderPage = () => {
    switch (currentPage) {
      case 'pricing':
        return <PricingPage {...pageProps} />;
      case 'reviews':
        return <ReviewsPage {...pageProps} />;
      case 'platform':
        return <PlatformPage {...pageProps} />;
      case 'solutions':
        return <SolutionsPage {...pageProps} />;
      case 'help-center':
        return <HelpCenterPage {...pageProps} />;
      case 'blog':
        return <BlogPage {...pageProps} />;
      case 'news':
        return <NewsPage {...pageProps} />;
      case 'use-cases':
        return <UseCasesPage {...pageProps} />;
      case 'about':
        return <AboutPage {...pageProps} />;
      case 'career':
        return <CareersPage {...pageProps} navigateToApplication={navigateToApplication} />;
      case 'application':
        return <ApplicationPage {...pageProps} jobTitle={selectedJobTitle} />;
      case 'terms-of-services':
        return <TermsOfServicePage {...pageProps} />;
      case 'privacy-policy':
        return <PrivacyPolicyPage {...pageProps} />;
      case 'fair-use-policy':
        return <FairUsePolicyPage {...pageProps} />;
      case 'limited-use-disclosure':
        return <LimitedUseDisclosurePage {...pageProps} />;
      case 'user-data-deletion':
        return <UserDataDeletionPage {...pageProps} />;
      case 'changelog':
        return <ChangelogPage {...pageProps} />;
      case 'whitelabel':
        return <WhiteLabelPage {...pageProps} openWaitlistModal={openWaitlistModal} />;
      case 'guides':
        return <GuidesPage {...pageProps} />;
      case 'demo-videos':
        return <DemoVideosPage {...pageProps} />;
      case 'referral-program':
        return <ReferralProgramPage {...pageProps} />;
      case 'roi-calculator':
        return <ROICalculatorPage {...pageProps} />;
      case 'industry-hall-of-fame':
        return <IndustryHallOfFamePage {...pageProps} />;
      case 'status':
        return <StatusPage {...pageProps} />;
      // Add cases for other pages here as they are built
      // For now, most will default to home, but the navigation will work.
      case 'home':
      default:
        return <HomePage {...pageProps} />;
    }
  };

  return (
    <div className="h-full w-full bg-white">
      <CalendarModal isOpen={isCalendarModalOpen} onClose={closeCalendarModal} />
      <VideoModal isOpen={isVideoModalOpen} onClose={closeVideoModal} />
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={closeWaitlistModal} />
      <Header {...pageProps} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer {...pageProps} />
    </div>
  );
};

export default App;