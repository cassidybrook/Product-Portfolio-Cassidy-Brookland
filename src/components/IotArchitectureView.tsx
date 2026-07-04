import { SectionHeader, SectionShell } from './ui/SectionShell';

const textStyle = { fontFamily: 'sans-serif' } as const;

export function IotArchitectureView() {
  return (
    <div className="space-y-8">
      <SectionShell variant="brand" padding="lg">
        <SectionHeader
          eyebrow="Architecture"
          title="How I Architect IoT Systems"
          subtitle="Reference connectivity paths and the decision framework I use to choose between them."
        />
      </SectionShell>

      <SectionShell>
        <SectionHeader
          eyebrow="Reference architecture"
          title="LoRaWAN and AWS direct connect in one shared system"
        />
        <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#1b1e24] p-4">
          <svg width="100%" viewBox="0 0 680 630" role="img" xmlns="http://www.w3.org/2000/svg">
            <title>
              IoT reference architecture comparing a LoRaWAN path through TTN or ChirpStack against a direct
              connect path through AWS IoT Core
            </title>
            <desc>
              Two parallel connectivity paths converge into a shared application and data layer. Left path:
              LoRaWAN sensor to LoRaWAN gateway to network server, TTN or ChirpStack, to application server.
              Right path: WiFi or cellular sensor directly to AWS IoT Core.
            </desc>
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="8"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path
                  d="M2 1L8 5L2 9"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </marker>
            </defs>

            <text x="180" y="24" textAnchor="middle" fontSize="14" fontWeight="600" fill="#D1FAE5" style={textStyle}>
              LoRaWAN path
            </text>
            <text x="500" y="24" textAnchor="middle" fontSize="14" fontWeight="600" fill="#FBCFE8" style={textStyle}>
              AWS direct connect path
            </text>

            <rect x="40" y="70" width="280" height="56" rx="8" fill="#052E2B" stroke="#10B981" strokeWidth="0.7" />
            <text x="180" y="88" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="600" fill="#A7F3D0" style={textStyle}>
              LoRaWAN sensor
            </text>
            <text x="180" y="106" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#6EE7B7" style={textStyle}>
              Battery powered, long range
            </text>

            <rect x="360" y="70" width="280" height="56" rx="8" fill="#3A0E28" stroke="#F472B6" strokeWidth="0.7" />
            <text x="500" y="88" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="600" fill="#FBCFE8" style={textStyle}>
              WiFi or cellular sensor
            </text>
            <text x="500" y="106" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#F9A8D4" style={textStyle}>
              Higher power, more bandwidth
            </text>

            <line x1="180" y1="126" x2="180" y2="186" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <line x1="500" y1="126" x2="500" y2="186" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            <rect x="40" y="186" width="280" height="56" rx="8" fill="#052E2B" stroke="#10B981" strokeWidth="0.7" />
            <text x="180" y="204" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="600" fill="#A7F3D0" style={textStyle}>
              LoRaWAN gateway
            </text>
            <text x="180" y="222" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#6EE7B7" style={textStyle}>
              Packet forwarder
            </text>

            <rect x="360" y="186" width="280" height="56" rx="8" fill="#3A0E28" stroke="#F472B6" strokeWidth="0.7" />
            <text x="500" y="204" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="600" fill="#FBCFE8" style={textStyle}>
              AWS IoT Core
            </text>
            <text x="500" y="222" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#F9A8D4" style={textStyle}>
              Broker, shadow, rules engine
            </text>

            <line x1="180" y1="242" x2="180" y2="302" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            <rect x="40" y="302" width="280" height="56" rx="8" fill="#052E2B" stroke="#10B981" strokeWidth="0.7" />
            <text x="180" y="320" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="600" fill="#A7F3D0" style={textStyle}>
              Network server
            </text>
            <text x="180" y="338" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#6EE7B7" style={textStyle}>
              TTN or ChirpStack
            </text>

            <line x1="180" y1="358" x2="180" y2="418" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            <rect x="40" y="418" width="280" height="56" rx="8" fill="#052E2B" stroke="#10B981" strokeWidth="0.7" />
            <text x="180" y="436" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="600" fill="#A7F3D0" style={textStyle}>
              Application server
            </text>
            <text x="180" y="454" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#6EE7B7" style={textStyle}>
              Payload decode, MQTT out
            </text>

            <path d="M180 474 L180 500 L280 500 L280 534" fill="none" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />
            <path d="M500 242 L500 500 L430 500 L430 534" fill="none" stroke="#94A3B8" strokeWidth="1.5" markerEnd="url(#arrow)" />

            <rect x="190" y="534" width="300" height="56" rx="8" fill="#1E293B" stroke="#60A5FA" strokeWidth="0.7" />
            <text x="340" y="552" textAnchor="middle" dominantBaseline="central" fontSize="14" fontWeight="600" fill="#BFDBFE" style={textStyle}>
              Application and data layer
            </text>
            <text x="340" y="570" textAnchor="middle" dominantBaseline="central" fontSize="12" fill="#93C5FD" style={textStyle}>
              Dashboards, storage, alerts
            </text>
          </svg>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionHeader eyebrow="Decision framework" title="How I choose between connectivity paths" />
        <div className="grid gap-3">
          <article className="glass-panel-hover rounded-xl p-4 sm:p-5">
            <h4 className="text-sm font-semibold text-brand-300">When to reach for AWS IoT Core direct connect</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Devices with reliable power and either WiFi or cellular connectivity, where low latency matters, and where deep integration with the rest of an AWS stack is valuable, device shadows for state sync, the rules engine for routing, tight IAM level security per device. This is the right call for something like a smart building sensor on mains power, or a payment terminal that needs a fast, direct round trip.
            </p>
          </article>

          <article className="glass-panel-hover rounded-xl p-4 sm:p-5">
            <h4 className="text-sm font-semibold text-emerald-300">
              When to reach for LoRaWAN through TTN or ChirpStack
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Devices that are battery powered, need multi year battery life, and are spread across distances cellular or WiFi can't reasonably cover, a grain silo in a field, a collar on livestock, a water meter at the edge of a property. The tradeoff is bandwidth and latency, LoRaWAN payloads are tiny and messages are infrequent by design, so it's the wrong choice for anything needing real time control, but it's the only sane option when power and range are the binding constraints.
            </p>
          </article>

          <article className="glass-panel-hover rounded-xl p-4 sm:p-5">
            <h4 className="text-sm font-semibold text-sky-300">The judgment call in the middle</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              The actual decision isn't really which protocol is better, it's reading which constraint dominates for a given device. Power budget and physical distance push toward LoRaWAN. Latency and data volume push toward direct connect. A lot of real deployments end up hybrid, exactly like the diagram above, LoRaWAN at the edge for the sensors that need it, feeding into the same cloud application layer that an AWS IoT Core stack also feeds, so the business logic downstream doesn't need to care which path the data came in on.
            </p>
          </article>
        </div>
      </SectionShell>
    </div>
  );
}
