# Create Attorneys
5.times do
    attorney = Attorney.create(
        name: "#{Faker::Company.name} Lawfirm", 
        address: "#{Faker::Address.street_address}", 
        city: "#{Faker::Address.city}", 
        state: "#{Faker::Address.state_abbr}", 
        zip: Faker::Address.zip, 
        phone: "#{Faker::PhoneNumber.phone_number}", 
        fax: "#{Faker::PhoneNumber.phone_number}"
    )
end

# Create Patients
20.times do
    patient = Patient.create(
        attorney: Attorney.all.sample,
        first_name: "#{Faker::Name.first_name }",
        last_name: "#{Faker::Name.last_name}",
        dob: Faker::Date.birthday(min_age: 18, max_age: 80),
        sex: Faker::Gender.short_binary_type,
        dol: Faker::Date.between(from: "2021-01-01", to: Date.today),
        initial: Faker::Date.between(from: "2021-01-01", to: Date.today),
        email: "#{Faker::Internet.email}"
    )
end