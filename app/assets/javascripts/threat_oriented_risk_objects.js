// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

// @update_threat_source_description = (threat_sources) ->
//   index = $('#threat_source_category').val() - 1
//   $('#threat_source_description').text(threat_sources[index].description)

this.update_threat_source_form = function(is_adversarial) {
  if (is_adversarial) {
    $("#adversarial_capabilities_form").show();
    $("#adversarial_intents_form").show();
    $("#adversarial_targetings_form").show();

    $("#threat_events_form").show();
    $(".adversarial_true").show();
    return $(".adversarial_false").hide();
  } else {
    $("#adversarial_capabilities_form").hide();
    $("#adversarial_intents_form").hide();
    $("#adversarial_targetings_form").hide();

    $("#threat_events_form").show();
    $(".adversarial_true").hide();
    return $(".adversarial_false").show();
  }
};

this.update_capability_description = function(adversarial_capabilities) {
  const index = $('#capability_slider').val() - 1;
  return $('#capability_slider_description').html(
    adversarial_capabilities[index].qualitative +
    "<span class='usa-form-hint'>" +
    adversarial_capabilities[index].description +
    "</span>");
};

this.update_intent_description = function(adversarial_intents) {
  const index = $('#intent_slider').val() - 1;
  return $('#intent_slider_description').html(
    adversarial_intents[index].qualitative +
    "<span class='usa-form-hint'>" +
    adversarial_intents[index].description +
    "</span>");
};

this.update_targeting_description = function(adversarial_targetings) {
  const index = $('#targeting_slider').val() - 1;
  return $('#targeting_slider_description').html(
    adversarial_targetings[index].qualitative +
    "<span class='usa-form-hint'>" +
    adversarial_targetings[index].description +
    "</span>");
};
