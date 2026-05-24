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
import MetaHarness from "./pages/MetaHarness.tsx";
import MetaHarnessCourse from "./pages/MetaHarnessCourse.tsx";
import MetaHarnessTalk from "./pages/MetaHarnessTalk.tsx";
import Workflows from "./pages/Workflows.tsx";
import WorkflowCompetitorIntelligence from "./pages/WorkflowCompetitorIntelligence.tsx";
import WorkflowPhotoToListing from "./pages/WorkflowPhotoToListing.tsx";
import WorkflowAiCreatorPersona from "./pages/WorkflowAiCreatorPersona.tsx";
import WorkflowOnePersonBusiness from "./pages/WorkflowOnePersonBusiness.tsx";
import Research from "./pages/Research.tsx";
import Blog from "./pages/Blog.tsx";
import BlogCaptchaWorkflow from "./pages/BlogCaptchaWorkflow.tsx";
import BlogDelegatedIntelligence from "./pages/BlogDelegatedIntelligence.tsx";
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
          <Route path="/meta-harness" element={<MetaHarness />} />
          <Route path="/meta-harness-course" element={<MetaHarnessCourse />} />
          <Route path="/meta-harness-talk" element={<MetaHarnessTalk />} />
          <Route path="/workflows" element={<Workflows />} />
          <Route path="/workflows/competitor-intelligence" element={<WorkflowCompetitorIntelligence />} />
          <Route path="/workflows/photo-to-listing" element={<WorkflowPhotoToListing />} />
          <Route path="/workflows/ai-creator-persona" element={<WorkflowAiCreatorPersona />} />
          <Route path="/workflows/one-person-business" element={<WorkflowOnePersonBusiness />} />
          <Route path="/research" element={<Research />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/captcha-meatbag-checkpoint" element={<BlogCaptchaWorkflow />} />
          <Route path="/blog/delegated-intelligence-os" element={<BlogDelegatedIntelligence />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
