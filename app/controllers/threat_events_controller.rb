class ThreatEventsController < ApplicationController
  def index
    @adversarial_threat_events = ThreatEvent.where(is_adversarial: true)
    @non_adversarial_threat_events = ThreatEvent.where(is_adversarial: false)
  end
end
