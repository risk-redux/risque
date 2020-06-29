class ThreatOrientedRiskObjectsController < ApplicationController
  def index
    @threat_oriented_risk_objects = ThreatOrientedRiskObject.all
  end

  def show
    @threat_oriented_risk_object = ThreatOrientedRiskObject.find(params[:id])
  end

  def new
    @threat_oriented_risk_object = ThreatOrientedRiskObject.new

    @author = Account.find(session[:user_id])

    @threat_sources = ThreatSource.all

    @adversarial_capabilities = AdversarialThreatSourceCapability.all.sort_by &:quantitative
    @adversarial_intents = AdversarialThreatSourceIntent.all.sort_by &:quantitative
    @adversarial_targetings = AdversarialThreatSourceTargeting.all.sort_by &:quantitative

    @threat_events = ThreatEvent.all
  end

  def edit
    @threat_oriented_risk_object = ThreatOrientedRiskObject.find(params[:id])
  end

  def create
  end

  def update
  end

  def destroy
    @threat_oriented_risk_object = ThreatOrientedRiskObject.find(params[:id])
    @threat_oriented_risk_object.destroy

    redirect_to threat_oriented_risk_objects_path()
  end

  private

  def risk_object_params
    params.require(:threat_oriented_risk_object).permit(:title)
  end
end
