require "fileutils"

lines = []
@suspect_info = {}

info = File.open("info.txt", "r")

info.each_line do |line|
  lines << line.split(',')
end
info.close

lines.shift

# print lines

def suspect_info(name, product, unit_price, units)

  

  if @suspect_info.key?(name)
    @suspect_info[name]
  else 
    @suspect_info[name] = []
  end

  

  info = {}
  info[:product] = product
  info[:unit_price] = unit_price
  info[:units] = units.gsub("\n", "")
  info[:total_price] = sprintf('%.2f', unit_price.to_f * units.to_f)
  @suspect_info[name] << info

end

lines.each do |line|
  suspect_info(line[0], line[1], line[2], line[3])
end

p @suspect_info