# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_26_061351) do

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "provider"
    t.string "uid"
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "attorneys", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.string "phone"
    t.string "fax"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "imagings", force: :cascade do |t|
    t.date "sent"
    t.string "facility"
    t.boolean "scheduled"
    t.date "completed"
    t.integer "attempts_to_receive"
    t.date "received"
    t.string "areas"
    t.integer "patient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "method"
    t.index ["patient_id"], name: "index_imagings_on_patient_id"
  end

  create_table "patients", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.date "dob"
    t.string "sex"
    t.date "dol"
    t.date "initial"
    t.string "case_manager"
    t.text "notes"
    t.string "referred_by"
    t.string "email"
    t.integer "attorney_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attorney_id"], name: "index_patients_on_attorney_id"
  end

  create_table "referrals", force: :cascade do |t|
    t.date "sent"
    t.string "facility"
    t.text "reason"
    t.integer "patient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patient_id"], name: "index_referrals_on_patient_id"
  end

  create_table "treatments", force: :cascade do |t|
    t.date "start"
    t.string "frequency"
    t.string "therapy"
    t.integer "patient_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["patient_id"], name: "index_treatments_on_patient_id"
  end

  add_foreign_key "imagings", "patients"
  add_foreign_key "patients", "attorneys"
  add_foreign_key "referrals", "patients"
  add_foreign_key "treatments", "patients"
end
