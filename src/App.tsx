
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import PaperSubmission from "./pages/PaperSubmission";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";
import AcceptedPapers from "./pages/AcceptedPapers";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";
import OrganizingCommittee from "./pages/committees/OrganizingCommittee";
import InternationalAdvisory from "./pages/committees/InternationalAdvisory";
import NationalAdvisory from "./pages/committees/NationalAdvisory";
import TechnicalProgram from "./pages/committees/TechnicalProgram";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="about" element={<About />} />
            <Route path="paper-submission" element={<PaperSubmission />} />
            <Route path="registration" element={<Registration />} />
            <Route path="speakers" element={<Speakers />} />
            <Route path="accepted-papers" element={<AcceptedPapers />} />
            <Route path="venue" element={<Venue />} />
            <Route path="contact" element={<Contact />} />
            <Route path="committee">
              <Route path="organizing" element={<OrganizingCommittee />} />
              <Route path="international-advisory" element={<InternationalAdvisory />} />
              <Route path="national-advisory" element={<NationalAdvisory />} />
              <Route path="technical-program" element={<TechnicalProgram />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
