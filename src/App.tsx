import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import SolutionsPage from './pages/SolutionsPage';
import KnowledgeBankPage from './pages/KnowledgeBankPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import { whatsappNumber } from './config/firmConfig';
import type { KnowledgeSubTab, NavigateFn, ProblemSolution, TabType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [kbSubTab, setKbSubTab] = useState<KnowledgeSubTab>('calculators');
  const [selectedProblem, setSelectedProblem] = useState<ProblemSolution | null>(null);

  const navigateTo: NavigateFn = (tab, subTab) => {
    setActiveTab(tab);
    if (subTab) setKbSubTab(subTab);
    setSelectedProblem(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProblemPage = (problem: ProblemSolution) => {
    setSelectedProblem(problem);
    setActiveTab('solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppConsultation = (customTopic?: string) => {
    const text = customTopic
      ? `Hello CA Haranath Babu Sir, I would like to schedule a consultation regarding: *${customTopic}*.`
      : 'Hello CA Haranath Babu Sir, I visited the Haranath & Associates website and would like to book a professional consultation.';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <Layout activeTab={activeTab} navigateTo={navigateTo} onWhatsApp={handleWhatsAppConsultation}>
      {activeTab === 'home' && (
        <HomePage navigateTo={navigateTo} openProblemPage={openProblemPage} onWhatsApp={handleWhatsAppConsultation} />
      )}
      {activeTab === 'about' && <AboutPage />}
      {activeTab === 'services' && <ServicesPage onWhatsApp={handleWhatsAppConsultation} />}
      {activeTab === 'solutions' && (
        <SolutionsPage
          selectedProblem={selectedProblem}
          setSelectedProblem={setSelectedProblem}
          onWhatsApp={handleWhatsAppConsultation}
        />
      )}
      {activeTab === 'knowledge' && (
        <KnowledgeBankPage kbSubTab={kbSubTab} setKbSubTab={setKbSubTab} onWhatsApp={handleWhatsAppConsultation} />
      )}
      {activeTab === 'careers' && <CareersPage />}
      {activeTab === 'contact' && <ContactPage onWhatsApp={handleWhatsAppConsultation} />}
    </Layout>
  );
}
