# Create Attorneys
attorneys = []
5.times do
    attorney = Attorney.create(
        name: '#{Faker::Company.name} Lawfirm', 
        address: '#{Faker::Address.street_address}', 
        city: '#{Faker::Address.city}', 
        state: '#{Faker::Address.state_abbr}', 
        zip: Faker::Address.zip, 
        phone: '#{Faker::PhoneNumber.phone_number}', 
        fax: '#{Faker::PhoneNumber.phone_number}'
    )
    attorneys << attorney
end

# Create Patients
patients = []
gender = ["M", "F"]
20.times do
    patient = Patient.create(
        attorney: attorneys.sample(1),
        name: '#{Faker::Name.name}',
        dob: Faker::Date.birthday(min_age: 18, max_age: 80),
        sex: gender.sample(1),
        dol: Faker::Date.between(from: '2021-01-01', to: Date.today),
        initial: Faker::Date.between(from: '2021-01-01', to: Date.today),
        email: '#{Faker::Internet.email}',
    )
    patients << patient
end