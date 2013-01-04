require 'base64'

class String
  def to_ascii
    self.ord
  end

  def from_hex
    self.to_i(16)
  end

  def from_oct
    self.to_i(8)
  end

  def chunk(length=1)
    self.scan(/.{#{length}}/)
  end
end

# always base 10
class Fixnum
  def to_hex
    self.to_s(16)
  end

  def to_letter
    self.chr
  end
                                    
  def to_oct
    self.to_s(8)
  end
end

class Array
  def to_s
    map(&:to_s).tap { |_| dump :to_s, _ }
  end

  def method_missing(meth_id, *args, &block)
    collect { |x| x.send(meth_id) }.flatten.tap { |_| dump meth_id, _ }
  end

  def dump(meth_id, ary)
    puts "#{meth_id.to_s.ljust(10)}: #{ary.inspect}"
  end

  def xlate(hash_map={})
    collect { |x| hash_map.include?(x) ? hash_map[x] : x }.flatten.tap { |_| dump :xlate, _ }
  end
end

def regex
  /[2-9][p-z][a-h][2-9]\w*[p-z][2-9][p-z][2-9][p-z]/
end

def check_code(code)
  # code.downcase =~ /\d[p-z][a-n]\d\w*[p-z]\d[p-z]\d[p-z]/
  code.downcase =~ regex
end

def diagnostics
  # String
  raise 'to_ascii' if 'E'.to_ascii != 69
  raise 'from_hex' if '69'.from_hex != 105
  raise 'from_oct' if '140'.from_oct != 96
  raise 'chunk(1)' if '123'.chunk != %w(1 2 3)
  raise 'chunk(2)' if '1234'.chunk(2) != %w(12 34)

  # Fixnum
  raise 'to_oct' if 69.to_oct != '105'
  raise 'Array#to_oct' if [69, 69].to_oct != %w(105 105)
  raise 'to_hex' if 69.to_hex != '45'
  raise 'to_letter' if 69.to_letter != 'E'

  %w(4re3q5s2z 5xb2writeq5z6v 7yh2mistyr9v9u 3yb4nianticx9q8p).each do |code|
    raise "check_code #{code}" if !check_code(code)
  end
end

diagnostics

@letters_two = %w(L E N L E T E Z E A A O X)
# @letters_two.to_ascii.to_s.from_hex.to_letter
%W(v i x v i \x84 i \x90 i e e y \x88)

# @letters_two.xlate({'L' => 2, 'E' => 4, 'N' => 1, 'T' => 1, 'Z' => 1, 'A' => 2, 'O' => 1, 'X' => 1})
[2, 4, 1, 2, 4, 1, 4, 1, 4, 2, 2, 1, 1]

@einstein = %w(69 76 72 65 69 69 69 71 76 73 69 69 7A)
# from_hex.to_letter