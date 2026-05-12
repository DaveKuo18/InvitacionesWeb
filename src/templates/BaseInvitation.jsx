import { HeroModule } from "../components/modules/HeroModule.jsx";
import { CountdownModule } from "../components/modules/CountdownModule.jsx";
import { StoryModule } from "../components/modules/StoryModule.jsx";
import { DetailsModule } from "../components/modules/DetailsModule.jsx";
import { ItineraryModule } from "../components/modules/ItineraryModule.jsx";
import { GalleryModule } from "../components/modules/GalleryModule.jsx";
import { InfoModules } from "../components/modules/InfoModules.jsx";
import { RsvpModule } from "../components/modules/RsvpModule.jsx";
import { MusicModule } from "../components/modules/MusicModule.jsx";
import { getTheme, hexToRgba } from "../lib/colors.js";

export function BaseInvitation({ config }) {
  const theme = getTheme(config);

  return (
    <main
      className="min-h-screen overflow-hidden antialiased"
      style={{
        background: `radial-gradient(circle at 8% 4%, ${hexToRgba(theme.primary, 0.24)}, transparent 30rem), radial-gradient(circle at 90% 16%, ${hexToRgba(theme.secondary, 0.18)}, transparent 26rem), linear-gradient(180deg, ${theme.background}, #fff 38%, ${theme.background})`,
        color: theme.text,
      }}
    >
      {config.modules?.music && <MusicModule config={config} theme={theme} />}
      <HeroModule config={config} theme={theme} />
      {config.modules?.countdown && <CountdownModule config={config} theme={theme} />}
      {config.modules?.story && <StoryModule config={config} theme={theme} />}
      {config.modules?.details && <DetailsModule config={config} theme={theme} />}
      {config.modules?.itinerary && <ItineraryModule config={config} theme={theme} />}
      {config.modules?.gallery && <GalleryModule config={config} theme={theme} />}
      <InfoModules config={config} theme={theme} />
      {config.modules?.rsvp && <RsvpModule config={config} theme={theme} />}

      <footer className="px-5 pb-14 text-center">
        <img src={config.brand?.logo || "/brand/invitaciones-web-logo.svg"} alt={config.brand?.name || "Invitaciones Web"} className="mx-auto mb-5 h-16 w-16 object-contain" />
        <p className="font-serif text-3xl" style={{ color: theme.primaryDark }}>{config.title}</p>
        <p className="mt-3 text-sm uppercase tracking-[0.2em]" style={{ color: theme.muted }}>{config.displayDate}</p>
        <p className="mt-6 text-sm" style={{ color: theme.muted }}>
          Invitacion creada por <strong>{config.brand?.name || "Invitaciones Web"}</strong> {config.brand?.instagram ? `· ${config.brand.instagram}` : ""}
        </p>
      </footer>
    </main>
  );
}
