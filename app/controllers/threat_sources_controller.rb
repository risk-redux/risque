class ThreatSourcesController < ApplicationController
  def index
    @threat_sources = ThreatSource.all
    @adversarial_threat_source_capabilities = AdversarialThreatSourceCapability.all
    @adversarial_threat_source_intents = AdversarialThreatSourceIntent.all
    @adversarial_threat_source_targetings = AdversarialThreatSourceTargeting.all
    @non_adversarial_threat_source_effects = NonAdversarialThreatSourceEffect.all
  end
end
