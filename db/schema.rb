# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2017_12_27_144214) do

  create_table "adversarial_threat_source_capabilities", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "adversarial_threat_source_intents", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "adversarial_threat_source_targetings", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "adverse_impacts", force: :cascade do |t|
    t.string "category"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "non_adversarial_threat_source_effects", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "predisposing_condition_pervasivenesses", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "predisposing_conditions", force: :cascade do |t|
    t.string "category"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "threat_event_adverse_impact_likelihoods", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "threat_event_impacts", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "threat_event_initiation_likelihoods", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "threat_event_occurence_likelihoods", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "threat_event_relevances", force: :cascade do |t|
    t.string "qualitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "threat_events", force: :cascade do |t|
    t.string "category"
    t.string "ttp"
    t.text "description"
    t.boolean "is_adversarial"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "threat_oriented_risk_objects", force: :cascade do |t|
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "account_id"
  end

  create_table "threat_sources", force: :cascade do |t|
    t.string "category"
    t.text "description"
    t.boolean "is_adversarial"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "vulnerability_severities", force: :cascade do |t|
    t.string "qualitative"
    t.integer "quantitative"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
