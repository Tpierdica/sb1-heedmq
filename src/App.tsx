import React from 'react';
import { Summary } from './components/Summary';
import { ClinicDirectory } from './components/ClinicDirectory';
import { EmergencyServices } from './components/EmergencyServices';
import { AppointmentsSection } from './components/AppointmentsSection';
import { PetShopDeals } from './components/PetShopDeals';
import { CommentSection } from './components/CommentSection';
import { BackgroundPatterns } from './components/BackgroundPatterns';
import { useClinics } from './hooks/useClinics';
import { theme } from './styles/theme';
import { LoadingState } from './components/LoadingState';
import { ErrorState } from './components/ErrorState';
import { Header } from './components/Header';

function App() {
  const { data: clinics, isLoading, isError, error, refetch } = useClinics();

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState error={error as Error} onRetry={refetch} />;

  return (
    <div className="min-h-screen" style={{ background: theme.colors.gradient }}>
      <BackgroundPatterns />
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <Summary />
        {clinics && <ClinicDirectory clinics={clinics} />}
        {clinics && <EmergencyServices clinics={clinics} />}
        {clinics && <AppointmentsSection clinics={clinics} />}
        <PetShopDeals />
        <CommentSection />
      </main>

      <footer className="backdrop-blur-sm border-t border-primary/20 mt-8 sm:mt-12" style={{ background: theme.colors.gradientTransparent }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <p className="text-center text-primary text-sm sm:text-base">
            © {new Date().getFullYear()} <strong>PetPals</strong> Abu Dhabi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;