import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  // I really don't like Javascript...
  // Fortunately the scales offered up by SP 800-30 are relatively consistent
  // in terms of how they map quantitative values to qualitative ones. I just
  // have to make sure that I consistently load up my arrays.
  map_quantitative(val) {
    let index_adjust = 0;

    switch(val) {
      // "Very Low"
      case "1":
        index_adjust = 4;
        break;
      // "Low"
      case "2":
        index_adjust = 3;
        break;
      case "3":
        index_adjust = 3;
        break;
      case "4":
        index_adjust = 3;
        break;
      // "Moderate"
      case "5":
        index_adjust = 2;
        break;
      case "6":
        index_adjust = 2;
        break;
      case "7":
        index_adjust = 2;
        break;
      // "High"
      case "8":
        index_adjust = 1;
        break;
      case "9":
        index_adjust = 1;
        break;
      // "Very High"
      case "10":
        index_adjust = 0;
        break;
      // Default to "Very Low".
      default:
        index_adjust = 4;
        break;
    }

    return index_adjust;
  }

  tweak_title_form() {
  }

  tweak_finding_form() {
    let finding = $("#finding").val();
    
    if(finding == "") {    
      $("#finding-severity-form-group").hide();
    } else {
      $("#finding-severity-form-group").show();

      let finding_severity = $("#finding-severity").val();
      let finding_severity_object = VULNERABILITY_SEVERITY[this.map_quantitative(finding_severity)];

      $("#finding-severity-prose").html(`<strong>${finding_severity_object["qualitative"]} (${finding_severity})</strong> <em>${finding_severity_object["description"]}</em>`);
    }
  }

  tweak_adversarial_threat_source_characteristics_form() {
    // ADVERSARIAL_THREAT_SOURCE_CAPABILITY
    let capability = $("#adversarial-capability").val();
    let capability_object = ADVERSARIAL_THREAT_SOURCE_CAPABILITY[this.map_quantitative(capability)];

    $("#capability-prose").html(`<strong>${capability_object["qualitative"]} (${capability})</strong> <em>${capability_object["description"]}</em>`);

    // ADVERSARIAL_THREAT_SOURCE_INTENT
    let intent = $("#adversarial-intent").val();
    let intent_object = ADVERSARIAL_THREAT_SOURCE_INTENT[this.map_quantitative(intent)];

    $("#intent-prose").html(`<strong>${intent_object["qualitative"]} (${intent})</strong> <em>${intent_object["description"]}</em>`);

    // ADVERSARIAL_THREAT_SOURCE_TARGETING
    let targeting = $("#adversarial-targeting").val();
    let targeting_object = ADVERSARIAL_THREAT_SOURCE_TARGETING[this.map_quantitative(targeting)];

    $("#targeting-prose").html(`<strong>${targeting_object["qualitative"]} (${targeting})</strong> <em>${targeting_object["description"]}</em>`);

    // THREAT_EVENT_INITIATION_LIKELIHOOD
    let likelihood = $("#adversarial-event-initiation").val();
    let likelihood_object = THREAT_EVENT_INITIATION_LIKELIHOOD[this.map_quantitative(likelihood)];

    $("#adversarial-event-initiation-prose").html(`<strong>${likelihood_object["qualitative"]} (${likelihood})</strong> <em>${likelihood_object["description"]}</em>`);
  }

  tweak_non_adversarial_threat_source_characteristics_form() {
    // NON_ADVERSARIAL_THREAT_SOURCE_EFFECT
    let range_of_effects = $("#non-adversarial-range-of-effects").val();
    let range_of_effects_object = NON_ADVERSARIAL_THREAT_SOURCE_EFFECT[this.map_quantitative(range_of_effects)];

    $("#non-adversarial-range-of-effects-prose").html(`<strong>${range_of_effects_object["qualitative"]} (${range_of_effects})</strong> <em>${range_of_effects_object["description"]}</em>`);

    // THREAT_EVENT_OCCURENCE_LIKELIHOOD
    let likelihood = $("#non-adversarial-event-occurence").val();
    let likelihood_object = THREAT_EVENT_OCCURENCE_LIKELIHOOD[this.map_quantitative(likelihood)];

    $("#non-adversarial-event-occurence-prose").html(`<strong>${likelihood_object["qualitative"]} (${likelihood})</strong> <em>${likelihood_object["description"]}</em>`);
  }

  tweak_threat_source_form() {
    let threat_source_category = $("#threat-source-category").val();
    let threat_source_category_prose = THREAT_SOURCE;

    // Note: We have to keep a strict mapping of qualitative categories to the 
    // indices in our THREAT_SOURCE object. It's... Not ideal. Ugh! Javascript.
    switch(threat_source_category) {
      case "--":
        $("#adversarial-threat-source-form-group").hide();
        $("#non-adversarial-threat-source-form-group").hide();
        $("#threat-source-category-prose").html(``);
        break;
      case "Adversarial":
        $("#threat-source-category-prose").html(`<em>${THREAT_SOURCE[0].description}</em>`);

        $("#adversarial-threat-source-form-group").show();
        $("#non-adversarial-threat-source-form-group").hide();

        this.tweak_adversarial_threat_source_characteristics_form();
        break;
      case "Accidental":
        $("#threat-source-category-prose").html(`<em>${THREAT_SOURCE[1].description}</em>`);

        $("#adversarial-threat-source-form-group").hide();
        $("#non-adversarial-threat-source-form-group").show();

        this.tweak_non_adversarial_threat_source_characteristics_form();
        break;
      case "Structural":
        $("#threat-source-category-prose").html(`<em>${THREAT_SOURCE[2].description}</em>`);

        $("#adversarial-threat-source-form-group").hide();
        $("#non-adversarial-threat-source-form-group").show();

        this.tweak_non_adversarial_threat_source_characteristics_form();
        break;
      case "Environmental":
        $("#threat-source-category-prose").html(`<em>${THREAT_SOURCE[3].description}</em>`);

        $("#adversarial-threat-source-form-group").hide();
        $("#non-adversarial-threat-source-form-group").show();

        this.tweak_non_adversarial_threat_source_characteristics_form();
        break;
      default:
        $("#threat-source-category-prose").html(``);
        $("#adversarial-threat-source-form-group").hide();
        $("#non-adversarial-threat-source-form-group").hide();
        break;
    }
  }

  tweak_likelihood_form() {
    let threat_source_category = $("#threat-source-category").val();

    switch(threat_source_category) {
      case "--":
        $("#adversarial-event-initiation-form-group").hide();
        $("#non-adversarial-event-occurence-form-group").hide();
        break;
      case "Adversarial":
        $("#adversarial-event-initiation-form-group").show();
        $("#non-adversarial-event-occurence-form-group").hide();
        break;
      case "Accidental":
        $("#adversarial-event-initiation-form-group").hide();
        $("#non-adversarial-event-occurence-form-group").show();
        break;
      case "Structural":
        $("#adversarial-event-initiation-form-group").hide();
        $("#non-adversarial-event-occurence-form-group").show();
        break;
      case "Environmental":
        $("#adversarial-event-initiation-form-group").hide();
        $("#non-adversarial-event-occurence-form-group").show();
        break;
      default:
        $("#adversarial-event-initiation-form-group").hide();
        $("#non-adversarial-event-occurence-form-group").hide();
        break;
    }

    let adverse_likelihood = $("#adverse-likelihoods").val();
    let adverse_likelihood_object = THREAT_EVENT_ADVERSE_LIKELIHOOD[this.map_quantitative(adverse_likelihood)];

    $("#adverse-likelihoods-prose").html(`<strong>${adverse_likelihood_object["qualitative"]} (${adverse_likelihood})</strong> <em>${adverse_likelihood_object["description"]}</em>`);
  }

  tweak_impact_form() {
    let impact_category = $("#impact-category").val();
    let impact_category_object = "";

    switch(impact_category) {
      case "--":
        impact_category_object = "";
        break;
      case "1":
        impact_category_object = ADVERSE_IMPACT[0];
        break;
      case "2":
        impact_category_object = ADVERSE_IMPACT[1];
        break;
      case "3":
        impact_category_object = ADVERSE_IMPACT[2];
        break;
      case "4":
        impact_category_object = ADVERSE_IMPACT[3];
        break;
      case "5":
        impact_category_object = ADVERSE_IMPACT[4];
        break;
      default:
        impact_category_object = "";
        break;
    }

    if(impact_category_object == "") {
      $("#impact-category-prose").html(``);
    } else {
      // $("#impact-category-prose").html(`<em>${impact_category_object["description"]}</em>`);
      $("#impact-category-prose").html(``);
    }

    let adverse_impact_severity = $("#adverse-impact-severity").val();
    let adverse_impact_severity_object = ADVERSE_IMPACT_SEVERITY[this.map_quantitative(adverse_impact_severity)];

    $("#adverse-impact-severity-prose").html(`<strong>${adverse_impact_severity_object["qualitative"]} (${adverse_impact_severity})</strong> <em>${adverse_impact_severity_object["description"]}</em>`);
  }

  tweak_recommendation_form() {
    let recommendations = $("#recommendations").val();
    $("#markdown-recommendations").html(`${recommendations}`);
  }

  render_markdown_title() {
    let title = $("#title").val();

    if(title == "") {
      $("#markdown-title").html(``);
      return false;
    } else {
      $("#markdown-title").html(`<strong>## ${title}</strong>`);
      return true;
    }
  }

  render_markdown_finding() {
    let finding = $("#finding").val();
    
    if(finding == "") {
      $("#markdown-finding").html(``);
      $("#markdown-finding-severity").html(``);
      
      return false;
    } else {
      $("#markdown-finding").html(`${finding}`);

      let finding_severity = $("#finding-severity").val();
      let finding_severity_object = VULNERABILITY_SEVERITY[this.map_quantitative(finding_severity)];

      $("#markdown-finding-severity").html(`We believe the overall severity of this finding to be <strong>*${finding_severity_object["qualitative"]} (${finding_severity})*</strong>; <em>_${finding_severity_object["description"]}_</em>`);

      return true;
    }
  }

  render_markdown_likelihood() {
    let likelihood = $("#adverse-likelihoods").val();
    let likelihood_object = THREAT_EVENT_ADVERSE_LIKELIHOOD[this.map_quantitative(likelihood)];
    let likelihood_notes = $("#likelihood-notes").val();

    $("#markdown-likelihood").html(`We believe the likelihood of a threat event having an adverse impact to be <strong>*${likelihood_object["qualitative"]} (${likelihood})*</strong>; <em>_${likelihood_object["description"]}_</em>`);
    $("#markdown-likelihood-notes").html(`${likelihood_notes}`);
  }

  render_markdown_impact() {
    let impact_category = $("#impact-category").val();
    let impact_category_object = "";

    switch(impact_category) {
      case "--":
        impact_category_object = "";
        break;
      case "1":
        impact_category_object = ADVERSE_IMPACT[0];
        break;
      case "2":
        impact_category_object = ADVERSE_IMPACT[1];
        break;
      case "3":
        impact_category_object = ADVERSE_IMPACT[2];
        break;
      case "4":
        impact_category_object = ADVERSE_IMPACT[3];
        break;
      case "5":
        impact_category_object = ADVERSE_IMPACT[4];
        break;
      default:
        impact_category_object = "";
        break;
    }

    let adverse_impact_severity = $("#adverse-impact-severity").val();
    let adverse_impact_severity_object = ADVERSE_IMPACT_SEVERITY[this.map_quantitative(adverse_impact_severity)];

    let impact_notes = $("#impact-notes").val();

    if(impact_category_object == "") {
      $("#markdown-impact").html(``);
    } else {
      $("#markdown-impact").html(`We believe the potential severity of adverse impacts posing <strong>*${impact_category_object["category"]}*</strong> to be <strong>*${adverse_impact_severity_object["qualitative"]} (${adverse_impact_severity})*</strong>; <em>_${adverse_impact_severity_object["description"]}_</em>`);
      $("#markdown-impact-notes").html(`${impact_notes}`);
    }
  }

  render_markdown_recommendations() {
    let recommendations = $("#recommendations").val();

    if(recommendations == "") {
      $("#markdown-recommendations-notes").html(``);
    } else {
      $("#markdown-recommendations-notes").html(`${recommendations}`);
    }
  }

  render_markdown_risk_summary() {
    let finding_severity = $("#finding-severity").val() * 1.0;
    let likelihood = $("#adverse-likelihoods").val() * 1.0;
    let impact = $("#adverse-impact-severity").val() * 1.0;

    let risk = Math.floor((finding_severity + likelihood + impact) / 3);
    let qualitative_risk = "";

    switch(risk) {
      case 1:
        qualitative_risk = "Very Low";
        break;
      case 2:
        qualitative_risk = "Low";
        break;
      case 3:
        qualitative_risk = "Low";
        break;
      case 4:
        qualitative_risk = "Low";
        break;
      case 5:
        qualitative_risk = "Moderate";
        break;
      case 6:
        qualitative_risk = "Moderate";
        break;
      case 7:
        qualitative_risk = "Moderate";
        break;
      case 8:
        qualitative_risk = "High";
        break;
      case 9:
        qualitative_risk = "High";
        break;
      case 10:
        qualitative_risk = "Very High";
        break;
      default:
        qualitative_risk = "Very Low";
        break;
    }

    $("#markdown-risk-summary").html(`We believe the overall risk posed by this finding to be <strong>*${qualitative_risk} (${risk})*</strong>.`);
  }

  render_markdown_adversarial_threat_source(category) {
    let capability = $("#adversarial-capability").val();
    let capability_object = ADVERSARIAL_THREAT_SOURCE_CAPABILITY[this.map_quantitative(capability)];

    let intent = $("#adversarial-intent").val();
    let intent_object = ADVERSARIAL_THREAT_SOURCE_INTENT[this.map_quantitative(intent)];

    let targeting = $("#adversarial-targeting").val();
    let targeting_object = ADVERSARIAL_THREAT_SOURCE_TARGETING[this.map_quantitative(targeting)];

    let likelihood = $("#adversarial-event-initiation").val();
    let likelihood_object = THREAT_EVENT_INITIATION_LIKELIHOOD[this.map_quantitative(likelihood)];

    $("#markdown-threat-source").html(`We believe the most pertinent threat source to be <strong>*${category}*</strong> with <strong>*${capability_object["qualitative"]} (${capability})*</strong> <em>_Capability_</em>, <strong>*${intent_object["qualitative"]} (${intent})*</strong> <em>_Intent_</em>, and <strong>*${targeting_object["qualitative"]} (${targeting})*</strong> <em>_Targeting_</em>:<br/><br/><em>_${} ${} ${} ${}_</em>`);
  }

  render_markdown_non_adversarial_threat_source(category) {
    $("#markdown-threat-source").html(`We believe the most pertinent threat source to be <strong>*${category}*</strong> with potentially <strong>**</strong> <em>_Range of Effects_</em>:<br/><br/><em>__</em>`);
  }

  render_markdown_threat_source() {
    let threat_source = $("#threat-source-category").val();

    switch(threat_source) {
      case "--":
        $("#markdown-threat-source").html(``);
        break;
      case "Adversarial":
        this.render_markdown_adversarial_threat_source(threat_source);
        break;
      case "Accidental":
        this.render_markdown_non_adversarial_threat_source(threat_source);
        break;
      case "Structural":
        this.render_markdown_non_adversarial_threat_source(threat_source);
        break;
      case "Environmental":
        this.render_markdown_non_adversarial_threat_source(threat_source);
        break;
      default:
        $("#markdown-threat-source").html(``);
        break;
    }
  }

  render_risk_assessment() {
    $("#markdown-risk-assessment").html(`<strong>## Risk assessment</strong>`);

    this.render_markdown_threat_source();
    this.render_markdown_likelihood();
    this.render_markdown_impact();
    this.render_markdown_risk_summary();
  }

  render_recommendations() {
    $("#markdown-recommendations").html(`<strong>## Recommendations</strong>`);

    this.render_markdown_recommendations();
  }

  clear_markdown() {
    $("#markdown-title").html(``);  
    $("#markdown-finding").html(``);
    $("#markdown-finding-severity").html(``);
    $("#markdown-risk-assessment").html(``);
    $("#markdown-threat-source").html(``);
    $("#markdown-likelihood").html(``);
    $("#markdown-impact").html(``);
    $("#markdown-recommendations").html(``);
  }

  render_markdown() {
    let title = this.render_markdown_title();
    let finding = this.render_markdown_finding();

    // Functionally turns title and finding into
    // required fields to kick off rendering.
    if(title && finding) {
      this.render_risk_assessment();
      this.render_recommendations();
    } else {
      this.clear_markdown();
    }
  }

  render() {
    console.log("Rendering!");

    // Conditional Form Stuff

    // Meta Form
    this.tweak_title_form();
    this.tweak_finding_form();

    // Threat Sources, Likelihoods, and Impacts Form
    this.tweak_threat_source_form();
    this.tweak_likelihood_form();
    this.tweak_impact_form();

    // Recommendations Form
    this.tweak_recommendation_form();

    // Content Rendering

    this.render_markdown();
    // this.render_json();
  }
} 
