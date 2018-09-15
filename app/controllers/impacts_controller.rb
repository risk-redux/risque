class ImpactsController < ApplicationController
  def index
    @adverse_impacts = AdverseImpact.all
    @threat_event_impacts = ThreatEventImpact.all
  end
end
