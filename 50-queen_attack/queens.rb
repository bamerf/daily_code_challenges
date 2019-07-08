
class Queens

  def initialize(data={white: [0, 3], black: [7, 3]})
    raise ArgumentError, 'Same postition' if data[:white] == data[:black]
    @white = data[:white]
    @black = data[:black]
  end

  def white
    @white
  end

  def black
    @black
  end

  def to_s
    <<-BOARD.chomp
O O O O O O O O
O O O O O O O O
O O O O W O O O
O O O O O O O O
O O O O O O O O
O O O O O O O O
O O O O O O B O
O O O O O O O O
    BOARD
  end

  def attack?

    if @white[0] == @black[0] || @white[1] == @black[1]
      true
    elsif (@white[0] - @black[0]) / (@white[1] - @black[1]) == 1
      true
    else
      false
    end

  end

end