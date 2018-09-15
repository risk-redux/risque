class LikelihoodsController < ApplicationController
  before_action :authenticate
  
  def index
    @threat_event_adverse_impact_likelihoods = ThreatEventAdverseImpactLikelihood.all
    @threat_event_initiation_likelihoods = ThreatEventInitiationLikelihood.all
    @threat_event_occurence_likelihoods = ThreatEventOccurenceLikelihood.all
  end
end
