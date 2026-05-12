import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useParams } from "react-router-dom";
import { getDemoByTemplate } from "./lib/getDemoByTemplate.js";
import { getInvitationBySlug } from "./lib/getInvitationBySlug.js";
import { getTemplateComponent } from "./lib/templateRegistry.js";
import { Landing } from "./app/Landing.jsx";
import { NotFound } from "./app/NotFound.jsx";
import "./index.css";

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

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo/:template" element={<DemoRoute />} />
        <Route path="/i/:slug" element={<InvitationRoute />} />
        <Route path="/demo" element={<Navigate to="/demo/quince-glam" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
