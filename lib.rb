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

  def from_bin
    self.to_i(2)
  end

  def chunk(length=1)
    self.scan(/.{#{length}}/)
  end

  def encode64
    Base64.encode64(self).chomp.gsub('==', '')
  end

  def decode64
    Base64.decode64(self)
  end

  def to_data
    [self].pack("H*")
  end

  def from_data
    each_byte.to_a
  end

  def roman_sub
    [
        ['ix', '9'],
        ['iv', '4'],
        ['viii', '8'],
        ['vii', '7'],
        ['vi', '6'],
        ['v', '5'],
        ['iii', '3'],
        ['ii', '2'],
        ['i', '1']
    ].each do |rom, dec|
      self.gsub!(rom, dec)
    end
    self
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

  def to_bin
    self.to_s(2)
  end
end

class Array
  def chunk(length=1)
    self.join.chunk(length).tap { |_| dump :chunk, _ }
  end

  def to_s
    map(&:to_s).tap { |_| dump :to_s, _ }
  end

  def method_missing(meth_id, *args, &block)
    collect { |x| x.send(meth_id, *args) }.flatten.tap { |_| dump meth_id, _ }
  end

  def dump(meth_id=:self, ary=self)
    puts "#{meth_id.to_s.ljust(14)}: #{ary.inspect}"
    self
  end

  def xlate(hash_map={})
    collect { |x| hash_map.include?(x) ? hash_map[x] : x }.flatten.tap { |_| dump :xlate, _ }
  end

  def encode64
    self.join.encode64.tap { |_| dump 'encode64', _ }
  end

  def decode64
    self.join.decode64.tap { |_| dump 'decode64', _ }
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
