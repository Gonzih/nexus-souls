import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import CaseStudyTemporalStorage from "./pages/CaseStudyTemporalStorage.tsx";
import CaseStudyTemporalSemantic from "./pages/CaseStudyTemporalSemantic.tsx";
import CaseStudyIdentityGuardian from "./pages/CaseStudyIdentityGuardian.tsx";
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
          <Route path="/case-study/ai-malpractice" element={<CaseStudy />} />
          <Route path="/case-study/temporal-storage" element={<CaseStudyTemporalStorage />} />
          <Route path="/case-study/temporal-semantic" element={<CaseStudyTemporalSemantic />} />
          <Route path="/case-study/identity-guardian" element={<CaseStudyIdentityGuardian />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
