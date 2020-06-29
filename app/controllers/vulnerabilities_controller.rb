class VulnerabilitiesController < ApplicationController
  def index
    @vulnerability_severities = VulnerabilitySeverity.all
    @predisposing_conditions = PredisposingCondition.all
    @predisposing_condition_pervasivenesses = PredisposingConditionPervasiveness.all
  end
end
