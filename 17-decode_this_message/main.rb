
def decode_encode (message, shift_num)
  message_chars = message.downcase.split("")
  alphabet_chars = ("a".."z").to_a
  crypto_chars = alphabet_chars.rotate(shift_num)
  result_chars = []
  message_chars.each do |char|
    if crypto_chars.index(char) == nil
      result_chars.push(char)
    else
      crypto_chars_index = crypto_chars.index(char)
      result_chars.push(alphabet_chars[crypto_chars_index])
    end
  end
  result = result_chars.join("")
  return result.capitalize
end

p decode_encode("ihk khh khodeti", -7)