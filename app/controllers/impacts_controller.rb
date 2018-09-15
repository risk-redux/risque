class ImpactsController < ApplicationController
  before_action :authenticate

  def index
    @adverse_impacts = AdverseImpact.all
    @threat_event_impacts = ThreatEventImpact.all
  end
end
