module ThreatOrientedRiskObjectsHelper
  def meta_form()
    render "threat_oriented_risk_objects/shared/meta_form"
  end

  def threat_source_form(threat_sources)
    render "threat_oriented_risk_objects/shared/threat_source_form", threat_sources: threat_sources
  end

  def adversarial_capabilities_form(adversarial_capabilities)
    render "threat_oriented_risk_objects/shared/adversarial_capabilities_form", adversarial_capabilities: adversarial_capabilities
  end

  def adversarial_intents_form(adversarial_intents)
    render "threat_oriented_risk_objects/shared/adversarial_intents_form", adversarial_intents: adversarial_intents
  end

  def adversarial_targetings_form(adversarial_targetings)
    render "threat_oriented_risk_objects/shared/adversarial_targetings_form", adversarial_targetings: adversarial_targetings
  end

  def threat_events_form(threat_events)
    render "threat_oriented_risk_objects/shared/threat_events_form", threat_events: threat_events
  end
end
