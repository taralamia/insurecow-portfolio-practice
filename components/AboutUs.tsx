import React from "react";

export default function AboutUs() {
  return (
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Background Decorations */}
     <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-green-200/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* ================= HERO ================= */}
        <section className="pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-4xl animate-fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600 mb-6">
              About InsureCow
            </p>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-green-950 mb-8">
              Building Financial Resilience for Farmers Through Innovative
              Insurance Infrastructure
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed text-gray-700 max-w-3xl">
              InsureCow develops AI-powered fintech and insurtech infrastructure
              that enables insurers, financial institutions, and development
              partners to bring insurance protection to underserved agricultural
              communities at scale.
            </p>
          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}
        <section className="pt-16 pb-24 md:pt-20 md:pb-32 border-t border-green-100">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600 mb-4">
                Who We Are
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-green-950 mb-8">
                Deep-Technology Fintech & Insurtech Infrastructure
              </h2>

              <div className="space-y-6 text-lg leading-8 text-gray-700">
                <p>
                  InsureCow is a deep-technology–led fintech and insurtech
                  infrastructure company operating under a global holding
                  structure. We build intelligent systems that help insurers,
                  banks, fintechs, and development organizations expand
                  insurance access to agricultural communities.
                </p>

                <p>
                  Our technology combines artificial intelligence, alternative
                  data, and digital infrastructure to support scalable,
                  efficient, and transparent insurance distribution.
                </p>

                <p>
                  By developing solutions in one of the world's most demanding
                  agricultural markets, we create systems designed for
                  deployment across emerging economies globally.
                </p>
              </div>
            </div>

            {/* Right Structure Panel */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-white/70 backdrop-blur-sm border border-green-100 p-8">
                <h3 className="text-xl font-bold text-green-950 mb-8">
                  Global Structure
                </h3>

                <div className="space-y-8">
                  <div>
                    <p className="text-sm uppercase tracking-wider text-green-600 mb-2">
                      Singapore
                    </p>

                    <h4 className="font-semibold text-lg text-green-900">
                      InsureCow Tech Pte. Ltd.
                    </h4>

                    <p className="text-gray-600 mt-2">
                      Venture capital–backed holding company owning the group's
                      core AI technology, data models, and intellectual
                      property.
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <div className="h-12 w-px bg-green-200" />
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-wider text-green-600 mb-2">
                      Bangladesh
                    </p>

                    <h4 className="font-semibold text-lg text-green-900">
                      InsureCow Ltd.
                    </h4>

                    <p className="text-gray-600 mt-2">
                      Operating company where the platform was built, tested,
                      and scaled alongside insurers, banks, fintechs, and
                      development partners.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= BANGLADESH SECTION ================= */}
        <section className="py-10 md:py-4 border-t border-green-100">
          <div className="max-w-4xl mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600 mb-4">
              Bangladesh Focus
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-green-950 mb-6">
              Bangladesh: The Proving Ground
            </h2>

            <p className="text-xl leading-relaxed text-gray-700">
              A demanding environment that tests systems intended for global
              deployment.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            <div>
              <h3 className="text-5xl font-bold text-green-900 mb-3">17M+</h3>
              <p className="text-sm uppercase tracking-wider text-gray-600">
                Agriculture-Based Households
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-green-900 mb-3">70M+</h3>
              <p className="text-sm uppercase tracking-wider text-gray-600">
                People Connected to Agriculture
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-green-900 mb-3">80%+</h3>
              <p className="text-sm uppercase tracking-wider text-gray-600">
                Households Own Livestock or Poultry
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-green-900 mb-3">
                Millions
              </h3>
              <p className="text-sm uppercase tracking-wider text-gray-600">
                Uninsured Assets
              </p>
            </div>
          </div>

          <div className="max-w-5xl">
            <p className="text-lg leading-8 text-gray-700">
              Bangladesh serves as the primary proving ground for InsureCow's
              technology. Agriculture remains the country's largest employment
              sector, supporting millions of households and livelihoods.
              Livestock and poultry ownership is widespread, yet a significant
              portion of these assets remain undocumented and uninsured. This
              combination of scale, informality, and economic importance makes
              Bangladesh one of the most challenging environments in which to
              build insurance infrastructure intended for global use.
            </p>
          </div>
        </section>

        {/* ================= VISION ================= */}
        <section className="py-24 md:py-32 border-t border-green-100">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600 mb-6">
              Our Vision
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-green-950 mb-10">
              Building Insurance Infrastructure for the Next Billion Farmers
            </h2>

            <p className="text-xl leading-9 text-gray-700">
              What works in Bangladesh can work across emerging agricultural
              markets worldwide. By combining artificial intelligence, fintech,
              and insurance innovation, InsureCow is creating the infrastructure
              needed to expand financial protection to millions of underserved
              households.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
