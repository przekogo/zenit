puts 'seeding buildings...'
if Building.count > 0
  puts "already seeded"
else
  ['Azure Lotus', 'Crystal Lily', 'Golden Orchid', 'Crimson Rose', 'Lavender Iris'].each do |name|
    Building.create!(name: name)
    puts "#{name} created"
  end
end
puts 'done'
