import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { getDemoByTemplate } from "../lib/getDemoByTemplate.js";
import { getInvitationBySlug } from "../lib/getInvitationBySlug.js";
import { getInvitationSlugFromHost } from "../lib/getInvitationSlugFromHost.js";
import { getTemplateComponent } from "../lib/templateRegistry.js";
import { Landing } from "./Landing.jsx";
import { NotFound } from "./NotFound.jsx";

function RenderInvitation({ config }) {
  if (!config || config.status === "inactive") return <NotFound />;
  const Template = getTemplateComponent(config.template);
  if (!Template) return <NotFound />;
  return <Template config={config} />;
}

function DemoRoute() {
  const { template } = useParams();
  return <RenderInvitation config={getDemoByTemplate(template)} />;
}

function InvitationRoute() {
  const { slug } = useParams();
  return <RenderInvitation config={getInvitationBySlug(slug)} />;
}

function HomeRoute() {
  const subdomainSlug = getInvitationSlugFromHost();

  if (subdomainSlug) {
    return <RenderInvitation config={getInvitationBySlug(subdomainSlug)} />;
  }

  return <Landing />;
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/demo/:template" element={<DemoRoute />} />
        <Route path="/i/:slug" element={<InvitationRoute />} />
        <Route path="/demo" element={<Navigate to="/demo/quince-glam" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
