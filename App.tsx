import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Auth from "./pages/Auth.tsx";
import FamilyDashboard from "./pages/FamilyDashboard.tsx";
import PatientsPage from "./pages/PatientsPage.tsx";
import CaregiversPage from "./pages/CaregiversPage.tsx";
import AlertsPage from "./pages/AlertsPage.tsx";
import SOSPage from "./pages/SOSPage.tsx";
import CaregiverDashboard from "./pages/CaregiverDashboard.tsx";
import CaregiverTasksPage from "./pages/CaregiverTasksPage.tsx";
import CaregiverProfilePage from "./pages/CaregiverProfilePage.tsx";
import NeighboursPage from "./pages/NeighboursPage.tsx";
import HealthChatPage from "./pages/HealthChatPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<FamilyDashboard />} />
          <Route path="/dashboard/patients" element={<PatientsPage />} />
          <Route path="/dashboard/caregivers" element={<CaregiversPage />} />
          <Route path="/dashboard/alerts" element={<AlertsPage />} />
          <Route path="/dashboard/sos" element={<SOSPage />} />
          <Route path="/dashboard/neighbours" element={<NeighboursPage />} />
          <Route path="/dashboard/health-chat" element={<HealthChatPage />} />
          <Route path="/caregiver" element={<CaregiverDashboard />} />
          <Route path="/caregiver/tasks" element={<CaregiverTasksPage />} />
          <Route path="/caregiver/profile" element={<CaregiverProfilePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
