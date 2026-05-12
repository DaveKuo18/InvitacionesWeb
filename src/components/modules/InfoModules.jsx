import { Section } from "../shared/Section.jsx";
import { DressCodeModule } from "./DressCodeModule.jsx";
import { GiftModule } from "./GiftModule.jsx";

export function InfoModules({ config, theme }) {
  if (!config.modules?.dressCode && !config.modules?.gifts) return null;
  return (
    <Section data-capture="extras" className="grid gap-5 md:grid-cols-2">
      {config.modules?.dressCode && <DressCodeModule config={config} theme={theme} />}
      {config.modules?.gifts && <GiftModule config={config} theme={theme} />}
    </Section>
  );
}
