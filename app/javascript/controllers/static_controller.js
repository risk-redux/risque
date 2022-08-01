import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  render_title() {
    title = $("#title").val();
    $("#markdown-title").html(`## ${title}`);
  }

  render_finding() {
    finding = $("#finding").val();
    $("#markdown-finding").html(`${finding}`);

    finding_severity = $("#finding_severity").val();
    $("#markdown-finding-severity").html(`We believe the overall severity of this finding to be \`${finding_severity}\`.`);
  }

  render_risk_assessment() {

  }

  render_recommendations() {
    recommendations = $("#recommendations").val();
    $("#markdown-recommendations").html(`${recommendations}`);
  }

  render() {
    console.log("Rendering!");

    this.render_title();
    this.render_finding();
    this.render_risk_assessment();
    this.render_recommendations();
  }
} 
