class StaticController < ApplicationController
  def index
    @adversarial_threat_source_capability = AdversarialThreatSourceCapability
    @adversarial_threat_source_intent = AdversarialThreatSourceIntent
    @adversarial_threat_source_targeting = AdversarialThreatSourceTargeting
    @adverse_impact = AdverseImpact
    @non_adversarial_threat_source_effect = NonAdversarialThreatSourceEffect
    @predisposing_condition_pervasiveness = PredisposingConditionPervasiveness
    @predisposing_condition = PredisposingCondition
    @threat_event_adverse_impact_likelihood = ThreatEventAdverseImpactLikelihood
    @threat_event_impact = ThreatEventImpact
    @threat_event_initiation_likelihood = ThreatEventInitiationLikelihood
    @threat_event_occurence_likelihood = ThreatEventOccurenceLikelihood
    @threat_event_relevance = ThreatEventRelevance
    @threat_event = ThreatEvent
    @threat_source = ThreatSource
    @vulnerability_severity = VulnerabilitySeverity
  end

  def about
    @adversarial_threat_source_capability = AdversarialThreatSourceCapability
    @adversarial_threat_source_intent = AdversarialThreatSourceIntent
    @adversarial_threat_source_targeting = AdversarialThreatSourceTargeting
    @adverse_impact = AdverseImpact
    @non_adversarial_threat_source_effect = NonAdversarialThreatSourceEffect
    @predisposing_condition_pervasiveness = PredisposingConditionPervasiveness
    @predisposing_condition = PredisposingCondition
    @threat_event_adverse_impact_likelihood = ThreatEventAdverseImpactLikelihood
    @threat_event_impact = ThreatEventImpact
    @threat_event_initiation_likelihood = ThreatEventInitiationLikelihood
    @threat_event_occurence_likelihood = ThreatEventOccurenceLikelihood
    @threat_event_relevance = ThreatEventRelevance
    @threat_event = ThreatEvent
    @threat_source = ThreatSource
    @vulnerability_severity = VulnerabilitySeverity
  end
end
